import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  { id: '1', source: require('../assets/clothing.png'), text: 'CLOTHING' },
  { id: '2', source: require('../assets/acessories.png'), text: 'ACCESSORIES' },
  { id: '3', source: require('../assets/Shoes.png'), text: 'SHOES' },
  { id: '4', source: require('../assets/Waches.png'), text: 'WATCHES ' },
  { id: '5', source: require('../assets/Bags.png'), text: 'BAGS' },
  { id: '6', source: require('../assets/dresses.png'), text: 'DRESSES' },
  { id: '7', source: require('../assets/bestsellers.png'), text: 'BESTSETLLERS' },
  { id: '8', source: require('../assets/ungerie.png'), text: 'UNGERIE' },
  { id: '9', source: require('../assets/Men.png'), text: 'MEN' },
  { id: '10', source: require('../assets/kids.png'), text: 'KIDS' },
];

const MainScreen9 = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <ImageBackground source={item.source} style={styles.image}>
        <Text style={styles.text}>{item.text}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
          <Image source={require('../assets/harmburger-icon.png')} />
        </TouchableOpacity>
        <Text style={styles.menu}>Shop</Text>
        <Image source={require('../assets/shopping-bag-filled.png')} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10,
  
  },
  menu: {
    fontSize: 17,
  },
  header: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginLeft:10,
  },
  itemContainer: {
    flex: 1,
    alignItems:'center',
  },
  image: {
    width: 360, 
    height: 109,
    overflow: 'hidden',
    borderRadius:17,
    marginBottom:7, 
},
  text: {
  position: 'absolute',
  color: 'white',
  textAlign: 'center',
  alignItems:'center',
  fontSize:18,
  padding:40,
  fontWeight:'900',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

    
  },
});

export default MainScreen9;
