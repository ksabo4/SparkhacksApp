import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Page 1" component={Page1} />
        <Tab.Screen name="Page 2" component={Page2} />
        <Tab.Screen name="Page 3" component={Page3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialTopTabNavigator();

