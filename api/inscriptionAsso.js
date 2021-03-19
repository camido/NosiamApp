import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';

export default function inscriptionAsso(prenom, nom, email, telephone, RNA, password){
    const Asso = Parse.Object.extend("Membres_assos");
    const asso = new Asso();
    
    asso.set("prenom", prenom);
    asso.set("nom", nom);
    asso.set("email", email);
    asso.set("tel", telephone);
    asso.set("assoRNA", RNA)
    
    asso.save()
    .then((assos) => {
      const Utilisateur = Parse.Object.extend("Identifiants");
      const user = new Utilisateur();
  
      user.set("email", email);
      user.set("motDePasse", password);
      user.set("type", "Membres_assos");
      user.save()

    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
    });
}