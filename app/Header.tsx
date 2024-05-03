import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Header;
