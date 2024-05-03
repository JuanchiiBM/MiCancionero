import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

// create a component
const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium'>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
});

export default Header;
