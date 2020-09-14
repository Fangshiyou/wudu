import React, { Component } from 'react'
import { StyleSheet, View, Text, Image,TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Grid, Icon, Button, Carousel } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Shouye extends Component {
    constructor(){
        super();
        this.state={
            name:''
        }
    }
    top=()=>{
        Actions.top250();
    }
    jingdong=()=>{
        Actions.jingdong();
    }
    dangdang=()=>{
        Actions.dangdang();
    }
    name=(text)=>{
        this.setState({name:text})
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* ------------------搜索框------------------ */}
                        <View style={{
                            height: 60 * s,
                            width: 500 * s,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10 * s,
                            marginTop: 10,
                            marginLeft: 10
                        }}>
                            <TextInput placeholder='请输入商品名称' onChangeText={this.name}/>
                        </View>
                         <Button style={{
                            height: 60 * s,
                            width: 100 * s,
                            marginTop: 10,
                            marginLeft: 8
                        }}><Text onPress={()=>{Actions.search({'key':this.state.name})}}>搜索</Text></Button>
                    </View>
                    {/* ----------------轮播图------------------ */}
                    <View style={{ paddingHorizontal: 15, marginTop: 15 * s }}>
                        <Carousel
                            style={styles.wrapper}
                            selectedIndex={2}
                            autoplay
                            infinite
                            afterChange={this.onHorizontalSelectedIndexChange}
                        >
                            <View
                                style={[styles.containerHorizontal]}
                            >
                                <Image style={{ resizeMode: 'stretch', height: 300 * s, width: width }} source={require('../images/lunbo1.jpg')} />
                            </View>
                            <View
                                style={[styles.containerHorizontal]}
                            >
                                <Image style={{ resizeMode: 'stretch', height: 300 * s, width: width }} source={require('../images/lunbo2.jpg')} />
                            </View>
                            <View
                                style={[
                                    styles.containerHorizontal
                                ]}
                            >
                                <Image style={{ resizeMode: 'stretch', height: 300 * s, width: width }} source={require('../images/lunbo3.jpg')} />
                            </View>
                        </Carousel>
                    </View>
                    {/* ----------------------榜单------------------- */}
                    <View style={{ height: 200 * s, backgroundColor: 'white', marginTop: 15 * s, borderBottomWidth: 1, borderBottomColor: '#e9e9ef' }}>
                        <Text style={{ fontSize: 21, paddingLeft: 12 }}>豆瓣榜单</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={this.top}>
                            <Image style={{ height: 120 * s, width: 120 * s, marginLeft: 20 * s, marginTop: 15 * s }} source={require('../images/bangdan.jpg')} />
                            <View style={{ marginLeft: 20 * s, marginTop: 15 * s }}>
                                <Text style={{ fontSize: 17 }}>Top250</Text>
                                <Text>摘自豆瓣图书排行榜top250</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 20 * s, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e9e9ef' }}></View>

                    <View style={{ height: 350 * s, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e9e9ef' }}>
                        <Text style={{ fontSize: 21, paddingLeft: 12 }}>图书热卖榜</Text>
                        <TouchableOpacity style={{ height: 150 * s, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e9e9ef' }} onPress={this.jingdong}>
                            <Image style={{ height: 120 * s, width: 120 * s, marginLeft: 20 * s, marginTop: 15 * s }} source={require('../images/bangdan.jpg')} />
                            <View style={{ marginLeft: 20 * s, marginTop: 15 * s }}>
                                <Text style={{ fontSize: 17 }}>京东图书</Text>
                                <Text>挑选正版图书</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={this.dangdang}>
                            <Image style={{ height: 120 * s, width: 120 * s, marginLeft: 20 * s, marginTop: 15 * s }} source={require('../images/bangdan.jpg')} />
                            <View style={{ marginLeft: 20 * s, marginTop: 15 * s }}>
                                <Text style={{ fontSize: 17 }}>当当图书</Text>
                                <Text>享受优质服务</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 20 * s, backgroundColor: 'white' }}></View>
                    <View style={{alignItems: 'center'}}>
                        <Button
                        style={{
                            textAlign: 'center',
                            marginTop:20*s,
                            borderWidth: 1,
                            height: 60 * s,
                            width: 160 * s
                        }}>
                        <Icon
                            style={{
                                height: 20
                            }}
                            color='gray'
                            name=""
                        />
                            读书tip
                    </Button>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300 * s,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
})