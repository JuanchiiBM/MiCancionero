import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

interface Props {
    titleSong: string
}

const ListSong: React.FC<Props> = ({ titleSong }) => {
    return (
        <List.Item
            style={styles.list}
            title={titleSong}
            left={() => <List.Icon icon="microphone" />}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        borderBottomWidth: 2,
        paddingLeft: 10,
        width: '100%',
    }
});

export default ListSong;
