/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react';
import { useRoute } from '@react-navigation/native';

import {Text, StyleSheet} from 'react-native';

export default function Produtor(){
    const route = useRoute();
    console.log(route.params)

    return <Text>Produtor</Text>
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    },
});
