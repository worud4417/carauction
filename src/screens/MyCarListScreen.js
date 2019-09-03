import React from 'react';
import {View,Text,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CarComponent from '../components/CarComponent';

class MyCarListScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:""
        }
    }

    static navigationOptions = {
        title:"CAR LIST",
        headerStyle:{
            backgroundColor:"orange"
        },
        headerTintColor:"white",
    }

    async componentDidMount(){
        const email = this.props.navigation.getParam("email")
        console.log(email)
        this.setState({email:this.props.navigation.getParam("email")});
        let myCarList = []
        await fetchCarList("9u@com")
    }

    _renderItem = ({item})=>(
        <TouchableOpacity>
            <CarComponent car={item}></CarComponent>
        </TouchableOpacity>
    )

    render(){
        return(
            <View>
                <Text>MyCarListScreen</Text>
                <FlatList data={this.state.myCarList} keyExtractor={(item,index)=>item.vin}
                renderItem={(item)=>this._renderItem(item)}></FlatList>
            </View>
        )
    }
}

async function fetchCarList(email){
    url = "http://52.78.89.146:3000/api/Car";
    console.log(email)
    const filter = {
        where:{
            owner:`resource:com.betweak.carauction.Member#worud4417@hanmail.net`           
        }
    }
    term2 = 'http://52.78.89.146:3000/api/Car?filter={"where":{"owner":"resource:com.betweak.carauction.Member#worud4417@hanmail.net"}}'
    term = JSON.stringify(filter);
    console.log(term)
    url = `${url}?filter=${term}`
    console.log(url)
    return await fetch(url, {
        method:"GET"
    }).then(resp=>{
        if(!(200<=resp.status<300)){
            return false
        }
        else{
            console.log(resp)
            return resp.json()
        }
    });
}

export default MyCarListScreen