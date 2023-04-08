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
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Power Drill
            </Text>
            <Image style={styles.image}
            source={{
              uri: 'https://static.grainger.com/rp/s/is/image/Grainger/6CXN2_AS01?$adapimg$&hei=536&wid=536',
            }}
            />
          </View> 
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Hard Hat
            </Text>
            <Image style={styles.image}
            source={{
              uri: 'https://cdn.discordapp.com/attachments/1093995367047102537/1094323112570523739/Screenshot_2023-04-08_at_12.41.34_PM.png',
            }}
            />
          </View> 
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Goggles
            </Text>
            <Image style={styles.image}
            source={{
              uri: 'https://cdn.discordapp.com/attachments/1093995367047102537/1094323112851546233/dewalt-safety-goggles-dpg82-11c-64_1000.webp',
            }}
            />
          </View> 
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Cord
            </Text>
            <Image style={styles.image}
            source={{
              uri: 'https://cdn.discordapp.com/attachments/1093995367047102537/1094323113275166850/47524487.webp',
            }}
            />
          </View> 
          
        </ScrollView>





        <Text style={styles.paragraph}>
            Recent Forum Posts:
        </Text>
        <ScrollView horizontal={true}>
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Best budget power drill?
            </Text>
            <Text style={styles.authorName}>
              by Dave704
            </Text>
            <Text style={styles.forumText}>
              I am looking for a new power drill...
            </Text>
            
          </View> 
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Tools to make a wooden table?
            </Text>
            <Text style={styles.authorName}>
              by Builder17
            </Text>
            <Text style={styles.forumText}>
              I have recently began using tools and want to build a table....
            </Text>
            
          </View> 
          
        </ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Anyone have a circular saw?
            </Text>
            <Text style={styles.authorName}>
              by TheSawMan
            </Text>
            <Text style={styles.forumText}>
              I'm in need of a circular saw for a project that I am working on...
            </Text>
            
          </View> 
          <View style={styles.itemcontainer}>
            <Text style={styles.text}>
              Custom made tools?
            </Text>
            <Text style={styles.authorName}>
              by CraftsmanCalvin89
            </Text>
            <Text style={styles.forumText}>
              My tools are not doing enough for me and would like ....
            </Text>
            
          </View> 
          
        </ScrollView>

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
  itemcontainer: {
    flex: 1,
    justifyContent: 'top-center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
    maxWidth: 250,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    height: 35,
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
  image: {
    width: 60,
    height: 60,
    margin: 0,
    alignSelf: 'center'
  },
});
