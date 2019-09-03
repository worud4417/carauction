import React from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';

import CarComponent from '../components/CarComponent';
import fetchCarList from '../apis/getCarList'

class MyCarListScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:"",
            myCarList:[]
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
        this.setState({myCarList:await fetchCarList(email)})
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

export default MyCarListScreen