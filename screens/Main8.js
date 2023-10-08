import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';
import { ScrollView } from 'react-native';
import Item from '../components/Item';
import { DATA } from '../data.js';

const Main8 = () => {
    return (
        <View style={{ marginVertical: 44 }}>
            <Navbar tit={'Dresses'} menu={require('../assets/shopBtn.png')} />
            <ScrollView>
                <View style={{ flexDirection: 'row', padding: 18, flexWrap: 'wrap' }}>
                    {DATA.map((item, ind) => (
                        <Item key={ind} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Main8;
