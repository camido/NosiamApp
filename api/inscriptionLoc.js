import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';

export default function inscriptionLoc(prenom, nom, email, telephone, password){
    const User = Parse.Object.extend("Identifiants");
    const user = new User();
    user.set("email", email);
    user.set("motDePasse", password);
    user.set("type", "Locataires");
    user.save()
    .then((user) => {
        // Success
      const Loc = Parse.Object.extend("Locataires");
      const loc = new Loc();
      
      loc.set("prenom", prenom);
      loc.set("nom", nom);
      loc.set("email", email);
      loc.set("tel", telephone);
      loc.set("valider", false);
      
      loc.save()
      .then((user) => {
        // Success
        var bool = true;
        return bool;
      
        
      }, (error) => {
        // Save fails
        alert('Failed to create new object, with error code: ' + error.message);
      });
    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
    });

    
}