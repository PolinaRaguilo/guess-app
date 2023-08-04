import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../utils/colors';

const Button = ({children, onPressHandler}) => {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        android_ripple={{color: Colors.primary2}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: Colors.primary1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, //only for android
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
