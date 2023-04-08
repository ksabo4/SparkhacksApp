import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

import Item from './components/Item.js';


export default function Page1() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>
            Workshops near you:
        </Text>
        <Text style={styles.text}>
          How to use basic tools
        </Text>
        <Text style={styles.authorName}>
          123 Main Street, 4/9 @ 5:30 pm
        </Text>
        <Text style={styles.forumText}>
          Want to learn how to use a hammer? Check out this workshop to learn the basics of using tools!
        </Text>

        <Text>  
          {"\n"}{"\n"}
        </Text>

        <Text style={styles.text}>
          How to properly use safety equipment
        </Text>
        <Text style={styles.authorName}>
          123 Main Street, 4/12 @ 8:30 pm
        </Text>
        <Text style={styles.forumText}>
          Safety is first! In this workshop, you will learn to protect yourself while using motor tools!
        </Text>

        <Text>  
          {"\n"}{"\n"}
        </Text>

        <Text style={styles.text}>
          Finding the right equipment for you
        </Text>
        <Text style={styles.authorName}>
          123 Main Street, 4/18 @ 1:00 pm
        </Text>
        <Text style={styles.forumText}>
          Are you confused where to start with buying tools? Come to this workshop to help you make the best purchases for your needs!
        </Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  authorName: {
    fontSize: 10,
    textAlign: 'center',
  },
  forumText: {
    fontSize: 11,
    color: 'gray',
    textAlign: 'center',
  },
});
