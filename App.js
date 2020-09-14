import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, AsyncStorage, View, Text, BackHandler, ToastAndroid, StatusBar, Dimensions } from 'react-native';
import { Router, Scene, Tabs, Actions,Modal,Lightbox } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

import Shouye from './src/home/Shouye';
import Dd from './src/home/ddbook'
import Jd from './src/home/jdbook'
import Top from './src/home/top250'
import Search from './src/home/search'
import Xiezuo from "./src/Xiezuo";
import Xuxie from "./src/Xuxie"


import Login from './src/commom/Login'
import Zhuce from './src/commom/Zhuce'
import SwiperPage from './src/commom/SwiperPage'

import Tuijian from './src/tuijian/Tuijian'
import Tuijian2 from './src/tuijian/Tuijian2'

import Fenlei from './src/fenlei/FenLei'
import Writer from './src/fenlei/writer'
import Yingshiyuanzhu from './src/fenlei/Fenlei2/Yingshiyuanzhu'
import Mingzhujingdian from './src/fenlei/Fenlei2/Mingzhujingdian'
import Wenxue from './src/fenlei/Fenlei2/Wenxue'
import Shige from './src/fenlei/Fenlei2/Shige'
import Xiaoshuo from './src/fenlei/Fenlei2/Xiaoshuo'
import Sanwen from './src/fenlei/Fenlei2/Sanwen'
import Xiqu from './src/fenlei/Fenlei2/Xiqu'
import Zhuanji from './src/fenlei/Fenlei2/Zhuanji'
import Zhexue from './src/fenlei/Fenlei2/Zhexue'
import Lishi from './src/fenlei/Fenlei2/Lishi'
import Yishu from './src/fenlei/Fenlei2/Yishu'
import Xinli from './src/fenlei/Fenlei2/Xinli'
import Jiaoyu from './src/fenlei/Fenlei2/Jiaoyu'
import Shenghuo from './src/fenlei/Fenlei2/Shenghuo'
import Huihua from './src/fenlei/Fenlei2/Huihua'
import Yuyan from './src/fenlei/Fenlei2/Yuyan'
import Lvxing from './src/fenlei/Fenlei2/Lvxing'
import Jiaju from './src/fenlei/Fenlei2/Jiaju'
import Meishi from './src/fenlei/Fenlei2/Meishi'
import Jianzhu from './src/fenlei/Fenlei2/Jianzhu'
import Falv from './src/fenlei/Fenlei2/Falv'
import Sheji from './src/fenlei/Fenlei2/Sheji'
import Keji from './src/fenlei/Fenlei2/Keji'
import Hulianwang from './src/fenlei/Fenlei2/Hulianwang'
import Jisuanji from './src/fenlei/Fenlei2/Jisuanji'
import Jingji from './src/fenlei/Fenlei2/Jingji'
import Guanli from './src/fenlei/Fenlei2/Guanli'
import Guanggao from './src/fenlei/Fenlei2/Guanggao'

import My from './src/my/My'
import Shezhi from './src/my/Shezhi'
import Zhanghaoyuanquan from './src/my/shezhiyemian/zhanghaoyuanquan';
import Xinxiaoxitixing from './src/my/shezhiyemian/xinxiaoxitiixng';
import Guanyuwudu from './src/my/shezhiyemian/Guanyuwudu';
import Guanyuwomen from './src/my/shezhiyemian/Guanyuwomen';
import Xinxi from './src/my/Xinxi'
import Haoyouliebiao from './src/my/wodehaoyou/Haoyouliebiao';
import Liaotiankuang from './src/my/wodehaoyou/Liaotiankuang'
import History from './src/my/history'

console.disableYellowBox = true;
var now = new Date().getTime();

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);

  let init = () => {
    AsyncStorage.getItem("isInstall")
      .then((res) => {
        if (res) {
          setInstall(false);
        }
      })

    AsyncStorage.getItem("user")
      .then(res => {
        let user = JSON.parse(res);
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          setLogin(true);
          SplashScreen.hide();
        }
        console.log(res);
      })
  }
  useEffect(() => {
    init();
  }, [])

  let afterInstall = () => {
    setInstall(false)
  }

  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }

  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene != 'home' && Actions.currentScene != "login") {
          Actions.pop();
          return true;
        } else {
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          } else {
            ToastAndroid.show('确定要退出吗', 100);
            now = new Date().getTime();
            return true;
          }
        }

      }}
    >
      <Modal key="modal" hideNavBar>
      <Lightbox key="lightbox">
        <Scene key="homePageAll">
          {/* <Scene key='my' component={My} hideNavBar /> */}
          <Tabs key='tabber' tabBarStyle={{ backgroundColor: "#fff" }} hideNavBar='true' activeTintColor='red'>
            { /* 首页 */}
            <Scene key='homepage' title='首页'
              icon={({ focused }) => <Icon
                color={focused ? 'red' : 'blue'} name='home' size={30} />}>
              <Scene key='shouye' component={Shouye} hideNavBar />
              <Scene key='search' component={Search} />
            </Scene>
            {/* 推荐页 */}
            <Scene key='tuijianpage' title='推荐'
              icon={({ focused }) => <Icon
                color={focused ? 'red' : 'blue'} name='file' size={30} />}>
              <Scene key='tuijian' component={Tuijian} hideNavBar />
            </Scene>
            <Scene key='xiezuo' hideDrawerButton
						icon={({ focused }) =>
							<Icon color={focused ? 'red' : 'blue'}
								name='file' />
						}
						title="写作"
						component={Xiezuo}/>
            {/* 分类页 */}
            <Scene key='fenleipage' title='分类'
              icon={({ focused }) => <Icon
                color={focused ? 'red' : 'blue'} name='ellipsis' size={30} />}>
              <Scene key='fenlei' component={Fenlei} hideNavBar />
              <Scene key='writer' component={Writer} hideNavBar />
            </Scene>
            { /* 我的页面 */}
            <Scene key='mypage' title='我的'
              icon={({ focused }) => <Icon
                color={focused ? 'red' : 'blue'} name='user' size={30} />}>
              <Scene key='my' component={My} hideNavBar />
            </Scene>
          </Tabs>
          {/* 首页 */}
          <Scene key="top250" component={Top} hideNavBar />
          <Scene key="jingdong" component={Jd} hideNavBar />
          <Scene key="dangdang" component={Dd} hideNavBar />

          <Scene hideTabBar navBarButtonColor='#a3d900' title='写作' key='xiezuo' component={Xiezuo} />
				  <Scene hideTabBar navBarButtonColor='#a3d900' title='写作' key='xuxie' component={Xuxie} />


          {/* 我的 */}
          <Scene key='shezhi' component={Shezhi} hideNavBar />
          <Scene key='zhanghaoyuanquan' component={Zhanghaoyuanquan} hideNavBar />
          <Scene key='xinxiaoxitixing' component={Xinxiaoxitixing} hideNavBar />
          <Scene key='guanyuwudu' component={Guanyuwudu} hideNavBar />
          <Scene key='guanyuwomen' component={Guanyuwomen} hideNavBar />
          <Scene key="xinxi" component={Xinxi} hideNavBar />
          <Scene key="haoyouliebiao" component={Haoyouliebiao} hideNavBar />
          <Scene key="liaotiankuang" component={Liaotiankuang} hideNavBar />
          <Scene key="history" component={History} hideNavBar />

          {/* 推荐 */}
          <Scene key="tuijian2" component={Tuijian2} hideNavBar />

          {/* 分类 */}
          <Scene key='yingshiyuanzhu' component={Yingshiyuanzhu} hideNavBar />
          <Scene key='mingzhujingdian' component={Mingzhujingdian} hideNavBar />
          <Scene key='wenxue' component={Wenxue} hideNavBar />
          <Scene key='shige' component={Shige} hideNavBar />
          <Scene key='xiaoshuo' component={Xiaoshuo} hideNavBar />
          <Scene key='sanwen' component={Sanwen} hideNavBar />
          <Scene key='xiqu' component={Xiqu} hideNavBar />
          <Scene key='zhuanji' component={Zhuanji} hideNavBar />
          <Scene key='zhexue' component={Zhexue} hideNavBar />
          <Scene key='lishi' component={Lishi} hideNavBar />
          <Scene key='yishu' component={Yishu} hideNavBar />
          <Scene key='xinli' component={Xinli} hideNavBar />
          <Scene key='jiaoyu' component={Jiaoyu} hideNavBar />
          <Scene key='shenghuo' component={Shenghuo} hideNavBar />
          <Scene key='huihua' component={Huihua} hideNavBar />
          <Scene key='yuyan' component={Yuyan} hideNavBar />
          <Scene key='lvxing' component={Lvxing} hideNavBar />
          <Scene key='jiaju' component={Jiaju} hideNavBar />
          <Scene key='meishi' component={Meishi} hideNavBar />
          <Scene key='jianzhu' component={Jianzhu} hideNavBar />
          <Scene key='falv' component={Falv} hideNavBar />
          <Scene key='sheji' component={Sheji} hideNavBar />
          <Scene key='keji' component={Keji} hideNavBar />
          <Scene key='hulianwang' component={Hulianwang} hideNavBar />
          <Scene key='jisuanji' component={Jisuanji} hideNavBar />
          <Scene key='jingji' component={Jingji} hideNavBar />
          <Scene key='guanli' component={Guanli} hideNavBar />
          <Scene key='guanggao' component={Guanggao} hideNavBar />


          
        </Scene>
        </Lightbox>
        <Scene initial={!isLogin} key="login" component={Login} />
          <Scene key="zhuce" component={Zhuce} hideNavBar />
        </Modal>
    </Router>
  );
};

const styles = StyleSheet.create({

      });
export default App;