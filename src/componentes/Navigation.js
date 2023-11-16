import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import WeatherList from './WeatherList';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStack" component={Home} />
  </Stack.Navigator>
);

const WeatherListStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="WeatherListStack" component={WeatherList} />
  </Stack.Navigator>
);

const HomeTopTabs = ({ navigation }) => (
  <TopTab.Navigator>
    <TopTab.Screen 
      name="HomeTop" 
      component={HomeStack} 
      options={{
        tabBarLabel: 'Ver clima',
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('WeatherListStack');
        },
      })}
    />
  </TopTab.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Inicio" component={HomeTopTabs} />
        <BottomTab.Screen name="Ver clima" component={WeatherListStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
