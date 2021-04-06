import React, { useState, useEffect, } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // expo install expo-location
import { StyleSheet, View, Dimensions } from 'react-native';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude : 0, //location.coords.latitude
    longitude : 0, //location.coords.longitude
    latitudeDelta : 0.0922,
    longitudeDelta : 0.0421,
  });
  const markers =  [{
    title : "Le Foyer d'Olympe",
    coordinates : {
      latitude : 48.539927,
      longitude : 2.6608169
    },
    description : "Téléphone : 07 77 85 82 xx"
  },{
    title : "Autre exemple association",
    coordinates : {
      latitude : 48.91111775813732,
      longitude : 2.227310490148633
    },
    description : "Téléphone : 07 77 85 82 xx"
  },{
    title : "Exemple association",
    coordinates : {
      latitude : 48.92034949875574,
      longitude : 2.2697091719877704
    },
    description : "Téléphone : 08 67 85 xx xx"
  },
  {
    title : "Exemple association",
    coordinates : {
      latitude : 48.944008529374784,
      longitude : 2.2435930984674446
    },
    description : "Téléphone : 06 78 85 xx xx"
  }]
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({accuracy : Location.Accuracy.BestForNavigation});
      setLocation(location);
      console.log("location : " + location);
      let changeRegion= {
        latitude : location.coords.latitude, //location.coords.latitude
        longitude : location.coords.longitude, //location.coords.longitude
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421,
      };
      setRegion(changeRegion);
    })();
  }, []);

  return (
    <View style={styles.container}>
     <MapView style={styles.map} 
        region={region}
        showsUserLocation={true}>
          {markers.map( (marker,index) => (
            <MapView.Marker 
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
      </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

//Doc : https://github.com/react-native-maps/react-native-maps/blob/master/README.md
//      https://docs.expo.io/versions/latest/sdk/location/#arguments-1