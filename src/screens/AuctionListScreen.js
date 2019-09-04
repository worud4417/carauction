import React from 'react';
import {View,Text,FlatList} from 'react-native';

import fetchAuctionList from '../apis/GetAuctionList'
import AuctionComponent from '../components/AuctionComponent'

class AuctionListScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            carList:[]
        }
        this.fetchAuctionList();
    }

    static navigationOptions =({navigation})=>{
        return{
            title:"AUCTION LIST",
            headerStyle:{
                backgroundColor:"orange"
            },
            headerTintColor:"white"
        }
    }

    fetchAuctionList = async (auctionState = "FOR_SALE")=>{
        auctionList = await fetchAuctionList(auctionState)
        this.setState({carList:auctionList})
    }

    _renderItem = ({item})=>{
        const sendItem = {
            vin:item.car.vin,
            image:item.car.item,
            brand:item.car.brand,
            year:item.car.year,
            model:item.car.model,
            state:item.state,
            listingId:item.listingId
        }
        return(
            <AuctionComponent car={sendItem} navigation={this.props.navigation}></AuctionComponent>
        )
    }

    render(){
        console.log(this.state.carList)
        return(
            <View>
                <Text>auctionScreen</Text>
                <FlatList data={this.state.carList} keyExtractor={(item,index)=>{return item.listingId}}
                renderItem={this._renderItem}></FlatList>
            </View>
        )
    }
}

export default AuctionListScreen