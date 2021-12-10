import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Contador} from './components/Contador'
import { List } from './components/List';
import {bootstrap} from 'react-bootstrap'


export default function App() {
  return (
    <View style={styles.container}>
       {/*<Contador/>*/} 
        <List/>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

