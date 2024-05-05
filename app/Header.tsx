import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const Header: React.FC = () => {
    const navigation = useNavigation();
    const navigationState = useNavigationState((state) => state);
    const [canGoBack, setCanGoBack] = useState(navigation.canGoBack());

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            setCanGoBack(navigation.canGoBack());
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            {canGoBack &&
                <IconButton
                    icon="arrow-left"
                    style={styles.arrow}
                    iconColor="black"
                    containerColor='transparent'
                    rippleColor='transparent'
                    size={50}
                    mode="contained"
                    onPress={() => navigation.goBack()}>
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
