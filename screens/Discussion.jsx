import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Discussion({ item }) {
    return (
        <View style={styles.item}>
            <View>                            
                <Image
                    source={require(`../assets/pp.jpg`)}
                    style={{width: 50, height: 50}}
                />
            </View>
            <View style={styles.itemInfos}>
                <View>
                    <Text style={styles.itemNom}>{item.nom}</Text>
                    <Text style={styles.itemMsg}>{item.msgs[item.msgs.length - 1].msg}</Text>
                </View>
                <View>
                    <Text style={{color: '#03b937'}}>{item.heure}</Text>
                    <View style={styles.notif}>
                        <Text style={styles.itemNotif}>2</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 25,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    itemInfos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemNotif: {
        color: '#fff',
        fontWeight: 'bold'
    },
    itemNom: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 7,
        marginBottom: 2,
    },
    itemMsg: {
        marginLeft: 7,
    },
    notif: {
        width: 19,
        height: 20,
        backgroundColor: '#03b937',
        borderRadius: 999,
        textAlign: 'center',
        paddingHorizontal: 5
    },
})
