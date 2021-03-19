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
            <Text style={{ fontSize: 20 , fontWeight: 'bold', margin:10}}> Creer votre code </Text>
            <Text style={{ margin:20 }}> Afin de proteger votre application </Text>
            <TicTacToe handleSave={handleSave} setCode={setCode} action={'creation'}/>
            
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