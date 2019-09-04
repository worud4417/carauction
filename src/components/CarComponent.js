import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

class CarComponent extends React.Component{

    constructor(props){
        super(props)
    }

    _onPressButton(){
        return this.props.navigation.navigate("MyCarDetail",{car:this.props.car})
    }

    render(){
        return(
            <View style={{borderWidth:1,marginBottom:5}}>
                <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>this._onPressButton()}>
                    <Image source={{uri:this.props.car.image}} style={styles.image}></Image>
                    <View style={{marginLeft:5}}>
                        <Text>model : {this.props.car.model}</Text>
                        <Text>vin   : {this.props.car.vin}</Text>
                        <Text>brand : {this.props.car.brand}</Text>
                        <Text>year  : {this.props.car.year}</Text>
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

export default CarComponent;