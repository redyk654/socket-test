import React, { Component, useState, useEffect } from 'react'
import { FlatList, Text, TextInput, View, Image, StyleSheet, Button } from 'react-native'
import * as Font from 'expo-font';
import { globalStyles } from './styles/Globals';
import io from 'socket.io-client';

export default function App() {

  const getFonts = () => Font.loadAsync({
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-black': require('./assets/fonts/Poppins-Black.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  })
  useEffect(() => {
    getFonts();
  }, []);  
  
  return (
    <View style={globalStyles.container}>
      <View style={{alignItems: 'center',}}>
        <Image
          style={styles.topImg}
          source={require("./assets/top.png")}
        />
      </View>
      <View style={styles.boxImg}>
        <Image
          style={styles.img1}
          source={require('./assets/ee.jpg')}
        />
        <Image
        style={{...styles.img1, position: 'absolute', right: 55, top: 75}}
          source={require('./assets/rr.jpg')}
        />  
      </View>
      <View style={styles.boxText}>
        <Text 
          style={{textAlign: 'center', fontWeight: 'bold', fontSize: 28, fontFamily: 'poppins-light', opacity: .7}}>
          Login Now
        </Text>
        <Text style={{fontFamily: 'poppins-light', textAlign: 'center', marginTop: 8}}>
          Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Modi esse consectetur temporibus rem.
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="User name"
        />
        <TextInput
          style={styles.input}
          placeholder="Number phone"
          keyboardType='numeric'
        />
      </View>
      <View>
        <Text style={{textAlign: 'right', color: '#ccc', width: 320}}>forgot your password ?</Text>
      </View>
      <View style={{marginVertical: 25}}>
        <Button
          title='login'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxText: {
    paddingVertical: 15,
  },
  topImg: {
    width: 50,
    height: 50,
  },
  img1: {
    width: 120,
    height: 200,
    borderRadius: 50,
  },
  boxImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingRight: 80,
    position: 'relative',
  },
  input: {
    width: 300,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    opacity: .7,
    paddingHorizontal: 15,
    marginVertical: 8,
  },
})

