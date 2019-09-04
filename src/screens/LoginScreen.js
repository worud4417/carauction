import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableHighlight} from 'react-native';

import fetchUser from '../apis/GetUser';
class LoginScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:" ",
            email:" "
        }
    }

    _onChangeIdText(text){
        this.setState({id:text})
    }

    _onChangeEmailText(text){
        this.setState({email:text})
    }

    async _onPressSubmitButton(){
        member = await fetchUser(this.state.id, this.state.email)
        if (! member){
            alert("fail");
            return false
        }
        if (member.length!==1){
            alert("fail");
            return false
        }
        return this.props.navigation.navigate('MyCarList',{email:this.state.email})
    }

    _onPressJoinButton(){
        return this.props.navigation.navigate("Join")
    }

//this is test user part----------------------------------------------------------------------------------------------
    _onSubmitTestUser(){
        return this.props.navigation.navigate('MyCarList',{email:"ys@betweak.com"})
    }
//--------------------------------------------------------------------------------------------------------------------

    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>CAR AUCTION</Text>
                <TextInput style={styles.textinput} onChangeText={text=>this._onChangeIdText(text)} placeholder="  이름"></TextInput>
                <TextInput style={styles.textinput} onChangeText={text=>this._onChangeEmailText(text)} placeholder="  이메일"></TextInput>
                {/*------------------change me----*/}
                <TouchableHighlight style={styles.button1} onPress={()=>this._onSubmitTestUser()}>
                    <Text style={{alignSelf:"center",color:"white",fontSize:20}}>로그인</Text>
                </TouchableHighlight>
                {/*------------------change me----*/}
                <TouchableHighlight style={styles.button1} onPress={()=>this._onPressJoinButton()}>
                    <Text style={{alignSelf:"center",color:"white",fontSize:20}}>회원가입</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    },
    text:{
        color:"orange",
        fontSize : 30,
        alignSelf:"center"
    },
    textinput:{
        borderWidth:1,
        borderColor:"gray",
        marginTop:10,
        width:"80%",
        alignSelf:"center"
    },
    button1:{
        backgroundColor:"orange",
        width:"80%",
        marginTop:10,
        alignSelf:"center",
    }
});

export default LoginScreen;