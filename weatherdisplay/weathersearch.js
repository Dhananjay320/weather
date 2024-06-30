import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,ScrollView } from 'react-native';

export const Weatherresult = ({setdatareseved ,lat ,long}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if(lat&&long)
      {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,rain,snowfall,weather_code&daily=temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,weather_code&timezone=auto&forecast_days=14`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
    }
  }, [lat,long]);
  useEffect(() => {
    setdatareseved (data);
},[data]);
};