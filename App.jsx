import React, { Component, useState, useEffect } from 'react'
import { FlatList, Text, TextInput, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font';
import { globalStyles } from './styles/Globals';
import io from 'socket.io-client';
import Home from './screens/Home';

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
      <Home />
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
  btn: {
    width: 280,
    height: 60,
    backgroundColor: '#36c6ff',
    justifyContent: 'center',
    borderRadius: 50,
  },
})

