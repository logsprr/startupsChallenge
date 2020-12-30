import * as React from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import CartProductItem from '../components/CartProductItem';
import Loading from '../components/Loading';
import { ListTypesRequest } from '../config/types';

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(true);
    const { productsState } = useSelector(state => ({
        productsState: state.products,
    }));
    React.useEffect(() => {
        if (productsState.data.length > 0) {
            setLoading(false)
        } else {
            setLoading(false)
        }
    })
    const purchaseProducts = () => {
        dispatch({ type: ListTypesRequest.LOAD_CLEAN })
        Alert.alert('Sucesso', 'Produtos comprados')
    }

    const eraseCart = () => {
        dispatch({ type: ListTypesRequest.LOAD_CLEAN })
        Alert.alert('Sucesso', 'Itens removidos do carrinho')
    }
    if (loading) {
        return (<Loading />)
    } else if (productsState.data.length == 0) {
        return (<View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}><Text>Não há produtos</Text></View>)
    }
    else {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', margin: 10 }}>
                <FlatList
                    data={productsState.data}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => <CartProductItem productsState={productsState} item={item} />}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Products')} style={{ margin: 10 }}>
                                    <Text style={{ color: '#f4511e' }}>
                                        ADICIONAR PRODUTO
                                </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                <View style={{
                    alignItems: 'center', justifyContent: 'center', position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}>
                    <TouchableOpacity
                        onPress={() => purchaseProducts()}
                        style={{ marginTop: 50, backgroundColor: '#f4511e', justifyContent: 'center', alignItems: 'center', height: 30, borderRadius: 4, width: 100 }}>
                        <Text style={{ color: 'white' }}>
                            FINALIZAR
                                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => eraseCart()}
                        style={{ margin: 10 }}>
                        <Text style={{ color: '#f4511e' }}>
                            LIMPAR CARRINHO
                                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default Cart;