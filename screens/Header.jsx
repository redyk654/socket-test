import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.textHeader}>WhatsApp Woo</Text>
            </View>
            <View style={styles.iconsContainer}>
                <View style={{marginRight: 20}}>
                    <Feather name="search" size={24} color="#fff" />
                </View>
                <View>
                    <SimpleLineIcons name="options-vertical" size={24} color="#fff" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#41aa95',
      height: 70,
      marginTop: 24,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textHeader: {
      color: '#fff',
      fontSize: 27,
      fontWeight: 'bold'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
})