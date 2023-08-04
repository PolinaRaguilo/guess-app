import React from 'react';
import {StyleSheet, View} from 'react-native';

const RowWrapper = ({children}) => {
  return <View style={styles.row}>{children}</View>;
};

export default RowWrapper;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
