import { View, Text, Image } from 'react-native';

const Item = ({ item }) => {
    return (
        <View style={{ width: '50%', padding: 6, overflow: 'hidden', flexDirection: 'column', alignItems: 'center' }}>
            <Image source={item.img} />
            <View style={{ gap: 4 }}>
                <Text style={{ fontWeight: 500, fontSize: 18 }}>${item.price}</Text>
                <Text style={{ color: '#9B9B9B' }}>{item.tit}</Text>
            </View>
        </View>
    );
};

export default Item;
