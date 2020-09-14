import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Grid, Icon, Button, Carousel } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Falv extends Component {
    constructor(){
        super();
        this.state = {
            totaldata: [] ,
            page:0
            };
    }

    componentDidMount() {
        var data = this.props.key;
        fetch("http://101.201.252.4:3389/show",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:data}), // data can be `string` or {object}!
            headers: 
            {"Content-Type": "application/json"}
            })
            .then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
            })
    }
    back=()=>{
        Actions.pop();
    }
    render() {
        this.state.totaldata.map(function(name){
            var arr = name.src;
            var arr1 = name.name;
            var arr2 = name.title;
            var arr3 = name.new;
            var arr4 = name.herf;
        },this)
        return (
            <ScrollView>
            <View style={{backgroundColor:'white'}}>
                <View style={styles.view1}>
                    <TouchableOpacity style={styles.button1} onPress={this.back}>
                        <Image source={require('../images/7.png')} style={styles.image1}/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>浏览历史</Text>
                </View>
                {
                    this.state.totaldata.map(function(name){
                        return(
                            <TouchableOpacity style={styles.book} onPress={()=>Actions.tuijian2({key:name.herf})}>
                                {/* <View style={{marginLeft:10*s}}>
                                <Image style={{width:140,height:200,borderRadius:10*s}} source={{uri:'https://images.weserv.nl/?url='+name.src}}/>
                                </View> */}
                                <View style={{marginLeft:10*s,width:640*s,borderBottomWidth:1}}>
                                    <Text style={{fontSize:18}}>{name.name.replace(/\s*/g,"")}</Text>
                                    <Text style={{color:'grey',marginTop:8*s}}>{name.press}</Text>
                                    <Text style={{marginTop:30*s,color:'grey'}}>{name.title.replace(/\s*/g,"")}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    },this)
                }
            </View>
            </ScrollView>
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
        height:50,
        width:width,
        flexDirection:'row',
    },
    button2:{
        width:'30%',
        height:50,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'13.3%',
    },
    book:{
        flexDirection:'row',
        marginTop:30*s,
        // backgroundColor:'red'
    }
})