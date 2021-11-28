import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Banner() {
    return (
        <View style={styles.boxBanner}>
            <View>
                <View style={{...styles.item, backgroundColor: '#f5fffb'}}>
                    <MaterialCommunityIcons name="food-drumstick" size={30} color="#2f9c70" />
                </View>
                <View>
                    <Text style={styles.textTitle}>CHICKEN</Text>
                </View>
            </View>
            <View>
                <View style={{...styles.item, backgroundColor: '#fff7f8'}}>
                    <MaterialCommunityIcons name="food-apple" size={30} color="#ff6b81" />
                </View>
                <View>
                    <Text style={styles.textTitle}>FRUIT</Text>
                </View>
            </View>
            <View>
                <View style={{...styles.item, backgroundColor: '#fffaf2'}}>
                    <MaterialCommunityIcons name="food-croissant" size={30} color="#fcba5d" />
                </View>
                <View>
                    <Text style={styles.textTitle}>MEAT</Text>
                </View>
            </View>
            <View>
                <View style={{...styles.item, backgroundColor: '#f8f2ff'}}>
                    <Ionicons name="fast-food" size={30} color="#b885ff" />
                </View>
                <View>
                    <Text style={styles.textTitle}>BURGER</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        fontWeight: 'bold',
        opacity: .7,
        color: '#000',
        textAlign: 'center',
    },
    boxBanner: {
        justifyContent: 'space-around',
        flexDirection : 'row',
        marginTop: 42,
    },
    item: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 55,
        borderRadius: 20,
        marginBottom: 8,
    },
})
