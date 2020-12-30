import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
const ProductItem = (props) => {

    const openProduct = (product) => {
        props.navigation.navigate('InfoProducts', {
            product: product
        });
    }

    return (
        <View style={{
            width: '48%',
            margin: 4,
            backgroundColor: 'white',
            borderRadius: 4,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowRadius: 1,
            shadowOpacity: 0.2,
            elevation: 5

        }}>
            <TouchableOpacity onPress={() => openProduct(props.item)}>
                <Image source={{ uri: props.item.image }} style={{ width: 100, height: 100, marginLeft: 30, marginTop: 10 }} />
                <View style={{ margin: 10, justifyContent: 'flex-end' }}>
                    <Text numberOfLines={2} >{props.item.title}</Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }} >R$: {props.item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}
export default ProductItem;