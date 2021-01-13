import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Index extends Component{
    static defaultProps={
        style:{},
        textStyle:{}
    }
    render(){
        return(
            <TouchableOpacity style={{height:"100%", width:"100%", ...this.props.style}}>
            <LinearGradient  start={{x:0,y:0}} end={{x:1,y:0}} colors={['#9b63cd', '#e0708c']} style={styles.linearGradient}>
                <Text style={{...styles.buttonText, ...this.props.textStyle}}>
                    {this.props.children}
                </Text>
            </LinearGradient>
            </TouchableOpacity>
        );
    }
}
// Within your render function


// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    //margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
export default Index;