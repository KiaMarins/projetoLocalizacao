import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();

    const Navegar = () => {
        navigation.navigate('Map');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Localização e Mapas</Text>
            <Text style={styles.texto}>Endereço</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.texto}>Latitude:</Text>
            <Text style={styles.texto}>Longitude:</Text>
            <Text style={styles.texto}>Cidade:</Text>
            <Text style={styles.texto}>Estado:</Text>
            <Text style={styles.texto}>País:</Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao} onPress={Navegar}>Ver no mapa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Localização Atual</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    texto: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    botao: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    textoBotao: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});