import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { View, Text } from 'react-native';

const InputCus = () => {
    return (
        <View style={{ flexDirection: 'row', gap: 8, marginHorizontal: 16, alignItems: 'center', flex: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#ccc',
                    overflow: 'hidden',
                    borderRadius: 999,
                    flex: 1,
                    paddingHorizontal: 8,
                    alignItems: 'center',
                }}
            >
                <Image source={require('../assets/BarsSearchSearch.png')} />
                <TextInput
                    placeholder="Search"
                    style={{ fontSize: 18, paddingVertical: 4, paddingHorizontal: 6, flex: 1 }}
                />
                <Image source={require('../assets/Group4.png')} />
            </View>
            <Text>Cancel</Text>
        </View>
    );
};

export default InputCus;
