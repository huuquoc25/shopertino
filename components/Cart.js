import { Button, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native';

const Cart = () => {
    return (
        <View>
            <Image source={require('../assets/featured_image_3.png')} />
            <View>
                <Text>Life is a Safari mini dress - Khaki</Text>
                <View>
                    <View>
                        <Text>Color</Text>
                        <View>
                            {[1, 2, 3].map(() => (
                                <Text></Text>
                            ))}
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Size</Text>
                            <View>
                                <Text>Xs</Text>
                                <Text>S</Text>
                                <Text>M</Text>
                                <Text>L</Text>
                            </View>
                        </View>
                        <Text>2</Text>
                    </View>
                    <Text>$ 34.99</Text>
                </View>
            </View>
        </View>
    );
};

export default Cart;
