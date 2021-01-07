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