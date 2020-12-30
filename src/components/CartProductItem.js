import * as React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, deleteProduct } from '../store/modules/Products/ProductsActions';

const CartProductItem = (props) => {
    const dispatch = useDispatch();
    const updtProduct = (type) => {
        for (const key in props.productsState.data) {
            console.log(props.productsState)
            if (props.productsState.data[key].id == props.item.id) {
                props.productsState.data[key].qtd = type == 'm' ? props.productsState.data[key].qtd + 1 : props.productsState.data[key].qtd - 1
                props.productsState.data[key].priceTotal = type == 'm' ? props.productsState.data[key].priceTotal
                    + props.productsState.data[key].price : props.productsState.data[key].priceTotal - props.productsState.data[key].price;
                dispatch(updateProduct(props.productsState.data))
            }
        }
    }
    const removeProduct = () => {
        console.log(props)
        for (const key in props.productsState.data) {
            if (props.productsState.data[key].id == props.item.id) {
                props.productsState.data.splice(key, 1);
                dispatch(deleteProduct(props.productsState.data))
            }
        }
    }
    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center', borderBottomColor: '#ddd', borderBottomWidth:
                props.productsState.data[props.productsState.data.length - 1].id == props.item.id ? 0 : 1
        }}>
            <Image source={{ uri: props.item.image }} style={{ width: '30%', height: 100, margin: 2 }} />
            <View style={{ flexDirection: 'column', width: '70%' }}>
                <Text style={{ margin: 4, fontWeight: 'bold' }}>
                    {props.item.title}
                </Text>
                <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                    <TouchableOpacity onPress={() =>
                        Alert.alert('Aviso', 'Deseja remover ?',
                            [
                                {
                                    text: "Sim",
                                    onPress: () => removeProduct()
                                },
                                {
                                    text: "Não",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                }
                            ],
                            { cancelable: false })}>
                        <Icon name="delete" size={24} color='#95a5a6' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ margin: 4 }}>
                        Categoria:  {props.item.category}
                    </Text>
                    <View style={{ margin: 4, flexDirection: 'row' }}>
                        <Text>Quantidade: {props.item.qtd}</Text>
                        {props.item.qtd > 1
                            &&
                            <TouchableOpacity
                                onPress={() => updtProduct('n')}
                                style={{ marginLeft: 4, height: 24, width: 24 }}>
                                <Text style={{ textAlign: 'center' }}>
                                    -
                                </Text>
                            </TouchableOpacity >}
                        <TouchableOpacity
                            onPress={() => updtProduct('m')}
                            style={{ marginLeft: 4, height: 24, width: 24 }}>
                            <Text style={{ textAlign: 'center' }}>
                                +
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 6, fontWeight: 'bold' }}>
                            R$ {props.item.priceTotal}
                        </Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default CartProductItem;