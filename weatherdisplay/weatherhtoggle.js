import React, { useEffect, useState } from 'react'; 
import {Text, View,TextInput, TouchableOpacity } from 'react-native';
import {Weatherresult} from './weathersearch'
import {CurrentWeather} from './weathercurrent'

export const Weathertoggle = () => {
   const [toggle,settongel] = useState (true);
   const [data,setdata] = useState ({});
   const [current,setcurrent] = useState ();
   const [daily,setdaily] =useState ();
   const settocurrent = () => {
     settongel(true);
   };
   const setto14days = () => {
    settongel(false);
  };
  const updatedata = (propse) => {
    setdata(propse);
  };
  useEffect(() => {
    setcurrent(data.current);
    setdaily(data.daily);
},[data]);
   return(
    <View style={{flex:1,backgroundColor:'#adf7f7',paddingTop:30}}>
        <View style={{flexDirection : 'row'}}>
        <TouchableOpacity  onPress = {settocurrent}> 
            <Text style={{fontSize:30,textAlign : 'center',borderRadius: 25,backgroundColor : "#D6BEEF",height :50,width:150,margin :15}}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = {setto14days}> 
            <Text style={{fontSize:30,textAlign : 'center',borderRadius: 25,backgroundColor : "#D6BEEF",height :50,width:150,margin :15}}>14 Days</Text>
        </TouchableOpacity>
        </View>
      <Weatherresult setdatareseved = {updatedata}/>
       <CurrentWeather currentWeather={current} />
    </View>
   );
};