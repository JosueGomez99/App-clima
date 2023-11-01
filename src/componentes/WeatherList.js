import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";

const background = require("../../assets/fondo.jpg");

const WeatherList = (props) => {
  const [dailyWeatherData, setDailyWeatherData] = useState([]);
  const API_KEY = "2d07fd4ca456de53bb156c6d2d8aaeac";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Tegucigalpa&appid=${API_KEY}&units=metric&lang=es`
      )
      .then((response) => {
        const filteredData = response.data.list.reduce((acc, currentItem) => {
          const date = new Date(currentItem.dt * 1000).toLocaleDateString(
            "es-ES",
            {
              weekday: "long",
            }
          );
          const temperature = currentItem.main.temp;

          if (!acc.find((item) => item.day === date)) {
            acc.push({
              day: date,
              weather: currentItem.weather[0].description,
              temperature,
            });
          }

          return acc;
        }, []);

        setDailyWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Error al obtener datos del clima:", error);
      });
  }, []);

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Pronóstico del Clima de la Semana</Text>
        <Text style={styles.location}>Tegucigalpa,Honduras</Text>
        <FlatList
          data={dailyWeatherData}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <View style={styles.dayContainer}>
              <Text style={styles.day}>{item.day}:</Text>
              <View style={styles.weatherInfo}>
                <Text style={styles.weather}>{item.weather}</Text>
                <Text
                  style={styles.temperature}
                >{`${item.temperature}°C`}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
    backgroundColor: "green",
  },
  dayContainer: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  day: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  weatherInfo: {
    marginTop: 10,
  },
  weather: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  temperature: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  location: {
    fontSize: 20,
    marginBottom: 30,
    color: "white",
    backgroundColor: "green",
    textAlign: "center",
  },
});

export default WeatherList;
