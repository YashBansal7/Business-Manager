import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import Header from './Header';
import EditButton from './EditButton'

export default class SaleScreen extends React.Component {
   
  tobu=()=>{
    this.props.navigation.navigate('HomeScreen')
  }
  render() {
    return (
            <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
              <View>
    <Header />
    <EditButton />
    </View>

    <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.tobu ()}>
                <Text style = {Styles.buttonText}> Home </Text>
                </TouchableOpacity>
               </View>

      </View>
    );
  }
}


const Styles = StyleSheet.create({
  buzzer:{
    backgroundColor:'black', alignItems:'center', width:250 , height:60,  borderRadius:200
    ,borderColor:'aqua',borderWidth:5,margin:25,
  },
  buttonText:{
    color:'aqua' , fontSize:35// ,fontFamily:'Segoe Print'
  }
})