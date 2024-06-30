import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';

export const CurrentWeather = ({ currentWeather }) => {
  const [weatherVideo, setWeatherVideo] = useState(null);
  const [status, setStatus] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    if (currentWeather) {
      const { weather_code, temperature_2m } = currentWeather;
      
      let video;
      if (
        [51, 52, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(
          weather_code
        )
      ) {
        video = require('../assets/images/rain.mp4');
      } else if ([71, 73, 75, 77, 85, 86].includes(weather_code)) {
        video = require('../assets/images/snowfall.mp4');
      } else if (temperature_2m < 5) {
        video = require('../assets/images/cold.mp4');
      } else if (temperature_2m > 35) {
        video = require('../assets/images/hot.mp4');
      } else {
        video = require('../assets/images/hello.mp4');
      }
      setWeatherVideo(video);
    }
  }, [currentWeather]);

  if (!currentWeather) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Current Weather</Text>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#333" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    );
  }

  const { time, weather_code, temperature_2m } = currentWeather;

  const weatherConditions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    52: 'Moderate drizzle',
    53: 'Heavy drizzle',
    55: 'Freezing drizzle',
    56: 'Light freezing drizzle',
    57: 'Heavy freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snowfall',
    73: 'Moderate snowfall',
    75: 'Heavy snowfall',
    77: 'Ice pellets',
    80: 'Rain shower',
    81: 'Moderate rain shower',
    82: 'Violent rain shower',
    85: 'Snow shower',
    86: 'Heavy snow shower',
    95: 'Thunderstorm',
    96: 'Thunderstorm Slight hail',
    99: 'Thunderstorm heavy hail',
  };

  const weatherCondition = weatherConditions[weather_code];

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.header}>Current Weather</Text>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.weatherInfo}>
          <Text style={styles.temperature}>{temperature_2m}°C</Text>
          <Text style={styles.condition}>{weatherCondition} </Text>
        </View>
      </View>
      <View style = {{alignItems : 'center'}}>
      <Video
        ref={videoRef}
        style={styles.image}
        source={weatherVideo}
        resizeMode="contain"
        isLooping={true}
        shouldPlay={true}
        isMuted={true}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  condition: {
    fontSize: 18,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
    marginLeft: 8,
  },
  image: {
    margin: 20,
    width: 250,
    height: 250,
  },
});