import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,Dimensions,AsyncStorage,TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'


export default class SwiperPage extends Component{
    start=()=>{
        AsyncStorage.setItem("isInstall","true",()=>{
            this.props.afterInstall();
        });  
    }

    render(){
        return(
                <Swiper showsButtons={false}
                    autoplay={true}
                >
                    <View style={styles.slide}>
                        <Image style={styles.img} source={require("../images/slide.png")}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.img} source={require("../images/slide.png")}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.img} source={require("../images/slide.png")}/>
                        <TouchableOpacity onPress={this.start} style={styles.start}>
                            <Text style={{color:"#fff"}}>开始体验</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
        )
    }
}

const styles=StyleSheet.create({
    slide:{
        flex:1,
        height:"100%",
        alignItems:"center",
        
    },
    img:{
        width:'100%',
        height:"100%",
    },
    start:{
        position:"absolute",
        bottom:150,
        height:40,
        width:120,
        backgroundColor:"red",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    }
})