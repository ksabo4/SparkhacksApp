import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';


export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <ScrollView horizontal={true}>
        <View>
          <Text style={styles.text}>
            { this.props.title }
          </Text>
          <Button style={{backgroundImage:"url('./images/logo.png')",backgroundSize:"cover", width:"40px", height:"40px"}}></Button>

          <Image style={styles.image}
          source={{
            uri: {  },
          }}
          />
        </View> 
      </ScrollView>
    );
  }
}

Item.propTypes = { title: PropTypes.string.isRequired, image: PropTypes.string.isRequired };


const styles = StyleSheet.create({
  text: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    margin: 0,
    textAlign: 'center'

  }

});