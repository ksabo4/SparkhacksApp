import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';


export default function Page1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home Page
      </Text>
      <Text style={styles.paragraph}>
          Your Recommendations:
        </Text>
      <View style={styles.container2}>
        
      </View>
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
  }
});
