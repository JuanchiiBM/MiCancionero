import React from 'react';
import { View, Text, StyleSheet, Image, GestureResponderEvent, ImageRequireSource  } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
    hideModal: () => void
}

interface ImageMap {
    [key: string]: ImageRequireSource;
}

const Notes: React.FC<Props> = ({ hideModal }) => {
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
    const [showImage, setShowImage] = React.useState(false);
    const [buttonText, setButtonText] = React.useState('');

    const imageMap: ImageMap = {
        '#C': require('@/assets/images/notes/DO-C.png'),
        '#Dm': require('@/assets/images/notes/REm-Dm.png'),
        // Agrega más rutas de imágenes aquí
    };

    const showNote = (event: GestureResponderEvent, text: string) => {
        setCursorPosition({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY });
        console.log(`${cursorPosition.x} & ${cursorPosition.y}`)
        setShowImage(true);
        setButtonText(text);
    };


    const selectNote = () => {
        hideModal()
        setShowImage(false);
        setButtonText('');
    }

    return (
        <View style={styles.container}>
            <Button onLongPress={(event) => showNote(event, '#C')} onPress={selectNote}>
                <Text>#C</Text>
            </Button>
            <Button onLongPress={(event) => showNote(event, '#Dm')} onPress={selectNote}>
                <Text>#Dm</Text>
            </Button>
            {showImage && (
                <Image
                    style={[styles.img, { left: cursorPosition.x, top: cursorPosition.y }]}
                    source={imageMap[buttonText]}
                />
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 60,
        height: 60,
        position: 'absolute'
    }
});

export default Notes;
