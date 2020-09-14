import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions,Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Zhanghaoyuanquan extends Component{
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
                        <Image source={require('../myimages/1.png')} style={styles.image1}/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>账号与安全</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text2}>声音锁</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>应急联系人</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>登录设备管理</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>误读安全中心</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View> 
                <View style={styles.view3}>
                    <Text style={styles.text2}>手机安全中心</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
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
})