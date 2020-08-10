import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import ProductionScreen from './Screen5/ProductionScreen';
import MechanicalScreen from './Screen6/MechanicalScreen'
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import SaleScreen from './Screen3/SaleScreen';
import Attendance from './Screen8/Attendance';
import RawScreen from '../BusinessPartner/Screen4/RawScreen';
import FinishedScreen from '../BusinessPartner/Screen7/FinishedScreen';

  export default function App() {
    return (
     <View style={{flex:1 , backgroundColor:'black'}}>   
      <AppContainer />   
     
     </View>
  );
}

  var AppNavigator = createSwitchNavigator({
    HomeScreen: {screen :HomeScreen  },
    ProductionScreen:{screen : ProductionScreen} ,
    SaleScreen : {screen:SaleScreen},
    Attendance : {screen:Attendance},
    MechanicalScreen : {screen:MechanicalScreen},
    RawScreen : {screen:RawScreen},
    FinishedScreen : {screen:FinishedScreen}
  })
  const AppContainer = createAppContainer(AppNavigator)

  
 
  
  /*  <RawScreen />
    <StockScreen1 />
    <FinishedScreen />
    <AttendanceScreen1 />
    <ProductionScreen />
    

  const MechNavigator = createSwitchNavigator({
    StockScreen1: {screen : StockScreen1},
    MechanicalScreen: {screen : MechanicalScreen}
  })
   const MechContainer = createAppContainer(MechNavigator)
  */