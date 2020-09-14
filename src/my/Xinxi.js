import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions,Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Xinxi extends Component{
    constructor(){
        super()
    }
    back=()=>{
        Actions.pop();
    }
    render(){
        return(
            <View>
                <View style={styles.view1}>
                    <TouchableOpacity style={styles.button1} onPress={this.back}>
                        <Image source={require('../images/7.png')} style={styles.image1}/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>个人信息</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text2}>姓名</Text>
                    <TextInput placeholder='请输入姓名' style={styles.textinput2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>电话</Text>
                    <TextInput placeholder='请输入电话' style={styles.textinput2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>出生年月</Text>
                    <TextInput placeholder='请输入出生年月' style={styles.textinput3}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>个性签名</Text>
                    <TextInput placeholder='请输入个性签名' style={styles.textinput3}/>
                </View>   
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view1:{
        width:width,
        height:50,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#0e86ff'
    },
    button1:{
        width:'10%',
        height:40,
    },
    image1:{
        width:'100%',
        height:'100%',
    },
    text1:{
        marginLeft:'30%',
        fontSize:30,
    },
    view2:{
        width:width,
        height:75,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        marginTop:50,
    },
    view3:{
        width:width,
        height:75,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        marginTop:10,
    },
    text2:{
        fontSize:20,
        color:'gray',
        marginLeft:'5%',
    },
    image2:{
        width:'10%',
        height:20,
        position:'absolute',
        left:'85%',
    },
    textinput2:{
        width:'50%',
        height:50,
        marginLeft:'15%',
    },
    textinput3:{
        width:'50%',
        height:50,
        marginLeft:'8%',
    },
})