import React, { useEffect, useState} from 'react'; 
import {Text, View,TextInput, TouchableOpacity } from 'react-native'; 
import * as Location from "expo-location";

export const Searchbylocation = ({updatelatlong}) => {
  const[lat,setlat] = useState();
  const[long,setlong] = useState();
      useEffect(()=> {
          const getLocation = async () => {
              try {
                let { status } = await Location.requestForegroundPermissionsAsync();
          
                if (status !== "granted") {
                  setLocationError("Location permission denied");
                  return;
                }
          
                let location = await Location.getCurrentPositionAsync({});
                setlat(location.coords.latitude);
                setlong(location.coords.longitude);
              } catch (error) {
                console.error("Error requesting location permission:", error);
              }
            };
            getLocation ();
      },[]);
      useEffect(() => {
        updatelatlong(lat,long);
    },[lat,long]);

} 