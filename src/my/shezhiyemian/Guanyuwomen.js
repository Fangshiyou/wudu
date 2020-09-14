import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions,Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Guanyuwomen extends Component{
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
                    <Text style={styles.text1}>关于误读</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text2}>
                        开发团队
                    </Text>
                    <Text style={styles.text3}>项目团队：河北师大软件学院H5方向A班误读团队</Text>
                    <Text style={styles.text3}>项目成员：薛腾飞(组长) 薛明星 李继业 房世有</Text>
                    <Text style={styles.text3}>项目愿景：为读者爱好者提供阅读交流平台</Text>
                    <Text style={styles.text3}>项目周期：共八周，以每周为单位进行项目更新</Text>
                    <Text style={styles.text3}>项目前端：薛明星 李继业 房世有</Text>
                    <Text style={styles.text3}>项目后端：薛腾飞 董一凡</Text>
                    <Text style={styles.text3}>前端主要工作：页面开发、页面整合与跳转、提供系统接口</Text>
                    <Text style={styles.text3}>项目后端主要工作：数据库搭建、数据库的连接与数据的写入</Text>
                    <Text style={styles.text3}>
                        理论成果：前端页面呈现完整，多级页面跳转无误，各个系统接口
                        可以正常使用。后端与数据库的连接正确，可以实现对数据库内容
                        的写入和读取。后端页面呈现正确，功能实现正确。总而言之，就
                        是可以让用户进行正常的使用。
                    </Text>
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
        height:700,
        width:width,
        backgroundColor:'white',
        marginTop:50,
        alignItems:'center',
    },
    text2:{
        fontSize:100,
        color:'black',
    },  
    text3:{
        fontSize:25,
        color:'gray'
    }
})