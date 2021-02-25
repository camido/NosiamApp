
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Input, TextInput, ScrollView} from 'react-native';
import Form from '../forms/InscriptionForm';
import {validateContent, validateLength, validateTel, validatePassword} from '../forms/Validations';
import inscription from '../../api/inscription'
//https://scottdomes.com/react-native-sexy-forms/
export default function InscriptionAsso({ navigation }) {
    const HandleSubmit = () => {
        navigation.navigate("Attente de confirmation")
    };
    return (
    <ScrollView style={styles.scroll}>
        <View style={styles.view}>
            <Text style={styles.titleText} > Demande d'inscription comme membre d'une association  </Text>
        </View>
      <Form
        action={inscription}
        buttonText="Envoyer la demande"
        afterSubmit={HandleSubmit}
        fields={{
            nom: {
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
            RNA: {
                validators: [validateContent],
                label: "Numéro RNA de l'association",
            },
            pseudo: {
                label: "Nom d'utilisateur",
                validators: [validateContent, validateLength],
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
     