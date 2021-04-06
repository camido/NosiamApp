import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Alert, Image} from 'react-native';
import { Button } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Parse from 'parse/react-native.js';
import EspaceUtilisateur from './front-end/EspaceUtilisateur'
import InscriptionAsso from './front-end/inscriptions/InscriptionAsso';
import EnAttente from './front-end/confirmations/enAttente';
import InscriptionConfirmation from './front-end/confirmations/inscriptionConf';
import DemanderLogement from './front-end/confirmations/demandeLogement';
import TicTacToe from './front-end/game/game';
import gameCodeCreation from './front-end/game/gameCodeCrea';
import gameConnexion from './front-end/game/gameConnexion';
import InscriptionLocataire from './front-end/inscriptions/InscriptionLocataire';
import Connexion from './front-end/Connexion';
import Geolocalisation from './front-end/Geolocalisation';
import { Dimensions } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: "rgb(68,156,153)",
  },
  Button: {
    titleStyle: {
      color: 'white',
    }
  }
}
//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('7WMnEd25E7C56PfrDehwDUMq5xDglSBFqgGNubY9','qCWRa014GLI5oLPktX5j1Va5whSYWcoiwvB58QVt');
Parse.serverURL = 'https://parseapi.back4app.com/'

function HomeScreen(  { navigation }  ) {
  return (
    <View style={styles.container}>
      <Text>Veuillez choisir une option : </Text>
      <Button 
        title='Je recherche un logement'
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate("Créer votre code")}
      />

      <Button
        title='Je propose un logement'
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate('Espace utilisateur', {
          type: 'Hôte'
        })}
      />

      <Button
        title='Je suis une association'
        buttonStyle= {styles.Button}
        onPress={() => navigation.navigate('Espace utilisateur', {
          type: 'Association'
        })}
      />
      <StatusBar style="auto" />
    </View>
  );
}
  
function Presentation(  { navigation }  ) {
  return (
    <View style={{ flexDirection:'column', alignItems:'center', flex: 1}}>
      <View style={{marginBottom: Dimensions.get('window').height/15, marginTop: Dimensions.get('window').height/6}}>
        <Image 
          source={require('./assets/logo.png')}
          style={{ width:Dimensions.get('window').width/3, height:  Dimensions.get('window').height/5}}
        />
      </View>
      <View >
        <Text style={{fontWeight:'bold', fontSize:20, textAlignVertical: "center",textAlign: "center"}}>Bienvenue </Text>
        <Text style={{textAlignVertical: "center",textAlign: "center"}}>EmPleh est une application qui permet de trouver rapidement un logement temporaire pour les femmes victimes de toutes sortes de violences. </Text>
      </View>
      <View>
        <Button  
          style={{marginTop:15, width:Dimensions.get('window').width/3}} 
          title='Commencer' 
          color="rgb(68,156,153)"
          onPress={() => navigation.replace("Accueil")}
        />
      </View>
      <View style={{marginTop: Dimensions.get('window').height/10}}>
      <Text style={{marginBottom: 10,fontWeight:'bold', fontSize:10, textAlignVertical: "center",textAlign: "center"}}> Partenaires: </Text>
        <Image 
          source={require('./assets/partenaire.jpg')}
          style={{ width:Dimensions.get('window').width/2.7, height:  Dimensions.get('window').height/12}}
        />
      </View>
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
      //AsyncStorage.clear();
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
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        
        { newUser === true ? (
          <>
            <Stack.Screen name="Bienvenue" component={Presentation} />
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Espace utilisateur" component={EspaceUtilisateur} />
            <Stack.Screen name="Créer votre code" component={gameCodeCreation} /> 
            <Stack.Screen name="Connexion" component={Connexion} />
            <Stack.Screen name="Inscription Locataire" component={InscriptionLocataire} />
            <Stack.Screen name="Inscription Association" component={InscriptionAsso} />
            <Stack.Screen name="Merci de votre inscription!" component={InscriptionConfirmation} />
            <Stack.Screen name="Attente de confirmation" component={EnAttente} />
            <Stack.Screen name="Demander un logement" component={DemanderLogement} />
            <Stack.Screen name="Associations autour de vous" component={Geolocalisation} />
          </>
        ) : (
          <>
            <Stack.Screen name="Connexion code" component={gameConnexion} />
            <Stack.Screen name="Demander un logement" component={DemanderLogement} />
            <Stack.Screen name="Associations autour de vous" component={Geolocalisation} />
          </>
        )}
       
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
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