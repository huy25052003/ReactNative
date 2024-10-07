import React from 'react';
import { useState } from 'react';
import {Text,Image,View,Button,Touchable, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();


const Store = ({ navigation }) => {
   const basePrice = 1790000;
   
  return (
  <View>
    <View>
      <View style={{flexDirection:"row", justifyContent:'center'}}>
        <Image source={{uri:"https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/e/den-1_1.png"}} style={{width:300, height:350}}/>
      </View>
    </View>
    <View style={{padding:30}}>
      <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={{fontSize:20}}>{basePrice.toLocaleString()}đ</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Chọn màu"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    </View>
  </View>
  );
}
function Details({ navigation }) {
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{ flex: 1, alignItems: 'flex-start', flexDirection:'row' }}>
        <Image source={{uri:"https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/e/den-1_1.png"}} style={{width:100, height:100}}/>
        <View>
          <Text>Điện thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>
      <View>
          <Text>Chọn một màu bên dưới</Text>
          <Button />
          <Button color='red'/>
          <Button color='white'/>
          <Button color='purple'/>  </View>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Store">
        <Stack.Screen name="StoreApp" component={Store} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}