1 rn中默认容器布局方式 flex

2 方向 flex-direction:column

3 rn样式没有继承 子容器不会继承父容器的样式

### 控制台输出的调试
~~~ Javascript
console.log(xxx);
~~~
command+M，点击debug，会弹出chrome网页，右键点击检查，切换面板至console，即可查看控制台输出的内容。

### Flex布局

~~~ javaScript
const Index = () => <View style={{backgroundColor:"#D9C0BC",flex:1}}>
  <Text style={{backgroundColor:"#58688F", 
                color:"black",
                fontSize:50,
                transform:[{translateY:200},{scale:0.5}]}}>JSX1 </Text>
</View>
~~~

### 绑定点击事件（Text标签的点击）
- 将text包裹在 点一下会闪的 TouchableOpacity 标签中
~~~ JavaScript
const handlePress=()=>{  // 写一个箭头函数处理点击事件
  alert("你点击了屏幕");
}

const Index = () => <TouchableOpacity onPress={handlePress} activeOpacity={0}>
  <Text style={{fontSize:50}}> xxxxxxxx </Text>
</TouchableOpacity>
export default Index;
~~~
- 给text添加onPress属性
~~~ JavaScript
class Index extends Component {
  state ={
    num:100
  }
  handlePress=()=>{  // 写一个箭头函数处理点击事件
    console.log(this.state);
    this.setState({ num: ++this.state.num});
  }
  render() {
    return (
      <View>
        <Text onPress={this.handlePress}>{this.state.num}</Text>
      </View>
    );
  }
}
export default Index;
~~~
- 通过bind绑定
~~~ JavaScript
class Index extends Component {
  state ={
    num:100
  }
  handlePress(){  //一个正常的函数
    this.setState({ num: ++this.state.num});
  }
  render() {
    return (
      <View>   
        <Text onPress={this.handlePress.bind(this)}>{this.state.num}</Text>
      </View>
    );
  }
}
export default Index;
~~~
- 匿名函数
~~~ JavaScript
class Index extends Component {
  state ={
    num:100
  }
  handlePress(){  //一个正常的函数
    this.setState({ num: ++this.state.num});
  }
  render() {
    return (
      <View>   
        <Text onPress={()=>this.handlePress()}>{this.state.num}</Text>
      </View>
    );
  }
}
export default Index;
~~~
### 插入GIF
在android/app/build.gradle的dependencies中加入：

implementation 'com.facebook.fresco:animated-gif:2.0.0' 

插入本地图片或网络图片的写法：
注意网络图片要表明其宽和高
~~~ JavaScript
  <Image source={require("./images/testGIF.gif")}></Image>
  <Image style={{width:400, height:500}} source={{uri:"图片的链接"}}/>
</View>

~~~ 
### 背景图片
~~~ JavaScript 
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Index = () => <ImageBackground source={require("./images/testJPEG.jpeg")}
style={{width:screenWidth, height:screenWidth*0.75}}
>
  <Text>Inside</Text>
</ImageBackground>

export default Index;
~~~
### 输入框
~~~ JavaScript 
const handleChangeText=(text)=>{
  alert(text)
}
const Index = () => <TextInput onChangeText={handleChangeText} />

export default Index;
~~~
### 数组
在花括号里面写循环，map方法
~~~ JavaScript 
const obj = {name: "Elsa"};
const arr = ["cat", "mouse", "tiger"];
const colorArr = ["#988875", "#93A3AE", "#919B89"]
const Index = () => <View>
  <Text>{obj.name}</Text>
  <Text>{arr}</Text>
  {arr.map((v,i) => <View key={i}><Text style={{color:colorArr[i], fontSize:40}}>--{v + "======"}</Text></View>)}
</View>

export default Index;
~~~
### 类属性
~~~ JavaScript
//类组件
class Index extends React.Component{
  state = {
    num:100
  }
  render() {
    setTimeout(() => {
      //修改state
      this.setState({
        num:1000
      })
    }, 1000);
    return <View>
      <Text>{this.state.num}</Text>
    </View>
  }
  //组件挂载完毕
  componentDidMount() {
	alert("发送异步请求")
  }
}
export default Index;
~~~
### 父子组件的数据传递
~~~ JavaScript
const Index=() => <View>
  <Text style={{fontSize:30}}>下面显示子组件：</Text>
  <Sub txtColor="#B3757D">
    <View>
      <Text style={{color:"#58688F", fontSize:30}}>在子组件之后显示的爸爸</Text>
    </View>
  </Sub>
</View>
//子组件
const Sub=(props)=><View>
  <Text style={{color:props.txtColor, fontSize:30}}>子组件</Text>
  {props.children}
</View>
export default Index;
~~~
### 生命周期
~~~ JavaScript
class Index extends Component {
  
  //1.构造函数
  constructor(){
    super();
    console.log("1 构造函数 constructor");  
    this.state ={  // 对属性初始化
      num:100,
      show:true
    }
  }

  //3.组件挂载完毕 用于发送异步请求
  componentDidMount() {
    console.log("3 组件挂载完毕");
  }

  handlePress=()=>{
    this.setState({num: Date.now()});
  }
  handleToggle=()=>{
    this.setState({show: !this.state.show});
  }
  render() {
    console.log("2 render 视图的渲染 视图更新");
    return (  
      <View>
        <Text onPress={this.handlePress} style={{fontSize:30}}>{this.state.num}</Text>
        <Text onPress={this.handleToggle}>切换显示</Text>
        {this.state.show?<Btn></Btn>:<></>}
      </View>
    );
  }
}

class Btn extends Component {
  componentWillUnmount(){
    console.log("组件被卸载");
  }
  render() { 
    return ( 
      <View>
        <Text>按钮</Text>
      </View>
     );
  }
}
 
export default Index; 
~~~
### 使用及修改全局变量
- 定义全局变量:

新建文件mobx/index.js
~~~ JavaScript
import { observable, action } from "mobx";

class RootStore{
    // es7的装饰器语法
    @observable
    name = "Elsa";

    @action
    changeName(name){  //行为，修改名称
        this.name=name;
    }
}

export default new RootStore();
~~~
- 定义组件，组件中使用全局变量 

新建文件 components/Btn.js

inject的RootStore是界面中Provider的名字
~~~ JavaScript
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { inject,observer } from "mobx-react";
@inject("RootStore")
@observer
class Index extends Component {
    handleChangeName=()=>{
        console.log("name changed");
        this.props.RootStore.changeName("好家伙");
    }
    render() {
        console.log(this);
        return(
            <View><Text style={{fontSize:30}} onPress={this.handleChangeName}>Btn:{this.props.RootStore.name}</Text></View>
        )
    }
}
export default Index;
~~~
- 界面中使用自定义组件
~~~ JavaScript
import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
import RootStore from "./mobx";
import {Provider} from "mobx-react";
import Btn from "./components/Btn";

class Index extends Component {
  
  render() {
    return (
      <View>
        <Provider RootStore={RootStore}>
        <Btn></Btn>
        </Provider>
      </View>
    )
  }
}

export default Index;
~~~