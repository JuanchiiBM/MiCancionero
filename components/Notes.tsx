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
    const [showImage, setShowImage] = React.useState(false);
    const [buttonText, setButtonText] = React.useState('');

    const imageMap: ImageMap = {
        '#C': require('@/assets/images/notes/DO-C.png'),
        '#Dm': require('@/assets/images/notes/REm-Dm.png'),
        // Agrega más rutas de imágenes aquí
    };

    const showNote = (event: GestureResponderEvent, text: string) => {
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
            <Button onPressOut={()=>setShowImage(false)} onLongPress={(event) => showNote(event, '#C')} onPress={selectNote}>
                <Text>#C</Text>
            </Button>
            <Button onPressOut={()=>setShowImage(false)} onLongPress={(event) => showNote(event, '#Dm')} onPress={selectNote}>
                <Text>#Dm</Text>
            </Button>
            {showImage && (
                <Image
                    style={[styles.img, { left: 0, top: 0 }]}
                    source={imageMap[buttonText]}
                />
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    img: {
        width: '100%',
        height: 300,
        position: 'absolute'
    }
});

export default Notes;
