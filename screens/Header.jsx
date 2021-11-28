import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>Hi Friends !</Text>
            <Text style={{fontSize: 15, fontFamily: 'poppins-regular', letterSpacing: 1}}>You are in <Text style={{color: '#fa2545'}}>54 KING PORTS</Text> </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 70,
      marginTop: 24, 
      padding: 14,
    },
    textHeader: {
      color: '#000',
      fontSize: 27,
      fontWeight: 'bold',
      opacity: .8,
      fontFamily: 'poppins-regular',
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
});