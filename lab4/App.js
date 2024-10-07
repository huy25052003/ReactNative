import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Store = () => {
  const items = [
    { id: 1, image: 'https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg', name: 'Ca nấu lẩu, nấu mì mini', shop: 'Shop Devang' },
    { id: 2, image: 'https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg', name: '1KG Khô Gà Bơ Tỏi', shop: 'Shop LTD Food' },
    { id: 3, image: 'https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg', name: 'Cầu đa năng', shop: 'Thế giới đồ chơi' },
    { id: 3, image: 'https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg', name: 'Cầu đa năng', shop: 'Thế giới đồ chơi' },
    { id: 3, image: 'https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg', name: 'Cầu đa năng', shop: 'Thế giới đồ chơi' },
    { id: 3, image: 'https://img.freepik.com/free-photo/skin-regeneration-product-still-life_23-2151232228.jpg', name: 'Cầu đa năng', shop: 'Thế giới đồ chơi' },
    // Add more items as necessary
  ];

  const handleChatPress = (name) => {
    alert(`Chat with ${name}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Back</Text>
        <Text style={styles.headerText}>Chat</Text>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      {/* Product List */}
      <ScrollView>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemShop}>{item.shop}</Text>
            </View>
            <TouchableOpacity style={styles.chatButton} onPress={() => handleChatPress(item.name)}>
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>More</Text>
        <Text style={styles.headerText}>Home</Text>
        <Text style={styles.headerText}>Back</Text>
      </View>
    </View>

  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'cyan',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemShop: {
    fontSize: 14,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
