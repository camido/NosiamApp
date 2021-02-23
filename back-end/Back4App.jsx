import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("7WMnEd25E7C56PfrDehwDUMq5xDglSBFqgGNubY9","qCWRa014GLI5oLPktX5j1Va5whSYWcoiwvB58QVt");
Parse.serverURL = 'https://parseapi.back4app.com/'

const MyFirstClass = Parse.Object.extend("MyFirstClass");
const myFirstClass = new MyFirstClass();

myFirstClass.set("name", "I'm able to save objects!");
myFirstClass.save()
.then((object) => {
  // Success
  alert('New object created with objectId: ' + object.id);
}, (error) => {
  // Save fails
  alert('Failed to create new object, with error code: ' + error.message);
});