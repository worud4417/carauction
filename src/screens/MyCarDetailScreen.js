import React from 'react';
import {View,Text,StyleSheet,Image,FlatList} from 'react-native';

import fetchGetCarDetail from '../apis/getCarDetail'
import fetchGetAuctionCarList from '../apis/GetAuctionCarList'

class MyCarDetailScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            myCar:[],
            myCarAuction:[]
        }
    }

    static navigationOptions = {
        title:"MY CAR LIST",
        headerStyle:{
            backgroundColor:"orange"
        },
        headerTintColor:"white"
    }

    async componentDidMount(){
        let vin = this.props.navigation.getParam("car").vin
        this.setState({myCar:await fetchGetCarDetail(vin)})
        this.setState({myCarAuction:await fetchGetAuctionCarList(vin)})
    }

    render(){
        console.log(this.state.myCarAuction)
        return(
            <View stlye={{flex:1}}>
                <View stlye={{flex:1}}>
                    <Image source={{uri:this.state.myCar.image}} style={styles.image}></Image>
                        <View style={{marginLeft:5}}>
                            <Text>model : {this.state.myCar.model}</Text>
                            <Text>vin   : {this.state.myCar.vin}</Text>
                            <Text>brand : {this.state.myCar.brand}</Text>
                            <Text>year  : {this.state.myCar.year}</Text>
                        </View>
                </View>
                <View style={{flex:1}}>
                    {/* <FlatList data></FlatList> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"50%"
    }
})

export default MyCarDetailScreen