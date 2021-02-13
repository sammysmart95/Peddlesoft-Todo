import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from './Scale';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Functional Todo',
};

const styles = StyleSheet.create({
  header: {
    height: scale(50),
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
