import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from 'react-native-elements';


import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';


export default function EspaceUtilisateur({ route, navigation}) {
 
    const { type } = route.params
    var road = '';
    if(type == "Association" )
        road = "Inscription Association"
    if(type == "Hôte")
        road = "InscriptionHote"
    if(type == "Locataire")
        road = "InscriptionLocataire"

  return (
    <View style={styles.container}>
      <Text> Espace utilisateur : { type } </Text>
      <Button
        title='Connexion'
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate('Espace utilisateur')} 
      />
      <Button
        title='Inscription'
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate(road)}
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
    Button: {

        marginTop: 30,
        borderRadius: 8,
        width: 250,
  
    },
  });