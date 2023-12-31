import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../../utils/colors';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary1,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.secondary1,
    padding: 12,
    maxWidth: '80%',
  },
});
