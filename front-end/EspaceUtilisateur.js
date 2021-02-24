import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';


export default function App() {
 
  
    return (
      <View style={styles.container}>
        <Text>Welcome on Nosiam!</Text>
        <Button style={styles.returnButton}
          title='Retour'
          onPress={() => Alert.alert('Page de connexion')} 
        />
        <Button
          title='Inscription'
          onPress={() => Alert.alert("Page d'inscription")}
        />
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
    title: {

    },
    returnButton: {
        position: fixed,
        top: 0,
        right: 0,
    },
    tenantButton: {

    },
    hostButton: {

    },
    associationButton: {

    },
  });