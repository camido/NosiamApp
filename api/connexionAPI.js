import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';

export default async function inscriptionAsso (email, password){
    const Utilisateur = Parse.Object.extend("Identifiants");
    const query = new Parse.Query(Utilisateur);
    query.equalTo("email", email);
    query.equalTo("motDePasse", password);
    query.include("type");
    const result = await query.first().then(async function(result) {
        const User = Parse.Object.extend(result.get("type"));
        const uti = new Parse.Query(User);
        uti.equalTo("email", email);
        uti.include("nom");
        const result2 = await uti.first().then((find) => {
             // save utilisateur in async storage to keep connection open
            console.log("sucess connection")
        })
      }, (error) => {
        // Save fails
        alert('Failed to get the object, with error code: ' + error.message);
      });
}