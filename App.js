import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from './src/screens/LoginScreen';
import MyCarListScreen from './src/screens/MyCarListScreen';
import JoinScreen from './src/screens/JoinScreen';
import AuctionListScreen from './src/screens/AuctionListScreen';
import MyCarAddScreen from './src/screens/MyCarAddScreen';
import MyCarDetailScreen from './src/screens/MyCarDetailScreen';
import AuctionDetailScreen from './src/screens/AuctionDetailScreen'

const MyCarListStackNaviagtor = createStackNavigator({
  MyCarList:{
    screen:MyCarListScreen
  },
  MyCarAdd:{
    screen:MyCarAddScreen
  },
  MyCarDetail:{
    screen:MyCarDetailScreen
  }
},{
  defaultNavigationOptions:{

  }
}
)

const AuctionListNavigator = createStackNavigator({
  AuctionList:{
    screen:AuctionListScreen
  },
  AuctionDetail:{
    screen:AuctionDetailScreen
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  Home:{
    screen:MyCarListStackNaviagtor
  },
  Auction:{
    screen:AuctionListNavigator
  }
});

const SwitchNavigator = createSwitchNavigator({
  Login:{
    screen:LoginScreen
  },
  Join:{
    screen:JoinScreen
  },
  BottomTab:{
    screen:BottomTabNavigator
  }
})
const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render(){
    return (
      <AppContainer></AppContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
