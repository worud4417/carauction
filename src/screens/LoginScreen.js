import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableHighlight} from 'react-native';

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

    async _onPressButton(){
        member = await fetchUser(this.state.id, this.state.email)
        // if (! member){
        //     alert("fail");
        //     return false
        // }
        // if (member.length!==1){
        //     alert("fail");
        //     return false
        // }
        this.setState({id:"lee",email:"worud4417@hanmail.net"})
        return this.props.navigation.navigate('MyCarList',{email:this.state.email})
    }

    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>CAR AUCTION</Text>
                <TextInput style={styles.textinput} onChangeText={text=>this._onChangeIdText(text)} placeholder="이름"></TextInput>
                <TextInput style={styles.textinput} onChangeText={text=>this._onChangeEmailText(text)} placeholder="이메일"></TextInput>
                <TouchableHighlight style={styles.button1} onPress={()=>this._onPressButton()}>
                    <Text style={{alignSelf:"center",color:"white",fontSize:20}}>회원가입/로그인</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

async function fetchUser(id,email) {
    url = 'http://52.78.89.146:3000/api/Member';
    filter = `{"where":{"and":[{"email":"${email}"},{"lastName":"${id}"}]}}`;
    url = `${url}?filter=${filter}`
    return await fetch(url,{
        method:"GET",
    }).then((resp)=>{
        // console.log(resp.json())
        return resp.json()
    })
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