import React from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';

import CarComponent from '../components/CarComponent';
import fetchCarList from '../apis/GetCarList'

class MyCarListScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:"",
            myCarList:[]
        }
    }

    static navigationOptions =({navigation})=>{
        return{
            title:"CAR LIST",
            headerStyle:{
                backgroundColor:"orange"
            },
            headerTintColor:"white",
            headerRight:(
                <TouchableOpacity onPress={()=>console.log(navigation.navigate("MyCarAdd"))}>
                    <Text style={{fontSize:20,color:"white"}}> + </Text>
                </TouchableOpacity>
            )
        }
    }

    async componentDidMount(){
        const email = this.props.navigation.getParam("email")
        this.setState({myCarList:await fetchCarList(email)})
    }

    _renderItem = ({item})=>(
        <TouchableOpacity>
            <CarComponent car={item} navigation={this.props.navigation}></CarComponent>
        </TouchableOpacity>
    )


    render(){
        return(
            <View>
                <FlatList data={this.state.myCarList} keyExtractor={(item,index)=>item.vin}
                renderItem={(item)=>this._renderItem(item)}></FlatList>
            </View>
        )
    }
}

export default MyCarListScreen