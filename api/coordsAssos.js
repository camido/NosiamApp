import { AsyncStorage  } from 'react-native';
import Parse from 'parse/react-native.js';

import Geocoder from 'react-native-geocoding';
/*
// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyAUYHwc0--XuGxmC_HTTfsgHsVEPmXGPBE", {language : "fr"});

var location = null;
Geocoder.from("116 rue de chatou")
		.then(json => {
			location = json.results[0].geometry.location;
			console.log(location);
		})
		.catch(error => console.warn(error));

export default location;
*/
/*
export default function getAssosCoords(){
    const Asso = Parse.Object.extend("Associations");
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
}*/