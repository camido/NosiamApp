
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Input, TextInput, ScrollView} from 'react-native';
import Form from './InscriptionForm';
//https://scottdomes.com/react-native-sexy-forms/
export default function InscriptionAsso({ navigation }) {
 
    const [value, onChangeText] = React.useState('');
    return (
    <ScrollView>
        <View style={styles.view}>
            <Text style={styles.titleText} > Demande d'inscription comme membre d'une association  </Text>
        </View>
      <Form
        fields={{
            nom: {
                label: "Nom",
                },
            email: {
                label: 'Email',
                inputProps: {
                keyboardType: 'email-address',
                },
            },
            telephone: {
                label: 'Téléphone',
                inputProps: {
                keyboardType: 'phone-pad',
                },
            },
            RNA: {
                label: "Numéro RNA de l'association",
            },
            pseudo: {
                label: "Nom d'utilisateur",
                inputProps: {
                secureTextEntry: true,
                },
            },
            password: {
                label: 'Mot de passe',
                inputProps: {
                secureTextEntry: true,
                },
            },
            confirmationPassword: {
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
        textAlign: 'center'
      }
});
     