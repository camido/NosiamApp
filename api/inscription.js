import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';

export default function inscription(nom, email, telephone, RNA, pseudo , password){
    const Utilisateur = Parse.Object.extend("utilisateurs");
    const utilisateur = new Utilisateur();
    
    utilisateur.set("nom", nom);
    utilisateur.set("email", email);
    utilisateur.set("tel", telephone);
    utilisateur.set("assoRNA", RNA)
    utilisateur.set("pseudo", pseudo);
    utilisateur.set("motDePasse", password);
    
    utilisateur.save()
    .then((user) => {
      // Success
      
    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
    });
}