import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Button, ImageBackground, TextInput, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function About({ route }) {

    const id = 1
    const [state, setState] = useState([]);
    const [d, setD] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        getData();
        route?.params?.messages && setState(route.params.messages);
    }, []);

    
    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('data')
        if(value !== null) {
            console.log(value);
        }
        } catch(e) {
            console.log('error');
        }
    }
  
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('data', 'work');
        } catch (e) {
          // saving error
        }
        await setD(!d)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.textHeader}>{route?.params?.nom && route.params.nom}</Text>
                    <Text style={{fontSize: 15, color: '#fff', marginHorizontal: 5}}>En ligne</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <View style={{marginRight: 25}}>
                        <FontAwesome5 name="video" size={24} color="#fff" />
                    </View>
                    <View style={{marginRight: 20}}>
                        <MaterialIcons name="call" size={24} color="#fff" />
                    </View>
                    <View>
                        <SimpleLineIcons name="options-vertical" size={24} color="#fff" />
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.png')} resizeMode='cover' style={styles.bg}>
                    <View style={{paddingHorizontal: 15, marginBottom: 75}}>
                        <FlatList
                            data={state}
                            renderItem={({ item }) => (
                                item.em === id ? (
                                    <View style={styles.sender}>
                                        <View style={{...styles.boxMsg, backgroundColor: '#befaad',}}>
                                            <Text style={styles.textMsg}>{item.msg}</Text>
                                            <Text style={styles.heure}>08:25 pm</Text>
                                        </View>
                                    </View>
                                ) : (
                                    <View style={styles.receiver}>
                                        <View style={{...styles.boxMsg, backgroundColor: '#fff',}}>
                                            <Text style={styles.textMsg}>{item.msg}</Text>
                                            <Text style={styles.heure}>08:25 pm</Text>
                                        </View>
                                    </View>
                                )
                            )}
                        />
                    </View>
                </ImageBackground>
                <View>
                    <TextInput 
                        style={styles.inputStyle}
                        multiline={true}
                        onChangeText={(value) => setText(value)}
                    />
                </View>
                <View style={styles.iconInput}>
                    {text.length > 0 ? (
                        <Ionicons name="send" size={30} color="#fff" />
                    ) : (
                        <MaterialIcons name="keyboard-voice" size={36} color="#fff" />
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        backgroundColor: '#41aa95',
    },
    textHeader: {
        color: '#fff',
        fontSize: 24,
        margin: 4
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 8,
    },
    bg: {
        width: '100%',
        height: '100%',
    },
    boxMsg: {
        backgroundColor: '#befaad',
        height: 50,
        width: '45%',
        padding: 4,
        borderRadius: 8,
        marginBottom: 10,
    },
    sender: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    receiver: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textMsg: {
        color: '#000',
        fontSize: 18,
    },
    heure: {
        fontSize: 12,
        textAlign: 'right',
        marginRight: 4,
    },
    inputStyle: {
        backgroundColor: '#fff',
        height: 60,
        width: '80%',
        position: 'absolute',
        bottom: 10,
        left: 15,
        borderRadius: 99,
        padding: 12,
        fontSize: 15,
        textAlignVertical: 'top',
    },
    iconInput: {
        width: 58,
        height: 58,
        backgroundColor: '#41aa95',
        borderRadius: 999,
        position: 'absolute',
        bottom: 10,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})