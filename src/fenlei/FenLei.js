import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Grid, Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 640;
export default class fenLei extends Component {
    rendomColor = () => {
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)';
        return this.color;
    }
    yingshiyuanzhu = () => {
        Actions.yingshiyuanzhu();
    }
    mingzhujingdian = () => {
        Actions.mingzhujingdian();
    }
    wenxue = () => {
        Actions.wenxue();
    }
    shige = () => {
        Actions.shige();
    }
    xiaoshuo = () => {
        Actions.xiaoshuo();
    }
    sanwen = () => {
        Actions.sanwen();
    }
    xiqu = () => {
        Actions.xiqu();
    }
    zhuanji = () => {
        Actions.zhuanji();
    }
    zhexue = () => {
        Actions.zhexue();
    }
    lishi = () => {
        Actions.lishi();
    }
    yishu = () => {
        Actions.yishu();
    }
    xinli = () => {
        Actions.xinli();
    }
    jiaoyu = () => {
        Actions.jiaoyu();
    }
    shenghuo = () => {
        Actions.shenghuo();
    }
    huihua = () => {
        Actions.huihua();
    }
    yuyan = () => {
        Actions.yuyan();
    }
    lvxing = () => {
        Actions.lvxing();
    }
    jiaju = () => {
        Actions.jiaju();
    }
    meishi = () => {
        Actions.meishi();
    }
    jianzhu = () => {
        Actions.jianzhu();
    }
    falv = () => {
        Actions.falv();
    }
    sheji = () => {
        Actions.sheji();
    }
    keji = () => {
        Actions.keji();
    }
    hulianwang = () => {
        Actions.hulianwang();
    }
    jisuanji = () => {
        Actions.jisuanji();
    }
    jingji = () => {
        Actions.jingji();
    }
    guanli = () => {
        Actions.guanli();
    }
    guanggao = () => {
        Actions.guanggao();
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.view1}>
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
                            <TextInput placeholder='请输入商品名称' />
                        </View>
                        <Button style={{
                            height: 60 * s,
                            width: 100 * s,
                            marginTop: 10,
                            marginLeft: 8
                        }}
                        onPress={()=>Actions.writer()}
                        >搜索</Button>
                    </View>
                    {/* -----------------标签-------------------- */}
                    <View style={{ marginLeft: 20 * s, marginTop: 40 * s }}>
                        <Text style={{ fontSize: 21 }}>精神避难所</Text>
                        <View style={{ flexDirection: 'row',marginTop:30*s}}>
                            <TouchableOpacity style={styles.btn} onPress={this.yingshiyuanzhu}>
                                <Text style={{ fontSize: 18 }}>影视原著</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.wenxue}>
                                <Text style={{ fontSize: 18 }}>文学</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.shige}>
                                <Text style={{ fontSize: 18 }}>诗歌</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.xiaoshuo}>
                                <Text style={{ fontSize: 18 }}>小说</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btn} onPress={this.sanwen}>
                                <Text style={{ fontSize: 18 }}>散文</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.xiqu}>
                                <Text style={{ fontSize: 18 }}>戏曲</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.zhuanji}>
                                <Text style={{ fontSize: 18 }}>传记</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.zhexue}>
                                <Text style={{ fontSize: 18 }}>哲学</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btn} onPress={this.lishi}>
                                <Text style={{ fontSize: 18 }}>历史</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.yishu}>
                                <Text style={{ fontSize: 18 }}>艺术</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20 * s, marginTop: 30 * s }}>
                        <Text style={{ fontSize: 21 }}>生活启示录</Text>
                        <View style={{ flexDirection: 'row',marginTop:30*s }}>
                        <TouchableOpacity style={styles.btn} onPress={this.mingzhujingdian}>
                                <Text style={{ fontSize: 18 }}>名著经典</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.xinli}>
                                <Text style={{ fontSize: 18 }}>心理</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.jiaoyu}>
                                <Text style={{ fontSize: 18 }}>教育</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.shenghuo}>
                                <Text style={{ fontSize: 18 }}>生活</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btn} onPress={this.huihua}>
                                <Text style={{ fontSize: 18 }}>绘画</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.yuyan}>
                                <Text style={{ fontSize: 18 }}>语言</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.lvxing}>
                                <Text style={{ fontSize: 18 }}>旅行</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.jiaju}>
                                <Text style={{ fontSize: 18 }}>家居</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btn} onPress={this.meishi}>
                                <Text style={{ fontSize: 18 }}>美食</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20 * s, marginTop: 30 * s }}>
                        <Text style={{ fontSize: 21 }}>职业成长营</Text>
                        <View style={{ flexDirection: 'row',marginTop:30*s }}>
                            <TouchableOpacity style={styles.btn} onPress={this.jianzhu}>
                                <Text style={{ fontSize: 18 }}>建筑</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.falv}>
                                <Text style={{ fontSize: 18 }}>法律</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.sheji}>
                                <Text style={{ fontSize: 18 }}>设计</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.keji}>
                                <Text style={{ fontSize: 18 }}>科技</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btn} onPress={this.hulianwang}>
                                <Text style={{ fontSize: 18 }}>互联网</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.jisuanjin}>
                                <Text style={{ fontSize: 18 }}>计算机</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.jingji}>
                                <Text style={{ fontSize: 18 }}>经济</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={this.guanli}>
                                <Text style={{ fontSize: 18 }}>管理</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btn} onPress={this.guanggao}>
                                <Text style={{ fontSize: 18 }}>广告</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.view2}>

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    view1: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    view2: {
        width: '100%',
        height: 75,
        backgroundColor: 'white',
    },
    btn: {
        width: 130 * s,
        height: 100 * s,
        marginTop: 20 * s,
        marginLeft: 35 * s,
        borderRadius: 40,
        color: 'red',
        fontSize: 30
    }
})