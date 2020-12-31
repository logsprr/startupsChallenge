import * as React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import ProductItem from '../components/ProductItem';
import { ListTypesRequest } from '../config/types';

const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const { productsState } = useSelector(state => ({
        productsState: state.products,
    }));
    React.useEffect(() => {
        const callProducts = async () => {
            dispatch({ type: ListTypesRequest.LOAD_ALL_PRODUCTS })
        };
        callProducts();
    }, [])

    console.log(productsState)
    if (productsState.dataProducts.length == 0) {
        return (<Loading />)
    } else {
        return (
            <View style={{ margin: 10, flex: 1 }}>
                <FlatList
                    numColumns={2}
                    data={productsState.dataProducts}
                    useNativeDriver
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                />
            </View>
        )
    }
}

export default Products;