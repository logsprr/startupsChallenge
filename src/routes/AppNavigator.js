import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View } from 'react-native';
import IconCart from '../components/CartIcon';
import { navigationRef } from './refNavigation';

const Products = React.lazy(() => import('../pages/Products'));
const InfoProducts = React.lazy(() => import('../pages/InfoProduct'));
const Cart = React.lazy(() => import('../pages/Cart'));


const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <React.Suspense fallback={<View />}>
            <NavigationContainer ref={navigationRef} >
                <Stack.Navigator>
                    <Stack.Screen name="Products" component={Products} options={{
                        headerShown: true, headerTitle: 'Produtos', headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerRight: () => <IconCart name='cart-outline' />

                    }} />
                    <Stack.Screen name="InfoProducts" component={InfoProducts} options={{
                        headerShown: true, headerTitle: '', headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerRight: () => <IconCart name='cart-outline' />
                    }} />
                    <Stack.Screen name="Cart" component={Cart} options={{
                        headerShown: true, headerTitle: 'Carrinho de Compras', headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerBackTitle: 'Voltar',
                        headerTintColor: '#fff',
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Suspense >
    );
}