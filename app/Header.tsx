import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { usePathname, useRouter } from 'expo-router';
import { IconButton } from 'react-native-paper';

const Header: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <View style={styles.container}>
            {pathname === '/Song' &&
                <IconButton
                    icon="arrow-left"
                    style={styles.arrow}
                    iconColor="black"
                    containerColor='transparent'
                    rippleColor='transparent'
                    size={50}
                    mode="contained"
                    onPress={() => router.replace('/')}>
                </IconButton>
            }

            <Text variant='headlineMedium'>Mi Cancionero</Text>
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
    arrow: {
        position: 'absolute',
        left: 10
    }
});

export default Header;
