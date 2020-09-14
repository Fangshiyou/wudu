import React, { Component } from 'react'
import { Modal, TouchableHighlight, View, Image, Text, FlatList, Button, StyleSheet, ScrollView, Dimensions, ToastAndroid, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
const { width } = Dimensions.get('window');
const s = width / 640;
const alert = Modal.alert;
export default class fenleitushu extends Component {
    constructor(props) {
        super(props);
        this.state = {

            totaldata: [],
            randomdata: [],
            page: 0,
            data: '',
            modalVisible: false,
            scdata: [],
            plarr: [],
            sctime: '',
            tuurl: '',
            sc: '收藏',
            author: '[意] 埃莱娜·费兰特',
            bname: '',
            cname: '',
            content: '',
            time: '',

            starCount: 3.5
        };
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    tianjia1 = () => {
        if (this.state.sc == "添加") {
          fetch('http://101.201.252.4:3389/tianjia1', {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
              bname: this.state.bname,
              tuurl: this.state.tuurl,
              author: this.state.author,
              sctime: new Date().toLocaleString(),
              user:localStorage.getItem('username'),
              url: this.state.data
            })
          })
            .then(res => res.text())
            .then(res => {
              if (!res[0]) {
                window.alert('提交失败');
              }
              else {
                this.setState({
                  scdata: res[0]
                })
              }
              console.log(res);
            }
            )
          this.setState({ sc: '已添加' });
        }
        else {
          fetch('http://101.201.252.4:3389/quxiaotj1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
              bname: this.state.bname
            })
          })
            .then(res => res.text())
            .then(res => {
              if (!res[0]) {
                console.log("删除失败");
              }
            }
            )
          this.setState({ sc: '添加' });
        }
      }
    backTuijian = () => {
        Actions.tuijianpage();
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    showP=(inputData)=>{
        this.setState({
            content:inputData
        });
    }
    onclick=()=>{
        // console.log(this.state.content);
        // var lastname = localStorage.getItem('username');
        fetch('http://101.201.252.4:3389/pinglun', {
          method: 'POST',
          mode: "cors",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // username: lastname,
            bookname: this.state.bname,
            content: this.state.content,
            // time: new Date().toLocaleString()
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
            // console.log(res);
          }
          );
        //   this.props.history.go(0);
    }
    componentDidMount() {
        fetch('http://101.201.252.4:3389/pinglunxs', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            bookname: this.state.bname,
            // plarr: this.state.plarr
        })
        })
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            this.setState({
                plarr: res
            })
            // this.setState({
            //     plxs: this.state.plarr[0].pinglun
            // })
        });
    }
    componentWillMount() {
        var data = this.props;
        this.setState({data:this.props.key});
        console.log("33333333333");
        // console.log(data);
        this.setState({ data: data })
        fetch("http://101.201.252.4:3389/text", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ name: data }), // data can be `string` or {object}!
            headers:
                { "Content-Type": "application/json" }
        }).then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                d.map(function (name) {
                    this.state.author = name.a;
                    this.state.tuurl = name.src;
                    this.state.bname = '《' + name.name + '》'
                })
                this.setState({
                    totaldata: d
                })
                console.log("1111111111");
                console.log(totaldata)
            });
        fetch("http://101.201.252.4:3389/show", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ name: data }), // data can be `string` or {object}!
            headers:
                { "Content-Type": "application/json" }
        }).then(res => res.text())
            .then(res => {
                var d = JSON.parse(res);
                this.setState({ randomdata: d });
                console.log("335345436436");
                console.log(d)
            });
    }
    renderTopicItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.topicItem}>
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>{item.title}</Text>
                        <Text style={styles.topicDesc}>{item.name}</Text>
                    </View>
                    <Text style={styles.topicPrice}>{item.press}</Text>
                </View>
            </TouchableOpacity>
        )
 }



    render() {
        var arr = [];
        this.state.totaldata.map(function (name) {

            arr[0] = name.src;
            arr[1] = name.div;
            arr[2] = name.span;
            arr[3] = name.p.slice(0, 157);
            arr[4] = name.a;
            arr[5] = name.name;
            arr[6] = name.div.slice(0, 74);
            arr[7] = name.div.slice(74, 114);
            arr[8] = name.div.slice(300, 340)
        })
        return (<ScrollView>
            <View>

                <View style={styles.slide}>
                    <Text onPress={() => Actions.pop()} style={{ lineHeight: 40, marginLeft: 20 * s }}>返回</Text>
                </View>
                <View style={styles.word1}>
                    <View style={styles.little}>
                        {/* <Image source={{ uri: 'https://images.weserv.nl/?url=' + name.src }} />  */}
                        <Image
                            resizeMode="contain"
                            source={require('../images/huozhe.jpg')}
                            style={{ width: 0.4 * width, height: 0.45 * width }}
                        />
                    </View>
                    <View style={styles.little1}>
                        <Text style={{ fontSize: 22, marginTop: 10 }}>活着</Text>

                        <Text style={{ fontSize: 16, marginTop: 10 }}>余华</Text>

                        <Text style={{ fontSize: 16, marginTop: 10 }}>作家出版社</Text>

                        <Text style={{ fontSize: 16, marginTop: 10 }}> 余华作品（2012版）</Text>
                        <View style={styles.word1}>
                            <TouchableOpacity style={{
                                width: 0.14 * width, height: 0.08 * width, backgroundColor: '#E1E2E3',
                                justifyContent: 'center', alignItems: 'center', borderRadius: 3
                            }}
                            onPress={() =>
                                // alert('添加', <view>请选择要添加的书单</view>, 
                                [
                                  { text: '书单1', onPress: this.tianjia1,value:this.state.sc},
                                  { text: '书单2', onPress: () => console.log('书单2') },
                                  { text: '书单3', onPress: () => console.log('书单3') },
                                ]
                              }>
                                <Text>添加</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.but} onPress={() => { }}>
                                <Text>想看</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(true);
                            }} style={styles.but}>
                                <Text>评分</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.little2}>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>简介</Text>
                        <View style={styles.name}>
                            <Text>
                            《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。
                            </Text>
                        </View>
                    </View>
                    <View style={styles.little2}>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>推荐</Text>
                        <FlatList
                            data={this.state.randomdata}
                            keyExtractor={(item, index) => index}
                            renderItem={this.renderTopicItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.name}
                        />
                    </View>
                    <View style={styles.little2}>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>想法</Text>
                        <View style={styles.name}><TextInput  multiline={true} onChangeText={this.showP}></TextInput></View>
                    </View>
                    <TouchableOpacity 
                    style={{backgroundColor:'#E1E1E1',width:160*s,height:30,justifyContent: 'center',alignItems: 'center',marginLeft:400*s,borderRadius:50,marginTop:10}} 
                    onPress={this.onclick.bind(this)}>
                        <Text>提交</Text>
                    </TouchableOpacity>
                    <View style={styles.little2}>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>评论</Text>
                        <View style={styles.name}>
                        {
                            this.state.plarr.map((item, idx) =>
                            <View>
                            <Text style={styles.tex}>{item.pinglun}</Text>
                            </View>
                            )
                        }
                        </View>
                    </View>
                </View>
                <View>
                    <Text>

                    </Text>
                </View>
                {/* 评分弹窗 */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                >
                    <View style={{ height: Dimensions.get('window').height, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ height: 250, width: 300, margin: 20, backgroundColor: 'white' }}>
                            {/* --------------------------------------------------------- */}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#eee' }}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    fullStarColor={'red'}
                                />
                            </View>
                            {/* ------------------------------------------------------------ */}
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                                style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text>返回</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    slide: {
        flexDirection: 'row',
        backgroundColor: "#E1E2E3",
        height: 40,
    },
    little: {
        width: 0.38 * width,
        height: 0.45 * width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    little1: {
        width: 0.66 * width,
        marginLeft: 0.04 * width,
        marginTop: 5,
    },
    little2: {
        width: 0.88 * width,
        height: 0.50 * width,
        marginTop: 15,
        marginLeft: 0.04 * width,
        flex: 1
    },
    word1: {
        flexDirection: 'row',
        marginTop: 20
    },
    but: {
        width: 0.14 * width,
        marginLeft: 0.05 * width,
        backgroundColor: '#E1E2E3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    name: {
        width: 0.84 * width,
        height: 0.4 * width,
        marginTop: 7,
        marginLeft: 5,
        backgroundColor: "#E1E2E3"
    },
    tex:{
        color: 'gray',
        fontSize: 18,
        height:50*s,
        lineHeight:50*s,
        left:5*s,
    },
    topicItem:{
        width:300*s,
        height:200*s
    },
    topicDesc:{
        marginTop:8
    },
    topicPrice:{
        marginTop:8
    }
})
