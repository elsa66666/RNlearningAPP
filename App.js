import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import Nav from "./src/nav";

class App extends Component {
  render(){
    return(
      <View style={{flex:1}}>
        <Nav></Nav>
      </View>
    );
  }
}
export default App;