import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,ScrollView } from 'react-native';

export const Weatherresult = ({setdatareseved ,lat ,long}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if(lat&&long)
      {
    fetch(`your api key`)
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
