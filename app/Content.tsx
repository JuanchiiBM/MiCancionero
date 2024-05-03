import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import ListSong from '../components/ListSong';

const Content: React.FC = () => {
    return (
        <View style={styles.container}>
            <List.Section>
                <ListSong titleSong='Cancion'></ListSong>
            </List.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Content;
