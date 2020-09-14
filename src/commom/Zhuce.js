import React, { Component } from 'react';
import {View,Text,StyleSheet,Dimensions,AsyncStorage,TouchableOpacity,TextInput,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';

const {width}=Dimensions.get("window");

export default class Register extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'', 
            againPwd:''
        }
    }
    username=(text)=>{
        this.setState({username:text})
    }
    pwd=(text)=>{
        this.setState({pwd:text})
    }
    againPwd=(text)=>{
        this.setState({againPwd:text})
    }
    sginin=()=>{
        if(this.state.username=="" || this.state.pwd==""){
            ToastAndroid.show("用户名或密码不能为空.",ToastAndroid.SHORT);
        }else if(this.state.pwd!=this.state.againPwd){
            ToastAndroid.show("两次密码不一致.",ToastAndroid.SHORT);
        }else{
            myFetch.post('http://101.201.252.4:3389/register',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                if(res.data.judge==1){
                    ToastAndroid.show("用户已经注册过了",ToastAndroid.SHORT);
                }else if(res.data.judge==2){
                    ToastAndroid.show("注册失败",ToastAndroid.SHORT);
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        ToastAndroid.show("注册成功",ToastAndroid.SHORT);
                        Actions.login();  
                    })
                }       
            }); 
        }
             
    }

    render(){
        return(
            <View>
                {/* 标题栏 */}
                <View style={{
                        height:40,
                        flexDirection:"row",
                        backgroundColor:"#f23030",
                    }}> 
                        <TouchableOpacity
                            style={{
                                width:"30%",
                                height:34,
                                justifyContent:"center",
                                paddingLeft:"2%",
                            }}
                            onPress={()=>Actions.login()}>
                            <Icon style={{fontSize:25}} color={"#ffffff"} name="left"/>
                        </TouchableOpacity>
                </View>

                {/* 注册输入框 */}
                <View style={{alignItems:"center",height:"90%",}}>
                    <View style={styles.view1}>
                        <Text style={styles.text1}>误&nbsp;&nbsp;&nbsp;&nbsp;读</Text>
                    </View>
                    <View style={{
                        height:42,
                        width:"70%",
                        borderColor:"#eeeeee",
                        borderWidth:1,
                        borderRadius:7,
                        backgroundColor:"#fff",
                        marginBottom:10,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center",
                        borderRadius:20,
                    }}>
                        <Icon style={{fontSize:25,color:"#f23030"}} name="user"/>
                        <TextInput 
                            onChangeText={this.username}
                            placeholder="用户名"
                            style={{
                                height:40,
                                width:"87%",
                                backgroundColor:"#fff",
                        }}/>
                    </View>
                    <View style={{
                        height:42,
                        width:"70%",
                        borderColor:"#eeeeee",
                        borderWidth:1,
                        borderRadius:7,
                        backgroundColor:"#fff",
                        marginBottom:10,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center",
                        marginTop:20,
                        borderRadius:20,
                    }}>
                        <Icon style={{fontSize:25,color:"#f23030"}} name="lock"/>
                        <TextInput 
                            onChangeText={this.pwd}
                            placeholder="密码"
                            secureTextEntry={true}
                            style={{
                                height:40,
                                width:"87%",
                                backgroundColor:"#fff",
                        }}/>
                    </View>
                    <View style={{
                        height:42,
                        width:"70%",
                        borderColor:"#eeeeee",
                        borderWidth:1,
                        borderRadius:7,
                        backgroundColor:"#fff",
                        marginBottom:10,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center",
                        marginTop:20,
                        borderRadius:20,
                    }}>
                        <Icon style={{fontSize:25,color:"#f23030"}} name="lock"/>
                        <TextInput 
                            onChangeText={this.againPwd}
                            placeholder="确认密码"
                            secureTextEntry={true}
                            style={{
                                height:40,
                                width:"87%",
                                backgroundColor:"#fff",
                        }}/>
                    </View>
                    <TouchableOpacity style={{
                        width:"70%",
                        height:40,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"#f23030",
                        borderRadius:20,
                        marginTop:20,}} 
                        onPress={this.sginin}>
                        <Text style={{color:"#fff",fontSize:17}}>注册账号</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={()=>Actions.login()}>
                        <Text style={styles.text2}>已有账号，去登录?</Text>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    logining:{
        color:"#f23030",
        fontSize:30,
        marginTop:20
    },
    view1:{
        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    text1:{
        color:'gray',
        fontSize:75,
    },
    button1:{
        height:40,
        width:'70%',
        marginTop:15,
        borderRadius:20,
    },
    text2:{
        color:'gray',
        marginLeft:'65%',
    }
})