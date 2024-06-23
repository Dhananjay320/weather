import React, { useEffect, useState } from 'react'; 
import {Text, View,TextInput, TouchableOpacity } from 'react-native';
import {Searchbyadd} from './search/searchbyaddress.js'
import { Searchbylocation } from './search/searchbylocation .js';

export const App = ()=> { 
    const [search,setsearch] = useState(false);
    const handelseaarchtongal = () =>
      {
        setsearch(!search);
      };
	return ( 
		<View style={{flex:1,backgroundColor:'#adf7f7',paddingTop:30}}> 
       {search && <Searchbyadd
         restart = {handelseaarchtongal}
       />}
       { !search &&
       <TouchableOpacity onPress = {handelseaarchtongal}>
       <Text style={{fontSize:40,textAlign : 'center',borderRadius: 25,backgroundColor : "#D6BEEF",margin :15}}>Search</Text>
       </TouchableOpacity>}
       <Searchbylocation/>
		</View> 
	); 
} ;
