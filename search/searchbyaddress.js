import React, { useEffect, useState } from 'react'; 
import { Text, View, TextInput, TouchableOpacity } from 'react-native'; 

export const Searchbyadd = ({ restart,updatelatlong }) => {
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
                const response = await fetch(`your api key`);
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
    useEffect(() => {
        updatelatlong(slat,slong);
    },[slat,slong]);
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
        </View>
    );
};
