import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import  Image  from 'react-native-paper';
import { MyText } from '../Text';

const icon = require('../../../assets/foto1.jpeg') 

export default function MyMap() {
  const [currentRegion, setCurrentRegion] = useState();

  useEffect(() => {
    async function loadInicialPosicao() {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }
    loadInicialPosicao();
  }, []);

  if (!currentRegion) {
    return null;
  }
  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker
        coordinate={{ latitude: -22.3289895, longitude: -47.3827215 }}
      >
        {/* <Image style={styles.avatar} source={{uri: icon}}/> */}
        <Callout>
          <View>
            <MyText>
              Warnner Gostosão
            </MyText>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "grey",
  }
});
