import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Parse from 'parse/react-native.js';
import EspaceUtilisateur from './front-end/EspaceUtilisateur'
import InscriptionAsso from './front-end/inscriptions/InscriptionAsso';
import EnAttente from './front-end/confirmations/enAttente';
import TicTacToe from './front-end/game/game';
import gameCodeCreation from './front-end/game/gameCodeCrea';
import gameConnexion from './front-end/game/gameConnexion';
import InscriptionLocataire from './front-end/inscriptions/InscriptionLocataire';
import Connexion from './front-end/Connexion';
import TestGeoloc from './front-end/TestGeoloc';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('7WMnEd25E7C56PfrDehwDUMq5xDglSBFqgGNubY9','qCWRa014GLI5oLPktX5j1Va5whSYWcoiwvB58QVt');
Parse.serverURL = 'https://parseapi.back4app.com/'

function HomeScreen(  { navigation }  ) {
  return (
    <View style={styles.container}>
      <Text>Welcome on Nosiam! </Text>
      <Text>This is your first time using the app. </Text>
      <Button 
        title='Je recherche un logement'
        type ="outline"
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate("Premier lancement")}
      />

      <Button
        title='Je propose un logement'
        type ="outline"
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate('Espace utilisateur', {
          type: 'Hôte'
        })}
      />

      <Button
        title='Je suis une association'
        type ="outline"
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate('Espace utilisateur', {
          type: 'Association'
        })}
      />

      <Button
        title='TestGeoloc'
        type ="outline"
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate('Geolocalisation', {
          type: 'Association'
        })}
      />
      <StatusBar style="auto" />
    </View>
  );
}
  
const Stack = createStackNavigator();

export default function App() {
 
  /*useEffect(() => {
    createInstallation = async () => {
      const  Installation = Parse.Object.extend(Parse.Installation);
      const  installation = new  Installation();

      installation.set('deviceType', Platform.OS);
      await  installation.save();
    };

    createInstallation();
  }, []);
*/
  const [newUser,setNewUser]= useState(true)
  useEffect(() => {
    const isNewUser = async () => {
      AsyncStorage.clear();
      try {
        const jsonValue = await AsyncStorage.getItem('code')
        console.log(jsonValue)
        return jsonValue != null ? 
          setNewUser(false): 
          setNewUser(true);
      } catch(e) {
        // error reading value
      }
    }
    isNewUser();
    console.log(newUser)
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { newUser === true ? (
          <>
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Geolocalisation" component={TestGeoloc} />
            <Stack.Screen name="Espace utilisateur" component={EspaceUtilisateur} />
            <Stack.Screen name="Premier lancement" component={gameCodeCreation} /> 
            <Stack.Screen name="Connexion" component={Connexion} />
            <Stack.Screen name="Inscription Locataire" component={InscriptionLocataire} />
            <Stack.Screen name="Inscription Association" component={InscriptionAsso} />
            <Stack.Screen name="Attente de confirmation" component={EnAttente} />
          </>
        ) : (
          <>
            <Stack.Screen name="Connexion code" component={gameConnexion} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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