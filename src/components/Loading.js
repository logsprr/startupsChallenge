import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator />
        </View>
    )
}

export default Loading;