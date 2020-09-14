import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions, Button, Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
const { width } = Dimensions.get('window');
const options = {
    title: '请选择图片来源',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册图片',
    customButtons: [
        {name: '自定义', title: '自定义图片'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
export default class My extends Component {
    constructor(){
        super();
        this.state = {
            imgUrl:'',
            userName:'',
            avatarSource:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('us',(error,result)=>{
            if (error) {
                console.log(error);
            }
            else{
                this.setState({
                    userName:result,
                })
            }
        })
    }
    shezhi=()=>{
        Actions.shezhi();
    }
    xinxi=()=>{
        Actions.xinxi();
    }
    haoyouliebiao=()=>{
        Actions.haoyouliebiao();
    }
    history=()=>{
        Actions.history();
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } 
            else if (response.error) {
              console.log('Error:', response.error);
            } 
            else if (response.customButton) {
              console.log('custom:', response.customButton);
            } 
            else {
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {
        return (
            <ScrollView>
            <View style={{ flex:1,backgroundColor:'#dddcd8' }}>
                <View style={styles.myView1}>
                    <TouchableOpacity onPress={this.takephoto} style={styles.button1}>
                        <Image source={this.state.avatarSource} style={styles.image1} />
                    </TouchableOpacity>
                </View>
                <View style={styles.myView4}>
                    <Text style={styles.text2}>{this.state.userName}</Text>
                </View>
                <TouchableOpacity style={styles.myView2} onPress={this.xinxi}>
                    <Text style={styles.text1}>个 人 信 息</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.myView3} onPress={this.haoyouliebiao}>
                    <Text style={styles.text1}>我 的 好 友</Text>
                </TouchableOpacity>
                <View style={styles.myView3}>
                    <Text style={styles.text1}>我 的 书 券</Text>
                </View>
                <TouchableOpacity style={styles.myView3} onPress={this.history}>
                    <Text style={styles.text1}>浏 览 历 史</Text>
                </TouchableOpacity>
                <View style={styles.myView3}>
                    <Text style={styles.text1}>我 的 收 藏</Text>
                </View>
                <View style={styles.myView3}>
                    <Text style={styles.text1}>我 的 消 息</Text>
                </View>
                
                <TouchableOpacity style={styles.myView3} onPress={this.shezhi}>
                    <Text style={styles.text1}>设            置</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    myView1: {
        height:200,
        width:width,
        backgroundColor:'lightblue',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    myView2:{
        width:width,
        height:60,
        backgroundColor:'white',
        borderStyle:"dashed" ,
        borderBottomWidth:0.5,
        borderColor:'black',
        alignItems:'center',
        flexDirection:'row',
    },
    myView3:{
        width:width,
        height:60,
        backgroundColor:'white',
        borderStyle:"dashed" ,
        borderBottomWidth:0.5,
        borderColor:'grey',
        alignItems:'center',
        flexDirection:'row',
    },
    text1:{
        fontSize:25,
        color:'#959393',
        fontFamily:'微软雅黑',
        marginLeft:'10%'
    },
    myImage1:{
        width:40,
        height:40,
        marginLeft:'10%',
    },
    button1:{
        width:'25%',
        height:150,
        backgroundColor:'red',
        borderRadius:150,
    },
    image1:{
        width:'100%',
        height:'100%',
        borderRadius:150,
    },
    myView4:{
        width:'100%',
        height:50,
        backgroundColor:'lightblue',
        alignItems:'center',
    },
    text2:{
        color:'black',
        fontSize:25,
    },
    myView5:{
        height:200,
        width:'100%',
        backgroundColor:'red'
    }
})