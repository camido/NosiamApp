
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Input, TextInput, ScrollView} from 'react-native';
import Form from './forms/Form';
import connexionAPI from './../api/connexionAPI'

//https://scottdomes.com/react-native-sexy-forms/
export default function Connexion({ navigation }) {
    const HandleSubmit = () => {
        console.log("after submit")
        navigation.replace("Demander un logement")
    };
    return (
    <ScrollView style={styles.scroll}>
        <View style={styles.view}>
            <Text style={styles.titleText} > Page de connexion </Text>
        </View>
      <Form
        action={connexionAPI}
        buttonText="Connexion"
        afterSubmit={HandleSubmit}
        fields={{
            email: {
                label: 'Email',
                inputProps: {
                keyboardType: 'email-address',
                },
            },
            password: {
                label: 'Mot de passe',
                inputProps: {
                secureTextEntry: true,
                },
            },
        }}
      />
    </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
      },
    view : {
        margin: 40,
        textAlign: 'center',
      },
    scroll : {
        paddingBottom: 40
      }
});
     