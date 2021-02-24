import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';


export default function InscriptionForm({ navigation }) {
 
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View style={styles.container}>
      <Text>Welcome on Nosiam!</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
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
