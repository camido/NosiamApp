import Parse from 'parse/react-native.js';
import { AsyncStorage } from  '@react-native-async-storage/async-storage';

const _storeData = async (key,object) => {
  try {
    await AsyncStorage.setItem(key, object);
  } catch (error) {
    // Error saving data
  }
};

export default async function connexionAPI(email, password){
    const Utilisateur = Parse.Object.extend("Identifiants");
    const query = new Parse.Query(Utilisateur);
    query.equalTo("email", email);
    query.equalTo("motDePasse", password);
    const result = await query.first().then( async (user) => {
    console.log(user.get("type"))
    const User = Parse.Object.extend(user.get("type"));
    const uti = new Parse.Query(User);
    uti.equalTo("email", email);
    const result2 = await uti.first().then( async (find) => {
      // save utilisateur in async storage to keep connection open
      _storeData("email", user.get("email") );
      _storeData("motDePasse", user.get("motDePasse") );
      _storeData("prenom", find.get("prenom") );
      _storeData("nom", find.get("nom") );
      console.log("success");
      });
    });
    
}