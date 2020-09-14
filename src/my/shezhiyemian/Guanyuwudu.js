import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions,Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Guanyuwudu extends Component{
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
                        误读
                    </Text>
                    <Text style={styles.text3}>
                        误读，专为阅读爱好者开发的APP。在APP中，我们会提供众多的阅读资料
                        供大家选择，也会有专门的区域供大家记录下自己的读后感以便和他人分享。
                        而且，我们为广大读者提供链接到京东、当当等购买图书的渠道，方便大家
                        使用，误读APP好处多多，欢迎大家使用。
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
        alignItems:'center'
    },
    text2:{
        fontSize:100,
        color:'black',
        alignItems:'center'
    },  
    text3:{
        lineHeight:60,
        fontSize:30,
        color:'gray',
        marginTop:40,
    },

})