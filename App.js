import React, { useEffect, useState } from 'react'; 
import {Text, View,TextInput, TouchableOpacity } from 'react-native'; 
import * as Location from "expo-location";

export const App = ()=> { 
    const[location,setlocation] = useState(null);
    const[lat,setlat] = useState();
    const[long,setlong] = useState();
    const[slat,setslat] = useState();
    const[slong,setslong] = useState();
    console.log(location);
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

	return ( 
		<View style={{flex:1,backgroundColor:'#adf7f7',paddingTop:30 }}> 
         <TextInput
           onChangeText={setlocation}
           placeholder ="Search Location"
           caretHidden={true}
           style={{backgroundColor :'#ffffff',fontSize:34,margin:5,borderRadius: 25,textAlign : 'center'}}
        />
       {/* <TouchableOpacity onPress = {getLocation}>
       <Text style={{fontSize:40,textAlign : 'center',borderRadius: 25}}>CLEAR</Text>
       </TouchableOpacity> */}
		</View> 
	); 
} ;
