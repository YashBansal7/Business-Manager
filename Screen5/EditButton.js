import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';


export default class EditButton extends React.Component {
   

  render() {
    return (
            <View style={{ alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style= {Styles.sbutton}>
      <Text style = {Styles.sbtext}> Edit </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  sbutton:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:200 , height:80 ,  borderRadius:200,
    borderColor:'aqua',borderWidth:5,marginTop:300,marginBottom:17
  },
  sbtext:{
    color:'aqua' , fontSize:35 //,fontFamily:'Segoe Print'
  }
})