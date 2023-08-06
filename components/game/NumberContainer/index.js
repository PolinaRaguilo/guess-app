import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../utils/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary1,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.secondary1,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
  },
});
