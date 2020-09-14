import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions,Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Shezhi extends Component{
    constructor(){
        super()
    }
    zhanghaoyuanquan=()=>{
        Actions.zhanghaoyuanquan();
    }
    xinxiaoxitixing=()=>{
        Actions.xinxiaoxitixing();
    }
    guanyuwudu=()=>{
        Actions.guanyuwudu();
    }
    guanyuwomen=()=>{
        Actions.guanyuwomen();
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
                    <Text style={styles.text1}>设         置</Text>
                </View>
                <TouchableOpacity style={styles.view2} onPress={this.zhanghaoyuanquan}>
                    <Text style={styles.text2}>账户与安全</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view3} onPress={this.xinxiaoxitixing}>
                    <Text style={styles.text2}>新消息提醒</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </TouchableOpacity>
                <View style={styles.view4}>
                    <Text style={styles.text2}>通用</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text2}>字体大小</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text2}>省流量模式</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </View>
                <TouchableOpacity style={styles.view4} onPress={this.guanyuwudu}>
                    <Text style={styles.text2}>关于误读</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view4} onPress={this.guanyuwomen}>
                    <Text style={styles.text2}>关于我们</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </TouchableOpacity>
                <View style={styles.view3}>
                    <Text style={styles.text2}>黑名单</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text2}>阅读插件</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text2}>检查更新</Text>
                    <Image source={require('../images/8.png')} style={styles.image2}/>
                </View>
                <View style={styles.view5}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.text3}>切 换 账 号</Text>
                    </TouchableOpacity>
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
        position:'relative'
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
    view3:{
        width:width,
        height:75,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,
        borderColor:'black',
    },
    view4:{
        width:width,
        height:75,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderColor:'black',
    },
    view5:{
        width:width,
        height:100,
        marginTop:50,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    text3:{
        fontSize:30,
    },
    button2:{
        width:'80%',
        height:75,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0e86ff'
    }
})