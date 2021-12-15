import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Modal, Alert } from 'react-native';
import {bootstrap} from 'react-bootstrap'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './src/components/Navigator';
import { List } from './src/components/List';
import Home from './src/components/screens/Home';

export default function App() {

  //Carga de fuentes
  const [loaded]=useFonts({
    OpenSansBold:require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansLight:require('./assets/fonts/OpenSans-Light.ttf'),
  });

  if(!loaded) return <AppLoading/>


  return (
    <List/>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

