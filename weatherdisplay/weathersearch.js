import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,ScrollView } from 'react-native';

export const Weatherresult = ({setdatareseved}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=28.6055&longitude=76.6538&current=temperature_2m,rain,snowfall,weather_code&daily=temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,weather_code&timezone=auto&forecast_days=14')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    setdatareseved (data);
},[data]);
};