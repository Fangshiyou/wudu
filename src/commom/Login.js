import React, { Component } from 'react';
import {TouchableOpacity,StyleSheet,TextInput,View,Text,Alert,
Button,ToastAndroid,AsyncStorage,BackHandler,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
const { width } = Dimensions.get('window');
import { Icon } from '@ant-design/react-native';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"" ,
            password:""
            };
    }
    onBackButtonPressAndroid = () =>{
        if (this.props.navigation.isFocused()) {
            if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次推出应用',ToastAndroid.SHORT);
            return true;
        }
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);

    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);
    }
    onUsernameChanged = (newUsername) => {
        //运行后可以在输入框随意输入内容并且查看log验证！
        this.setState({username:newUsername});
        console.log(this.state.username);
    };

    onPasswordChanged = (newPassword) => {
        this.setState({password:newPassword});
        console.log(this.state.password);
    };
    denglu = ()=>{
        ToastAndroid.show('正在登录',ToastAndroid.SHORT);
        fetch("http://101.201.252.4:3389/login",{
            method:'POST',
            body:JSON.stringify({
                user:this.state.username,
                pwd:this.state.password
            }),
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
            .then(res => {
                if (res == '[]') {
                    ToastAndroid.show('输入错误',ToastAndroid.SHORT);
                } else {
                    Actions.homepage();
                    AsyncStorage.setItem('us',this.state.username,()=>{console.log('store success'+this.state.username)} )
                }
                
            
            })
            
        
    }


    render() {
        return (
            <View style={styles.view0}>

                <View style={styles.view1}>
                    <Text style={styles.text1}>误&nbsp;&nbsp;&nbsp;&nbsp;读</Text>
                </View>
                <View style={styles.view2}>
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
                            onChangeText={this.onUsernameChanged}
                            placeholder="请输入用户名"
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
                            onChangeText={this.onPasswordChanged}
                            placeholder="请输入密码"
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
                        onPress={this.denglu}>
                        <Text style={{color:"#fff",fontSize:17}}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={()=>Actions.zhuce()}>
                        <Text style={styles.text2}>没有账号，去注册?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view0:{
        flex:1,
        backgroundColor:'white'
    },
    view1:{
        width:width,
        height:0.4*width,
        marginTop:0.1*width,
        alignItems:'center',
        justifyContent:'center',
    },
    text1:{
        color:'gray',
        fontSize:50,
    },
    view2:{
        height:0.5*width,
        width:width,
        justifyContent:'center',
        alignItems:'center'
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
});
