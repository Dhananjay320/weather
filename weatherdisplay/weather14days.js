import React from 'react';
import { View, Text, FlatList, StyleSheet,ActivityIndicator } from 'react-native';

const weatherCodeDescriptions = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog and depositing rime fog',
  48: 'Fog and depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm with slight or moderate',
  96: 'Thunderstorm with slight and heavy hail',
  99: 'Thunderstorm with slight and heavy hail',
};

export const DailyWeatherForecast = ({ dailyData }) => {
    if (!dailyData) {
        return (
          <View style={styles.loading.container}>
            <Text style={styles.loading.header}>14-Day Weather Forecast</Text>
            <View style={styles.loading.loadingContainer}>
              <ActivityIndicator size="large" color="#333" />
              <Text style={styles.loading.loadingText}>Loading...</Text>
            </View>
          </View>
        );
      }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>14-Day Weather Forecast</Text>
      <FlatList
        data={dailyData.time}
        renderItem={({ item, index }) => (
          <View style={styles.dayContainer}>
            <Text style={styles.date}>{item}</Text>
            <View style={styles.weatherDetails}>
              <Text style={styles.weatherLabel}>Max Temp:</Text>
              <Text style={styles.weatherValue}>{dailyData.temperature_2m_max[index]}°C</Text>
            </View>
            <View style={styles.weatherDetails}>
              <Text style={styles.weatherLabel}>Min Temp:</Text>
              <Text style={styles.weatherValue}>{dailyData.temperature_2m_min[index]}°C</Text>
            </View>
            <View style={styles.weatherDetails}>
              <Text style={styles.weatherLabel}>Weather:</Text>
              <Text style={styles.weatherValue} numberOfLines={2} ellipsizeMode="tail">{weatherCodeDescriptions[dailyData.weather_code[index]]}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  dayContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#666',
  },
  weatherDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  weatherLabel: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  weatherValue: {
    fontSize: 16,
    color: '#333',
    maxWidth: '80%'
  },
  loading :{
    loadingText: {
        fontSize: 18,
        color: '#666',
        marginLeft: 8,
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
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
      }
  }
});