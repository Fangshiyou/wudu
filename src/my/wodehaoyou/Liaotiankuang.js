import React, { Component } from 'react'
import {
    View, Text, StyleSheet, Dimensions, Button, Image, TextInput,
    TouchableOpacity, ScrollView,ToastAndroid ,StatusBar, AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Liaotiankuang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: '',
            backMessage: '',
            json:'',
            textInput:''
        }
    }

    textchange = (text) => {
        this.setState({
            json: text
        })
    }
    fasong = () => {
        this.setState({
            backMessage: this.state.json,
            json:''
        })
        console.log(this.state.backMessage)
        this.refs.textInput1.blur();
        if (this.state.backMessage == "") {
            ToastAndroid.show("内容不能为空.",ToastAndroid.SHORT);
        }
        else {
            console.log("1");
            //fetch请求
            fetch("http://101.201.252.4:3389/answer", {
                method: 'POST',
                body:JSON.stringify({name:encodeURI('index')}), // data can be `string` or {object}!
                headers: 
                {"Content-Type": "application/json"}
            })
                .then(res => res.text())
                .then(res => {
                    res = JSON.parse(res)
                    let red = this.state.backMessage
                    this.setState({
                        backMessage: red +','+ res
                    })
                })
                .catch((error) => {
                    alert(error)
                })
        }

    }

render() {
    var arr = this.state.backMessage.split(",")
    return (
        <ScrollView>
            <View>

                <View style={styles.view1}>
                    <TouchableOpacity style={styles.button1} onPress={()=>Actions.pop()}>
                        <Image source={require('../myimages/1.png')} style={styles.image1} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>好友聊天</Text>
                    <TouchableOpacity style={styles.button2}>
                        <Image source={require('../myimages/3.png')} style={styles.image2} />
                    </TouchableOpacity>
                </View>
                <View style={styles.view2}>
                    {
                        arr.map(function(name){
                            return(
                                    <Text style={styles.weixin}>
                                        {name}  
                                    </Text>
                                
                            )
                        })
                        }
                </View>
                <View style={styles.view3}>
                    <TextInput placeholder="请输入内容" style={styles.input1} ref="textInput1" value = {this.state.json}
                        placeholderTextColor="blank" onChangeText={this.textchange} />
                    <TouchableOpacity style={styles.button3} onPress={this.fasong}>
                        <Text style={styles.text2}>发&nbsp;送</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
}
const styles = StyleSheet.create({
    view1: {
        width: width,
        height: 0.1 * width,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button1: {
        width: '10%',
        height: 0.1 * width,
    },
    image1: {
        width: '100%',
        height: '100%'
    },
    text1: {
        color: 'black',
        fontSize: 30,
        marginLeft: '30%'
    },
    button2: {
        width: '10%',
        height: 0.1 * width,
        marginLeft: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image2: {
        width: '60%',
        height: '60%',
    },
    view2: {
        width: width,
        height:1.85 * width,
        backgroundColor: 'white',
        marginTop: 5,
    },
    view3: {
        width: '100%',
        height: 0.12 * width,
        marginTop: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input1: {
        width: '75%',
        height: '80%',
        marginLeft: '1%',
        fontSize: 20,
    },
    button3: {
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: '2%'
    },
    text2: {
        fontSize: 20,
    },
    weixin:{
    fontSize:30,
    borderWidth: 2,
    }
})