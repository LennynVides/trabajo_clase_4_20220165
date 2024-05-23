import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import PokemonList from '../screens/PokemonList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';
import ItemListScreen from '../screens/ItemListScreen'; // Importa la nueva pantalla

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarActiveTintColor: '#FFC300',
          headerStyle: {
            backgroundColor: '#FFC300',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonAxios"
        component={PokemonAxios}
        options={{
          title: 'Lista Pokemon con Axios',
          tabBarActiveTintColor: '#cc0000',
          headerStyle: {
            backgroundColor: '#cc0000',
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 35,
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          title: 'Lista Pokemon Fetch',
          tabBarActiveTintColor: '#3b4cca',
          headerStyle: {
            backgroundColor: '#3b4cca',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ItemListScreen"
        component={ItemListScreen}
        options={{
          title: 'Lista de Items',
          tabBarActiveTintColor: '#ff6347',
          headerStyle: {
            backgroundColor: '#ff6347',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
