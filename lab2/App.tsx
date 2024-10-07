import React from 'react';
import { useState } from 'react';
import {Text,Image,View,Button,Touchable, TextInput} from 'react-native';

const StoreApp = () => {
  const basePrice = 141800;
  const [totalPrice,settotalPrice]= useState(141800);
  const [quantity,setQuantity] = useState(1);
  return (
    <View>
      <View style={{flexDirection:'row'}} >
          <Image source={{uri:'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg'}} style={{width:100,height:100}} />
        <View style={{flexDirection:'column'}}>
          <Text>Nguyên hàm phân tích và ứng dụng</Text>
          <Text>Cung cấp bởi Tiki</Text>
          <Text style={{color:'red'}}>{(basePrice*quantity).toLocaleString()} đ</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
            <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{quantity}</Text>
            <Button title="+" onPress={() => setQuantity(quantity + 1)} />
            <Text style={{fontSize:12,marginLeft:80, color:'blue'}}>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style = {{flexDirection:'row', margin:10}}>
        <TextInput style={{width:250,height:35,borderColor:'black', marginRight:5, borderWidth:1}} placeholder={'Mã giảm giá'}/> 
        <Button title="Áp dụng"/> 
      </View>
      <View style = {{flexDirection:'row'}}>
        <Text>Tạm tính</Text> 
        <Text style={{marginLeft:200}}>{basePrice*quantity}</Text>

        
      </View>
      

    </View>
    
  );
}

export default StoreApp;