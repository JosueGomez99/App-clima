import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const Home = (props) => {
  const { route, navigation } = props;
  const { username } = route.params;

  const goToWeatherList = () => {
    navigation.navigate('WeatherList');
  };

  return (
    <ImageBackground
      source={require('../../assets/fondo.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Bienvenido: {username}</Text>
        <Text style={styles.description}>
          Aquí podrá visualizar el clima de la ciudad de Tegucigalpa, además de la temperatura
        </Text>
        <Button title="Ver Clima de la Semana" onPress={goToWeatherList} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heading: {
    fontSize: 36,
    marginBottom: 20,
    color: 'white',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
  },
});

export default Home;
