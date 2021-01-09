import React, { Component } from "react";
import {View, Text, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
class Index extends Component {
    state={
        phoneNumber:"12345678901"
    }
    //登录框手机号输入事件
    phoneNumberChangeText=(phoneNumber)=>{
        this.setState({phoneNumber});
        console.log(phoneNumber);
    }
    //手机号码点击完成时触发
    phoneNumberSubmit=()=>{
        console.log("手机号输入完成");
    }
    render() {
        const {phoneNumber}=this.state;
        return (
            <View>
                {/* 0.0 状态栏 开始 */}
                <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
                {/* 0.0 状态栏 开始 */}

                {/* 1.0 背景图 开始 */}
                <Image  style={{width:"100%",height:200}} source={require("../../../res/loginFirstBG.jpeg")}></Image>
                {/* 1.0 背景图 结束 */}

                {/* 2.0 内容 开始 */}
                <View style={{padding:30}}>
                    {/* 2.1 登录 开始 */}
                    <View>
                        {/* 标题 */}
                        <View><Text style={{fontSize:25, color:"#888",fontWeight:"bold"}}>手机号登录注册</Text></View>
                        {/* 输入框 */}
                        <View style={{marginTop:30}}>
                            <Input 
                                placeholder='请输入手机号'
                                leftIcon={{ type: 'font-awesome', name: 'phone', color:"#ccc", size:20 }} 
                                maxLength={11}
                                keyboardType="phone-pad"
                                inputStyle={{color:"#333"}} //输入字符的字体颜色
                                onChangeText={this.phoneNumberChangeText}
                                value={phoneNumber}
                                errorMessage="手机号码格式错误"
                                onSubmitEditing={this.phoneNumberSubmit}
                            />
                        </View>
                    </View>
                    {/* 2.1 登录 结束 */}           
                </View>
                {/* 2.0 内容 结束 */}
            </View>
        )
    }
}
export default Index;