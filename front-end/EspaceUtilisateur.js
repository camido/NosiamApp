import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from 'react-native-elements';


import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';


export default function EspaceUtilisateur({ navigation }) {
 
    return (
      <View style={styles.container}>

        <Button 
          title='Je recherche un logement'
          type ="outline"
          buttonStyle= {styles.Button}
          onPress={() => Alert.alert('Je recherche un logment')} 
        />

        <Button
          title='Je propose un logement'
          type ="outline"
          buttonStyle= {styles.Button}
          onPress={() => Alert.alert("Je propose un logment")}
        />

        <Button
          title='Je suis une association'
          type ="outline"
          buttonStyle= {styles.Button}
          onPress={() => Alert.alert("Je suis une association")}
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