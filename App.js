import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from './src/screens/LoginScreen';
import MyCarListScreen from './src/screens/MyCarListScreen';

const MyCarListStackNaviagtor = createStackNavigator({
  MyCarList:{
    screen:MyCarListScreen
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  MyCarListStack:{
    screen:MyCarListStackNaviagtor
  }
});

const SwitchNavigator = createSwitchNavigator({
  Login:{
    screen:LoginScreen
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
