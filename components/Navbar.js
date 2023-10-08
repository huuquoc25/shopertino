import { TouchableOpacity } from 'react-native';
import { View, Text, Image, onPress } from 'react-native';
import InputCus from './InputCus';

const Navbar = ({ isCart, inp, tit, menu = require('../assets/harmburger-icon.png'), onPress }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 18,
            }}
        >
            <TouchableOpacity onPress={onPress}>
                <Image source={menu} />
            </TouchableOpacity>
            {inp && <InputCus />}
            {tit && (
                <View style={{ alignItems: 'center', flex: 1, marginLeft: -18 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>{tit}</Text>
                </View>
            )}
            {isCart && <Image source={require('../assets/shopping-bag-filled.png')} />}
        </View>
    );
};

export default Navbar;
