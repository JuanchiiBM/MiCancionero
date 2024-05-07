import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

// create a component
const Song: React.FC = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.nameInput}
                label="Canción"
                activeUnderlineColor='blue'
                placeholder="Nombre de la canción"
            />
            <TextInput
                style={styles.textInput}
                label="Letra"
                multiline
                activeUnderlineColor='blue'
                placeholder="Letra de la canción"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 11,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    textInput: {
        flex: 1,
        marginBottom: 100,
        borderRadius: 5,
        backgroundColor: 'white',
        lineHeight: 50,
        width:'90%'
    },
    nameInput: {
        height: 50,
        width: '90%',
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'white',
    }
});

export default Song;
