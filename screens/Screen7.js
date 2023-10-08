import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native'
import CheckBox from 'react-native-check-box';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Screen7 = () => {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={{justifyContent:'space-between', flex: 1, flexDirection: 'column', marginTop:30}}>
        <View>
        <Navbar tit={'Shopping Bag'} menu={require('../assets/shopBtn.png')} />

            <View style={{flexDirection: 'row', marginHorizontal:5, borderColor: '#979797', borderRadius: 10, borderWidth:1 }}>
            <Image source={require('../assets/featured_image_3.png')}/>
            <View style={{marginVertical:10}}>
                <Text style={{marginLeft:5}}>Life Is A Safari Mini Dress - Khaki</Text>
                <View style={{marginLeft:20, marginVertical: 4}}>
                    <View style={{flexDirection: 'row', marginVertical: 10}}>
                        <Text>Color</Text>
                        <View style={{gap:10, flexDirection: 'row'}}>
                                <TouchableOpacity style={{justifyContent:'center',alignItems:'center', backgroundColor:'white', borderRadius: 6, borderWidth:1, height: 25, width:25}}>
                                    <Text>x</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:'pink', borderRadius: 6, height: 25, width:25}}>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:'black', borderRadius: 6, height: 25, width:25}}>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={{flexDirection:'row', marginVertical: 10}}>
                        <Text style={{marginRight: 8}}>Size</Text>
                        <View style={{gap:10, flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Text>XS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>S</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>M</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>L</Text>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <Text style={{marginTop: 30, fontSize:18, fontWeight: 800}}>$34.99</Text>
                </View>
            </View>
            <View style={{justifyContent:'space-between', marginVertical: 20, marginLeft: 10}}>
                    <TouchableOpacity>
                        <Image source={require('../assets/add_button.png')}/>
                    </TouchableOpacity>
                    {/* <Text>{isSelected ? 'XS' : 'S' }</Text> */}
                    <Text style={{fontWeight: 700, fontSize: 18}}>2</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/add_buttoncopy.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginTop:20, marginHorizontal:5, borderColor: '#979797', borderRadius: 10, borderWidth:1 }}>
                <Image source={require('../assets/new_arrival_image_1.png')}/>
                <View style={{marginVertical:10}}>
                    <Text style={{marginLeft:5}}>Life Is A Safari Mini Dress - Khaki</Text>
                    <View style={{marginLeft:20, marginVertical: 4}}>
                        <View style={{flexDirection: 'row', marginVertical: 10}}>
                            <Text>Color</Text>
                            <View style={{gap:10, flexDirection: 'row'}}>
                                <TouchableOpacity style={{backgroundColor:'white', borderRadius: 6, borderWidth:1, height: 25, width:25}}>
                                </TouchableOpacity>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'pink', borderRadius: 6, height: 25, width:25}}>
                                    <Text>x</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:'black', borderRadius: 6, height: 25, width:25}}>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', marginVertical: 10 ,alignItems: 'center'}}>
                            <Text style={{marginRight: 8}}>Size</Text>
                            <View style={{gap:10, flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Text>XS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>S</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>M</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>L</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={{marginTop: 30, fontSize:18, fontWeight: 800}}>$34.99</Text>
                    </View>
                </View>
                <View style={{justifyContent:'space-between', marginVertical: 20, marginLeft: 10}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/add_button.png')}/>
                        </TouchableOpacity>
                        {/* <Text>{isSelected ? 'XS' : 'S' }</Text> */}
                        <Text style={{fontWeight: 700, fontSize: 18}}>1</Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/add_buttoncopy.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>

        <View style={{borderWidth:1, borderColor:'#979797'}}>
            <View style={{marginHorizontal: 30, marginVertical:20}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 10, alignItems: 'center', marginBottom: 20}}>
                    <Text style={{fontWeight: 700}}>Total</Text>
                    <Text style={{fontWeight: 800, fontSize:18}}>$74.98</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'black', alignItems: 'center', borderRadius: 10}}>
                    <Text style={{fontSize: 20, color:'white', fontWeight:700, marginVertical:10}}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Screen7
const styles = StyleSheet.create({
    checkbox1:{
        backgroundColor:'pink',
        borderRadius:5
        
    },
    checkbox2:{
        backgroundColor:'black',
        borderRadius:5
        
    }
})
