import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';


export default class Header extends React.Component {
   

  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style= {Styles.sbutton}>
      <Text style = {Styles.sbtext}> Raw Stocks </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  sbutton:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:775 , height:150 , 
    borderColor:'aqua',borderWidth:5,
  },
  sbtext:{
    color:'aqua' , fontSize:35// , fontFamily:'Segoe Print' 
  }
})