import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Index from './Index';
import Footer from './Footer';

const Content: React.FC = () => {
    return (
        <View style={styles.container}>
            <Index/>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 11,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Content;
