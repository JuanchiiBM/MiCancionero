import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import Constants from 'expo-constants';

import Content from './Content';
import Header from './Header';

const layout = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PaperProvider>
                <View style={styles.content}>
                    <Header />
                    <Slot />
                </View>
            </PaperProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default layout;
