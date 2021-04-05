import React, { useState, useEffect, } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // expo install expo-location
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);



  return (
    <View style={styles.container}>
     <MapView 
      style={styles.map}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker
          coordinate={{ latitude : location.coords.latitude , longitude : location.coords.longitude }}
        />
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