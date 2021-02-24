import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('7WMnEd25E7C56PfrDehwDUMq5xDglSBFqgGNubY9','qCWRa014GLI5oLPktX5j1Va5whSYWcoiwvB58QVt');
Parse.serverURL = 'https://parseapi.back4app.com/'

// CONNECTION TEST
/*
myFirstClass.set("name", "I'm able to save objects!");
myFirstClass.save()
.then((object) => {
  // Success
  alert('New object created with objectId: ' + object.id);
}, (error) => {
  // Save fails
  alert('Failed to create new object, with error code: ' + error.message);
});
*/


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
    <View style={styles.container}>
      <Text>Welcome on Nosiam!</Text>
      <Button
        title='Inscription'
        onPress={() => Alert.alert("Page d'inscription")}
      />
      <StatusBar style="auto" />
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
