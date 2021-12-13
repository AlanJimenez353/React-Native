import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {bootstrap} from 'react-bootstrap'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './src/components/Navigator';
import { List } from './src/components/List';

export default function App() {

  
  return (

<List/>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

