import React, { Component } from 'react'
import { Modal, TouchableHighlight, View, Image, Text, Button, StyleSheet, ScrollView, Dimensions, ToastAndroid, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class fenleitushu extends Component {
    constructor(props) {
        super(props);
        this.showT=this.showT.bind(this);
        this.showN=this.showN.bind(this);
        this.state = {
            totaldata: [] ,
            page:0,
            bname:'',
            content: '',
            time: '',
            plarr:[]
            };
    }
    showT(inputData){
        this.setState({
            bname:inputData
        });
    }
    showN(inputData){
        this.setState({
            content:inputData
        });
    }
    onclick=()=>{
        console.log(this.state.content);
        fetch('http://101.201.252.4:3389/xiezuo', {
          method: 'POST',
          mode: "cors",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            bookname: this.state.bname,
            content: this.state.content,
          })
        })
          .then(res => res.text())
          .then(res => {
            if (!res) {
              window.alert('提交失败');
            }
            else {
              this.setState({
                scdata: res
              })
            }
            console.log(res);
          }
          );
    }
    render() {
        return (<ScrollView>
            <View>
            <Text></Text><Text></Text>
            </View>
            <View style={styles.vie}>
            <Text>书名</Text>
            <Text></Text>
        <TextInput style={styles.name}  multiline={true} onChangeText={this.showT}></TextInput></View>
            <Text></Text>
            <Text>内容</Text>
            <View style={styles.vie2}>
            <Text></Text>
            <TextInput style={styles.name2}  multiline={true} onChangeText={this.showN}></TextInput></View>
            <TouchableOpacity 
                    style={{backgroundColor:'#E1E1E1',width:160*s,height:30,justifyContent: 'center',alignItems: 'center',marginLeft:400*s,borderRadius:50,marginTop:10}} 
                    onPress={this.onclick.bind(this)}>
                    <Text>保存</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                    style={{backgroundColor:'#E1E1E1',width:160*s,height:30,justifyContent: 'center',alignItems: 'center',marginLeft:400*s,borderRadius:50,marginTop:10}} 
                    onPress={this.onclick.bind(this)}>
                    <Text>发表</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                    style={{backgroundColor:'#E1E1E1',width:160*s,height:30,justifyContent: 'center',alignItems: 'center',marginLeft:400*s,borderRadius:50,marginTop:10}} 
                    onPress={()=>Actions.xuxie()}>
                    <Text>续写上一本</Text>
            </TouchableOpacity>
        </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    tex:{
        color: 'gray',
        fontSize: 18,
        height:50*s,
        lineHeight:50*s,
        left:5*s,
    },
    name: {
        height: 38,
        fontSize: 15,
        backgroundColor: '#fff',
        marginLeft: 10,  
        marginRight: 10
    },
    vie: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        height: 40,    
        justifyContent: 'flex-end' 
    },
    vie2:{
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        height: 160,    
    },
    name2:{
        height: 140,
        fontSize: 15,
        backgroundColor: '#fff',
        marginLeft: 10,  
        marginRight: 10,
    }
})