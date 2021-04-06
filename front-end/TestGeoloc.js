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

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({accuracy : Location.Accuracy.BestForNavigation});
      setLocation(location);

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
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
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