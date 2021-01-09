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