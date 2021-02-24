import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';
import InscriptionAsso from './front-end/InscriptionAsso';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('7WMnEd25E7C56PfrDehwDUMq5xDglSBFqgGNubY9','qCWRa014GLI5oLPktX5j1Va5whSYWcoiwvB58QVt');
Parse.serverURL = 'https://parseapi.back4app.com/'

function HomeScreen(  { navigation }  ) {
  return (
    <View style={styles.container}>
      <Text>Welcome on Nosiam!</Text>
      <Button
        title='Connexion'
        onPress={() => Alert.alert('Page de connexion')} 
      />
      <Button
        title='Inscription'
        onPress={() => navigation.navigate('Inscription')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
 
  useEffect(() => {
    createInstallation = async () => {
      const  Installation = Parse.Object.extend(Parse.Installation);
      const  installation = new  Installation();

      installation.set('deviceType', Platform.OS);
      await  installation.save();
    };

    createInstallation();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inscription" component={InscriptionAsso} />
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
});