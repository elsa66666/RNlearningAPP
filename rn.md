1 rn中默认容器布局方式 flex

2 方向 flex-direction:column

3 rn样式没有继承 子容器不会继承父容器的样式

#### Flex布局

~~~ javaScript
const Index = () => <View style={{backgroundColor:"#D9C0BC",flex:1}}>
  <Text style={{backgroundColor:"#58688F", 
                color:"black",
                fontSize:50,
                transform:[{translateY:200},{scale:0.5}]}}>JSX1 </Text>
</View>
~~~

#### 绑定点击事件
~~~ JavaScript
const handlePress=()=>{
  alert("你点击了屏幕");
}

const Index = () => <TouchableOpacity onPress={handlePress} activeOpacity={0}>
  <Text style={{fontSize:50}}> JSX1 </Text>
</TouchableOpacity>
export default Index;
~~~

#### 插入GIF
在android/app/build.gradle的dependencies中加入：

implementation 'com.facebook.fresco:animated-gif:2.0.0' 

插入本地图片或网络图片的写法：
注意网络图片要表明其宽和高
~~~ JavaScript
  <Image source={require("./images/testGIF.gif")}></Image>
  <Image style={{width:400, height:500}} source={{uri:"图片的链接"}}/>
</View>

~~~ 
#### 背景图片
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
#### 输入框
~~~ JavaScript 
const handleChangeText=(text)=>{
  alert(text)
}
const Index = () => <TextInput onChangeText={handleChangeText} />

export default Index;
~~~
#### 数组
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
#### 类属性
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
#### 父子组件的数据传递
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