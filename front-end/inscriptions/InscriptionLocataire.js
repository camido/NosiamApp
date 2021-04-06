
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Input, TextInput, ScrollView} from 'react-native';
import Form from '../forms/Form';
import {validateContent, validateLength, validateTel, validatePassword} from '../forms/Validations';
import inscriptionLoc from '../../api/inscriptionLoc'

//https://scottdomes.com/react-native-sexy-forms/
export default function InscriptionLocataire({ navigation }) {
    const HandleSubmit = () => {
        console.log("réussie")
        navigation.replace("Merci de votre inscription!")
    };
    return (
    <ScrollView style={styles.scroll}>
        <View style={styles.view}>
            <Text style={styles.titleText} > Inscription pour demande de logement </Text>
        </View>
      <Form
        action={inscriptionLoc}
        buttonText="Valider"
        afterSubmit={HandleSubmit}
        fields={{
            nom: {
                label: "Prénom",
                validators: [validateContent]
                },
            prenom: {
                label: "Nom",
                validators: [validateContent]
                },
            email: {
                label: 'Email',
                validators: [validateContent],
                inputProps: {
                keyboardType: 'email-address',
                },
            },
            telephone: {
                label: 'Téléphone',
                validators: [validateContent, validateTel],
                inputProps: {
                keyboardType: 'phone-pad',
                },
            },
            password: {
                label: 'Mot de passe',
                validators: [validateContent, validatePassword],
                inputProps: {
                secureTextEntry: true,
                },
            },
            confirmationPassword: {
                validators: [validateContent, validatePassword],
                label: 'Confirmation du mot de passe',
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
     