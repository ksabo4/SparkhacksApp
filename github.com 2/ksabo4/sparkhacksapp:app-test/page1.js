import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

import Item from './components/Item.js';


export default function Page1() {
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <Text style={styles.paragraph}>
            Your Recommendations:
        </Text>
        <ScrollView horizontal={true}>
          <View>
            <Text>
              Power drill
            </Text>
            <Image
            source={{
              uri: 'https://static.grainger.com/rp/s/is/image/Grainger/6CXN2_AS01?$adapimg$&hei=536&wid=536',
            }}
            style={{ width: 60, height: 60, margin: 0}}
            />
          </View>
          <Item title='test' image='https://static.grainger.com/rp/s/is/image/Grainger/6CXN2_AS01?$adapimg$&hei=536&wid=536' />
          <Item title='test3' image='https://static.grainger.com/rp/s/is/image/Grainger/6CXN2_AS01?$adapimg$&hei=536&wid=536' />
        </ScrollView>
        <Text style={styles.title}>
          Home Page
        </Text>
        <Text style={styles.paragraph}>
            Your Recommendations:
        </Text>
        <Text style={styles.title}>
          Home Page
        </Text>
        <Text style={styles.paragraph}>
            Your Recommendations:
        </Text>
        <Text style={styles.title}>
          Home Page
        </Text>
        <Text style={styles.paragraph}>
            Your Recommendations:
        </Text>
        <Text style={styles.title}>
          Home Page
        </Text>
        <Text style={styles.paragraph}>
            Your Recommendations:
        </Text>
        <View style={styles.container2}>
          
        </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top-center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'top-center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue'
  },
});
