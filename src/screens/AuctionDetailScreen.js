import React from 'react';
import {View,Text} from 'react-native';

class AuctionDetailScreen extends React.Component{

    constructor(props){
        super(props)
    }

    static navigationOptions =({navigation})=>{
        return{
            title:"AUCTION DETAIL",
            headerStyle:{
                backgroundColor:"orange"
            },
            headerTintColor:"white"
        }
    }


    render(){
        return(
            <View>
            </View>
        )
    }
}

export default AuctionDetailScreen