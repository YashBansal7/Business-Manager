import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import Header from './Header'

import SaleScreen from '../Screen3/SaleScreen'
import ProductionScreen from '../Screen5/ProductionScreen'
import Attendance from '../Screen8/Attendance'
import MechanicalScreen from '../Screen6/MechanicalScreen'
import RawScreen from '../Screen4/RawScreen'
import FinishedScreen from '../Screen7/FinishedScreen'
export default class HomeScreen extends React.Component {

  gotobuzzer=()=>{
    this.props.navigation.navigate('ProductionScreen')
  }

  buzzer=()=>{
    this.props.navigation.navigate('SaleScreen')
  }

  buzz=()=>{
    this.props.navigation.navigate('Attendance')
  }

  
  buz=()=>{
    this.props.navigation.navigate('MechanicalScreen')
  }

  tobuzzer=()=>{
    this.props.navigation.navigate('RawScreen')
  }

  gotbuzzer=()=>{
    this.props.navigation.navigate('FinishedScreen')
  }

  render() {
    return (
            <View style={{ alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
              <View> 
                  <Header />
                </View>
          
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.buzz ()}>
                <Text style = {Styles.buttonText}> Attendance </Text>
                </TouchableOpacity>
               </View>


              <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.gotobuzzer ()}>
                <Text style = {Styles.buttonText}> Production </Text>
                </TouchableOpacity>
               </View>

              
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.buzzer ()}>
                <Text style = {Styles.buttonText}> Sale </Text>
                </TouchableOpacity>
               </View>
  
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.buz ()}>
                <Text style = {Styles.buttonText}> Mechanical Stocks </Text>
                </TouchableOpacity>
               </View>
               
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.tobuzzer ()}>
                <Text style = {Styles.buttonText}> Raw Stocks </Text>
                </TouchableOpacity>
               </View>
               
               
               <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.gotbuzzer ()}>
                <Text style = {Styles.buttonText}> Finished Stocks </Text>
                </TouchableOpacity>
               </View>
               
             </View>
    );
  }
}


const Styles = StyleSheet.create({
  buzzer:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:350 , height:60,  borderRadius:200
    ,borderColor:'aqua',borderWidth:5,margin:25,
  },
  buttonText:{
    color:'aqua' , fontSize:35// ,fontFamily:'Segoe Print'
  }
})