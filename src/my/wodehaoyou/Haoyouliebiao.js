import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions, Button, Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Haoyouliebiao extends Component{
    constructor(){
        super();
        this.state = {
            totaldata: [] ,
            page:0
            };
    }
    back=()=>{
        Actions.pop()
    }
    componentDidMount() {
        fetch("http://101.201.252.4:3389/friends",{
            method: 'POST', // or 'PUT'
            body:JSON.stringify({name:encodeURI('法律')}), // data can be `string` or {object}!
            headers: 
            {"Content-Type": "application/json"}
            })
            .then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ totaldata: d })
                console.log(d)
            })
    }
    render(){
        this.state.totaldata.map(function(name){
            var arr1 = name.name;
            var arr2 = name.tel;
            var arr3 = name.sex;
            var arr4 = name.loc;
        },this)
        return(
            <ScrollView>
            <View>
                <View style={styles.view1}>
                    <TouchableOpacity style={styles.button1} onPress={this.back}>
                        <Image source={require('../myimages/1.png')} style={styles.image1}/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>好友列表</Text>
                </View>
                {
                    this.state.totaldata.map(function(name){
                        return(
                            <TouchableOpacity style={styles.frnd} onPress={()=>Actions.liaotiankuang()}>
                                <View>
                                    <Image source={require('../myimages/tx.jpg')} style={styles.tx}/>
                                </View>
                                <View style={{marginLeft:10*s}}>
                                    <Text style={{fontSize:18}}>{name.name}</Text>
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
    frnd:{
        flexDirection:'row',
        height:100*s,
        marginTop:20*s,
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
    tx:{
        height:80*s,
        width:80*s,
        borderRadius:80*s,
        margin:10*s,
        paddingLeft:10*s
    }
})