import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable} from 'react-native';
import Button from './Button';

export default function ProductCard({ name, foto, preco }) {
    const [modalVisible, setModalVisible] = useState(false);

    const comprar = () => {
        setModalVisible(true);
    }

    return (
        <View style={styles.card}>
            <View  style={styles.conteudo}>
                <Image source={foto} style={styles.foto} />
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.preco}>{preco}</Text>
                </View>
            </View>
            <View style={styles.viewbutton}>
                <Button labelButton='Comprar' onpress={comprar}/>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Você comprou {name}!</Text>
                        <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'collum',
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        margin: 15,
        padding: 8,
        backgroundColor: '#6b71b0',
        borderRadius: 12,
        elevation: 5,
        shadowColor: '#000000',
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 15,
        borderWidth: 0.5,
    },
    info: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff'
    },
    preco: {
        color: '#70ed56',
        fontSize: 20,
        textAlign: 'center',
    },
    viewbutton: {
        width: '100%',
    },
    conteudo: {
        flexDirection: 'row',
         width: '100%',
        justifyContent: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
});