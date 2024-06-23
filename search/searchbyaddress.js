import React, { useEffect, useState } from 'react'; 
import { Text, View, TextInput, TouchableOpacity } from 'react-native'; 
import axios from 'axios';

export const Searchbyadd = ({ restart }) => {
    const [location, setLocation] = useState('');
    const [bollelocation, setBollelocation] = useState(false);
    const [slat, setSlat] = useState();
    const [slong, setSlong] = useState();
    const handleBollelocationToggle = () => {
        setBollelocation(!bollelocation);
    };

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(`https://geocode.maps.co/search?q=${location}&api_key=66728529ca425935316814gnrf6da3e`);
                const data = await response.json();
                if (data.length > 0) {
                    const firstResult = data[0];
                    setSlat(firstResult.lat);
                    setSlong(firstResult.lon);
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (bollelocation) {
            fetchCoordinates();
            handleBollelocationToggle();
        }
    }, [bollelocation]);

    return (
        <View style={{ backgroundColor: '#adf7f7' }}>
            <TextInput
                autoFocus={true}
                onChangeText={text => setLocation(text)}
                placeholder="Search Location"
                caretHidden={true}
                onSubmitEditing={handleBollelocationToggle}
                style={{ backgroundColor: '#ffffff', fontSize: 34, margin: 5, borderRadius: 25, textAlign: 'center' }}
            />
                <View>
                    <Text>Latitude: {slat}</Text>
                    <Text>Longitude: {slong}</Text>
                </View>
        </View>
    );
};
