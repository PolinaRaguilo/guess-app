import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = ({children}) => {
  const onPressHandler = () => {
    console.log('PRESS');
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        android_ripple={{color: '#640223'}}>
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
    backgroundColor: '#72063c',
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
