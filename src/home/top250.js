import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Grid, Icon, Button, Carousel } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
export default class Top extends Component {
    constructor(){
        super()
    }
    back=()=>{
        Actions.pop();
    }
    render() {
        return (
            <View>
                <View style={styles.view1}>
                    <TouchableOpacity style={styles.button1} onPress={this.back}>
                        <Image source={require('../images/7.png')} style={styles.image1}/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>Top</Text>
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
        marginLeft:'35%',
        fontSize:30,
    },
})