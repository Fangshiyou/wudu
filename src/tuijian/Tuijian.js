import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    AsyncStorage,
    Button,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    BackHandler,
    YellowBox 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [ 
    {
        title: '失踪的孩子',
        key: 1,
        img: require('./tuijianImages/book1.jpg'),
        fraction : '评分:9.1',
        author: '作者:[意]埃莱娜·费兰特',
        puttime:'出版信息:2018/人民文学出版社'
    }, 
    {
        title: '追寻逝去的时光',
        key: 2,
        img: require('./tuijianImages/book2.jpg'),
        fraction : '评分:9.2',
        author: '作者:[法]马塞尔·普鲁斯特',
        puttime:'出版信息:2018/湖南美术出版社'
    },
    {
        title: '房思琪的初恋乐园',
        key: 3,
        img: require('./tuijianImages/book3.jpg'),
        fraction : '评分:9.2',
        author: '作者:林奕含',
        puttime:'出版信息:2018/北京联合出版公司'

    },
]
const books =[
    {   
        key:4,
        img: require('./tuijianImages/book4.jpg'),
    },
    {   
        key:5,
        img: require('./tuijianImages/book5.jpg'),
    },
    {   
        key:6,
        img: require('./tuijianImages/30.jpg'),
    }
]
export default class Tuijian extends Component {
    constructor(){
        super();
    }
    yingshiyuanzhu=()=>{
        Actions.yingshiyuanzhu();
    }
    mingzhujingdian=()=>{
        Actions.mingzhujingdian();
    }
    wenxue=()=>{
        Actions.wenxue();
    }
    shige=()=>{
        Actions.shige();
    }
    xiaoshuo=()=>{
        Actions.xiaoshuo();
    }
    sanwen=()=>{
        Actions.sanwen();
    }
    xiqu=()=>{
        Actions.xiqu();
    }
    zhuanji=()=>{
        Actions.zhuanji();
    }
    zhexue=()=>{
        Actions.zhexue();
    }
    lishi=()=>{
        Actions.lishi();
    }
    yishu=()=>{
        Actions.yishu();
    }
    xinli=()=>{
        Actions.xinli();
    }
    jiaoyu=()=>{
        Actions.jiaoyu();
    }
    shenghuo=()=>{
        Actions.shenghuo();
    }
    huihua=()=>{
        Actions.huihua();
    }
    yuyan=()=>{
        Actions.yuyan();
    }
    lvxing=()=>{
        Actions.lvxing();
    }
    jiaju=()=>{
        Actions.jiaju();
    }
    meishi=()=>{
        Actions.meishi();
    }
    jianzhu=()=>{
        Actions.jianzhu();
    }
    falv=()=>{
        Actions.falv();
    }
    sheji=()=>{
        Actions.sheji();
    }
    keji=()=>{
        Actions.keji();
    }
    hulianwang=()=>{
        Actions.hulianwang();
    }
    jisuanji=()=>{
        Actions.jisuanji();
    }
    jingji=()=>{
        Actions.jingji();
    }
    guanli=()=>{
        Actions.guanli();
    }
    guanggao=()=>{
        Actions.guanggao();
    }
    tuijian=()=>{
        Actions.tuijian2();
    }
    render() {
        return (
            
            <ScrollView>
            <View>
                 <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入名称"
                            style={{
                                width: 490*s,height: 50*s,
                                padding: 0,
                                paddingLeft: 10
                            }}
                        />
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.tabs} onPress={this.xiaoshuo}>
                        <Text>小说</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={this.xiqu}>
                        <Text>戏曲</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={this.wenxue}>
                        <Text>文学</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={this.shige}>
                        <Text>诗歌</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={this.zhuanji}>
                        <Text>传记</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.zhexue}>
                        <Text>哲学</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={this.lishi}>
                        <Text>历史</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={this.yishu}>
                        <Text>艺术</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.xinli}>
                        <Text>心理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.jiaoyu}>
                        <Text>教育</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.shenghuo}>
                        <Text>生活</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.lvxing}>
                        <Text>旅行</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.jiaju}>
                        <Text>家居</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.meishi}>
                        <Text>美食</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} onPress={this.yuyan}>
                        <Text>语言</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={1}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <TouchableOpacity onPress={()=>Actions.tuijian2()}>
                                <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{height:200*s,width:300*s,marginLeft:-80*s,marginTop:10}}
                                />
                            </TouchableOpacity>
                            <View>
                            <Text style={{marginTop:5}}>{item.title}</Text>
                            <Text style={{marginTop:10}}>{item.fraction}</Text>
                            <Text style={{marginTop:10}}>{item.author}</Text>
                            <Text style={{marginTop:10}}>{item.puttime}</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                    <Text style={{fontSize:18,color:'black',marginLeft:25*s,marginTop:10*s,marginBottom:10*s}}>
                        其他
                    </Text>
                    </View>
                
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={books}
                    numColumns={3}
                    renderItem={({item})=>(
                        <View style={styles.book}>
                            <TouchableOpacity onPress={()=>Actions.tuijian2()}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{height:200*s,marginTop:10}}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                </View>
                <View>
                    <Text> </Text>
                </View>
                </ScrollView>
               
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search:{
        width: 550*s,
        height: 50*s,
        backgroundColor: '#E1E1E1',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav:{
        height: 150*s,
        width:  620*s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingLeft:60*s,
        marginTop:10,
    },
    good:{
        width: 600*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 15*s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom:10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    tabs:{
        width:100*s,
        height:50*s,
    },
    book:{
        width: 200*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 15*s,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom:10,
        alignItems: 'center',
    }
})