import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../../assets/fondo.jpg'; // Reemplaza 'path-to-your-image.jpg' con la ruta de tu imagen


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
  
    const handleLogin = () => {
      if (username === 'Admin' && password === 'Admin123') {
        navigation.navigate('Home', { username: username });
      } else {
        alert('El correo o contraseña no coincide');
      }
    };
  
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.label}>Usuario:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Nombre de usuario"
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
          />
          <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
      </ImageBackground>
    );
  };
  

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', 
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    label: {
      fontSize: 24,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 5,
      paddingLeft: 10,
    },
  });
  

export default Login;
