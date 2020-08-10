import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import AButton from './AButton';
import Header from './Header';
 export default class Attendance extends React.Component { 
      tobu=()=>{
            this.props.navigation.navigate('HomeScreen')
          } 
  render() {
   return (
    <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
     <View>
     <Header />
     <AButton />
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
   backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:250 , height:60,  borderRadius:200
  ,borderColor:'aqua',borderWidth:5,margin:25,
   },
 buttonText:{
   color:'aqua' , fontSize:35// ,fontFamily:'Segoe Print'
       }
      })                                                             