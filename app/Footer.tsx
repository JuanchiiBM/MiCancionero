import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Footer: React.FC = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <IconButton
                icon="pencil-plus"
                iconColor="black"
                containerColor='white'
                rippleColor='#aaaaaa'
                size={50}
                mode="contained"
                onPress={() => router.push('/Song')}>
            </IconButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        right: 10,
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute'
    },
});

export default Footer;
