import * as React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import ProductItem from '../components/ProductItem';
import { ListTypesRequest } from '../config/types';

const Products = ({ navigation }) => {
    const [products, setProducts] = React.useState(null);
    const dispatch = useDispatch()
    React.useEffect(() => {
        const callProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products/');
            setProducts(await response.json());
        };
        callProducts();
    }, [])

    if (products == null) {
        return (<Loading />)
    } else {
        return (
            <View style={{ margin: 10, flex: 1 }}>
                <FlatList
                    numColumns={2}
                    data={products}
                    useNativeDriver
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                />
            </View>
        )
    }
}

export default Products;