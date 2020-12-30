import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import * as RootNavigation from '../routes/refNavigation';

const IconCart = (props) => {
    const { productsState } = useSelector(state => ({
        productsState: state.products,
    }));
    const openCart = () => {
        console.log('aqui')
        RootNavigation.navigate('Cart')
    }
    return (
        <TouchableOpacity
            onPress={() => openCart()}
            style={{ margin: 10, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Icon name={props.name} size={22} color="white" />
            <View style={{ backgroundColor: 'white', borderRadius: 8, width: 16, height: 16, marginBottom: -8, marginLeft: -8 }}>
                <Text style={{ textAlign: 'center' }}>{productsState.totalProducts}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IconCart;