import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

class AuctionComponent extends React.Component{

    constructor(props){
        super(props)
    }

    _onPressButton(){
        return this.props.navigation.navigate("AuctionDetail",{car:this.props.car})
    }

    render(){
        return(
            <View style={{borderWidth:1,marginBottom:5}}>
                <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>this._onPressButton()}>
                    <View style={{marginLeft:5}}>
                        <Text>listingId : {this.props.car.listingId}</Text>
                        <Text>reservePrice   : {this.props.car.reservePrice}</Text>
                        <Text>state :{this.props.car.state}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

styles=StyleSheet.create({
    image:{
        width:100,
        height:100
    }
})

export default AuctionComponent;