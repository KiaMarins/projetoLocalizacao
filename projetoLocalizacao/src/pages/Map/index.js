import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  MapView  from "react-native-maps";

export default function Map(){
    const navigation = useNavigation();

    const Navegar = () => {
        navigation.navigate('Home');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Mapa</Text>

            <MapView style={styles.map}
                initialRegion={{
                    latitude:31.776685,
                    longitude:35.234491,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.05
                }}/>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao} onPress={Navegar}>Voltar</Text>
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
    map: {
        ...StyleSheet.absoluteFillObject
    }
});