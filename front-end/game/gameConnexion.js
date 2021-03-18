import React, {useEffect, useState} from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeConsumer } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import TicTacToe from './game';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

export default function gameConnexion ( {navigation} ) {
    const [code,setCode] = useState(null);
    const [mdp,setMdp] = useState(null);
    const [reset,setReset] = useState(false);
    const [error,setError] = useState('');
    useEffect( () => {
        const getMdp = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('code')
                return jsonValue != null ? 
                  setMdp(JSON.parse(jsonValue)) : 
                  null;
            } catch(e) {
                // error reading value
            }
        }
        getMdp()
        if(code !== null && mdp !== null && code !== undefined && mdp !== undefined)
            if( isEqual(code,mdp) )
                navigation.replace('Accueil');
            else
                {
                    setReset(true)
                    setError('wrong, retry')
                }
    }, [code]);
    
    const isEqual = (arr1,arr2) => {
        for(var i=0; i< arr1.length; i++){
            for(var j=0; j< arr1[i].length; j++){
                if(arr1[i][j] !== arr2[i][j])
                    return false;
            }
        }
        return true;
    }
    return(
        <View style={styles.container}>
            <TicTacToe setCode={setCode} reset={reset} setReset={setReset} action={'connexion'}/>
            <Text> {mdp} {error} </Text>
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