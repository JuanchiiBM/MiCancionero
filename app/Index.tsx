import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Content from './Content';

const Index: React.FC = () => {
    return (
        <View style={styles.container}>
            <Content/>
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

export default Index;
