import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'react-native-elements';
//npm i react-native-svg-icon --save

//Icon droits
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default function InscriptionConfirmation({navigation}) {

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/time.png')}
        style={{ width: 50, height: 50}}
     />
      <Text style={styles.titleText}> Vous êtes bien inscrit ! </Text>
      <Text style={styles.text}> Connectez-vous pour demander un logement. </Text>
      <Button
        title="Accueil"
        buttonStyle= {styles.Button}
        onPress={() => navigation.replace('Espace utilisateur', {
          type: 'Locataire'
        })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'center',
      },
      text: {
        padding: 10,
        textAlign: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Button: {

        marginTop: 30,
        borderRadius: 8,
        width: 250,
  
    },
});