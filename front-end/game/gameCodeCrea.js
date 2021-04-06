import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TicTacToe from './game';

export default function gameCodeCreation( {navigation} )  {
    const [code,setCode] = useState(null);
    const handleSave = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('code', jsonValue)
          navigation.replace('Espace utilisateur', {
            type: 'Locataire'
          })
        }catch (e) {
          // saving error
        }
    }
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 20 , fontWeight: 'bold', margin:10, color:'rgb(68,156,153)'}}>Créer votre code </Text>
            <Text style={{ margin:10, textAlignVertical:'center', textAlign:'center' }}>Afin de proteger votre application nous vous demandons de créer un code secret qui prendra la forme d'un jeu de morpion afin de camoufler l'application. </Text>
            <Text style={{ marginTop:10, fontSize: 15, fontWeight:'bold', color:'red'}}>Attention:</Text>
            <Text style={{  marginBottom:10 }}>Il vous sera demandé à chaque ouverture.</Text>

            <TicTacToe handleSave={handleSave} setCode={setCode} action={'creation'}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:20
      },
});