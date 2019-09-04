import React from 'react';
import {View,TextInput,StyleSheet,KeyboardAvoidingView,TouchableOpacity} from 'react-native';

class MyCarAddScreen extends React.Component{

    constructor(props){
        super(props)
    }

    static navigationOptions =({navigation})=>{
        return{
            title:"MY CAR ADD",
            headerStyle:{
                backgroundColor:"orange"
            },
            headerTintColor:"white"
        }
    }

    _onAddCarButton(){
        console.log()
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.view}>
                <TextInput style={styles.textinput} onChangeText={(text)=>{}} placeholder="  모델"></TextInput>
                <TextInput style={styles.textinput} onChangeText={(text)=>{}} placeholder="  vin"></TextInput>
                <TextInput style={styles.textinput} onChangeText={(text)=>{}} placeholder="  연식"></TextInput>
                <TextInput style={styles.textinput} onChangeText={(text)=>{}} placeholder="  브랜드"></TextInput>
                <TouchableOpacity style={{backgroundColor:"orange",width:"80%"}} onPress={()=>this._onAddCarButton()}>
                    <Text style={styles.text}>제출</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },  
    textinput:{
        width:"80%",
        alignSelf:"center",
        borderWidth:1,
        borderColor:"gray",
        marginBottom:10
    },
    text:{
        color:"white",
        alignSelf:"center"
    }
})

export default MyCarAddScreen