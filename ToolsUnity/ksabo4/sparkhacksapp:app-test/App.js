//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';


export default function App() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <NavigationContainer style={styles.search}>
      <View style={styles.containerHorizontal}>
        <Image
          source={{
            uri: 'https://cdn.discordapp.com/attachments/1093995367047102537/1094349213070020770/hackathon_icon.png',
          }}
          style={{ width: 50, height: 60, margin: 0}}
        />
        <SearchBar
          style={styles.search}
          round
          inputStyle={{ backgroundColor: 'white' }}
          inputContainerStyle={{backgroundColor: 'white'}}
          containerStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            width: '85%',
            height: 60
          }}
          placeholderTextColor={'#g5g5g5'}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Here..."
          value={search}
        />
        
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Page1} />
        <Tab.Screen name="Workshops" component={Page2} />
        <Tab.Screen name="Forum" component={Page3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  search: {
    justifyContent: 'top-center',
    paddingTop: Constants.statusBarHeight,
    TextColor: '#000000',
  },
  containerHorizontal: {
    margin: '0px',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'top-center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
