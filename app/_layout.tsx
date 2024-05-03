import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Content from './Content';
import Header from './Header';

const layout = () => {
    return (
        <PaperProvider>
        <View style={styles.container}>
            <Header />
            <Content />
        </View>
        </PaperProvider>
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

export default layout;
