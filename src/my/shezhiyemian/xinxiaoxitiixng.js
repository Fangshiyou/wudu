import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions,Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Xinxiaoxitixing extends Component{
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
                    <Text style={styles.text1}>新消息提醒</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text2}>新消息系统通知</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>开启震动</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>通知显示消息详情</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>阅读界面中的新消息通知</Text>
                    <Image source={require('../myimages/2.png')} style={styles.image2}/>
                </View> 
                <View style={styles.view3}>
                    <Text style={styles.text2}>接收新消息通知</Text>
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