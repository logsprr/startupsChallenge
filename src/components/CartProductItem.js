import * as React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, deleteProduct } from '../store/modules/Products/ProductsActions';

const CartProductItem = (props) => {
    const dispatch = useDispatch();
    const updtProduct = (type) => {
        props.productsState.dataCart[props.index].qtd = type == 'm' ? props.productsState.dataCart[props.index].qtd + 1 : props.productsState.dataCart[props.index].qtd - 1
        props.productsState.dataCart[props.index].priceTotal = type == 'm' ? props.productsState.dataCart[props.index].priceTotal
            + props.productsState.dataCart[props.index].price : props.productsState.dataCart[props.index].priceTotal - props.productsState.dataCart[props.index].price;
        dispatch(updateProduct(props.productsState.dataCart))
    }
    const removeProduct = () => {
        props.productsState.dataCart.splice(props.index, 1);
        dispatch(deleteProduct(props.productsState.dataCart))
    }
    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center', borderBottomColor: '#ddd', borderBottomWidth:
                props.productsState.dataCart[props.productsState.dataCart.length - 1].id == props.item.id ? 0 : 1
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