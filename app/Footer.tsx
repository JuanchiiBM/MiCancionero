import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton, Modal, Portal, Button } from 'react-native-paper';
import { useRouter, usePathname } from 'expo-router';

import Notes from '@/components/Notes';


const Footer: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <View style={styles.container}>
            {pathname === '/' && (
                <IconButton
                    icon="pencil-plus"
                    iconColor="black"
                    containerColor="white"
                    rippleColor="#aaaaaa"
                    size={50}
                    mode="contained"
                    onPress={() => router.push('/Song')}
                >
                </IconButton>
            )}
            {pathname === '/Song' && (

                <View style={styles.songContainer}>
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} style={styles.modalStyle} contentContainerStyle={styles.modalContentStyle}>
                            <Notes hideModal={hideModal}></Notes>
                        </Modal>
                    </Portal>
                    <IconButton
                        icon="content-save"
                        iconColor="black"
                        containerColor="white"
                        rippleColor="#aaaaaa"
                        size={50}
                        mode="contained"
                        onPress={() => router.push('/')}
                    >
                    </IconButton>
                    <IconButton
                        icon="music-note"
                        iconColor="black"
                        containerColor="white"
                        rippleColor="#aaaaaa"
                        size={50}
                        mode="contained"
                        onPress={showModal}
                    >
                    </IconButton>
                </View>

            )}
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
    songContainer: {
        width: '98%',
        left: 3,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    modalStyle: {
        height: '80%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentStyle: {
        backgroundColor: 'white',
        width: '80%',
        height: '80%',
        padding: 10,
        borderRadius: 5,
    }
});

export default Footer;
