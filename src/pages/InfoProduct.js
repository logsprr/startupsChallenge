import * as React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import Loading from '../components/Loading';
import { addProduct } from '../store/modules/Products/ProductsActions';
import { useDispatch, useSelector } from "react-redux";

const InfoProduct = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [product, setProduct] = React.useState(null);
    const { productsState } = useSelector(state => ({
        productsState: state.products,
    }));
    React.useEffect(() => {
        const { product } = route.params;
        setProduct(product);
    }, [product])

    const purchaseProduct = () => {
        for (const key in productsState.data) {
            if (productsState.data[key].id == product.id) {
                Alert.alert('Produto', 'Já adicionado')
                return;
            }
        }
        const newProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            qtd: 1,
            priceTotal: product.price
        }
        dispatch(addProduct(newProduct))
        navigation.navigate('Cart')
    }
    const addToCart = () => {
        for (const key in productsState.data) {
            if (productsState.data[key].id == product.id) {
                Alert.alert('Produto', 'Já adicionado')
                return;
            }
        }
        const newProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            qtd: 1,
            priceTotal: product.price
        }
        dispatch(addProduct(newProduct))
        Alert.alert(
            'Sucesso',
            'Produto adicionado'
        )
    }
    if (product == null) {
        return (<Loading />)
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', margin: 10 }}>
                <Image source={{ uri: product.image }} style={{ width: 150, height: 150 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 10 }} >{product.title}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 28, margin: 10 }}>R$ {product.price}</Text>
                <View style={{ flexDirection: 'row', margin: 10, width: '100%' }}>
                    <Text style={{ fontWeight: 'bold' }}>Descrição</Text>
                    <View style={{ borderBottomWidth: 1, width: '80%', marginBottom: 6, borderBottomColor: '#ddd' }} />
                </View>
                <Text style={{
                    margin: 10
                }}>
                    {product.description}
                </Text>
                <View style={{
                    justifyContent: 'center', position: 'absolute',
                    bottom: 0
                }}>
                    <TouchableOpacity
                        onPress={() => purchaseProduct()}
                        style={{ marginTop: 50, backgroundColor: '#f4511e', justifyContent: 'center', alignItems: 'center', height: 30, borderRadius: 4 }}>
                        <Text style={{ color: 'white' }}>
                            COMPRAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => addToCart()}
                        style={{ margin: 10 }}>
                        <Text style={{ color: '#f4511e' }}>
                            ADICIONAR AO CARRINHO
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default InfoProduct;