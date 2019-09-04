import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

import fetchSetUser from '../apis/SetUser';

class JoinScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            firstName:"",
            lastName:""
        }
    }

    _onChangeEmailText(text){
        this.setState({email:text})
    }

    _onChangeFirstNameText(text){
        this.setState({firstName:text})
    }

    _onChangeLastNameText(text){
        this.setState({lastName:text})
    }

    async _onSubmitButton(){
        result = await fetchSetUser(100000,this.state.email,this.state.firstName,this.state.lastName)
        if(result){
            return this.props.navigation.navigate("Login")
        }
        else{
            alert("fail to join!")
        }
    }

    _onCancelButton(){
        return this.props.navigation.navigate("Login")
    }

    render(){
        return(
            <View style={styles.view}>
                <Text>JoinScreen</Text>
                <TextInput style={styles.textinput} placeholder="email" onChangeText={(text)=>this._onChangeEmailText(text)}></TextInput>
                <TextInput style={styles.textinput} placeholder="firstname" onChangeText={(text)=>this._onChangeFirstNameText(text)}></TextInput>
                <TextInput style={styles.textinput} placeholder="lastname" onChangeText={(text)=>this._onChangeLastNameText(text)}></TextInput>
                <TouchableOpacity style={styles.submitbutton} onPress={()=>this._onSubmitButton()}>
                    <Text style={styles.text}>가입</Text>
                </TouchableOpacity>
                <Text>계좌의 초기 금액은 10만원입니다.</Text>
                <TouchableOpacity style={styles.submitbutton} onPress={()=>this._onCancelButton()}>
                    <Text style={styles.text}>뒤로가기</Text>
                </TouchableOpacity>
            </View>
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
        borderWidth:1,
        borderColor:"gray",
        alignSelf:"center",
        marginTop:10
    },
    submitbutton:{
        backgroundColor:"orange",
        margin:10
    },
    text:{
        color:"white",
        alignSelf:"center"
    }
})

export default JoinScreen;