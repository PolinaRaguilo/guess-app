import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Button from '../components/Button';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsWrapper}>
        <View style={styles.button}>
          <Button>Reset</Button>
        </View>
        <View style={styles.button}>
          <Button>Confirm</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,

    // elevation - only for android
    elevation: 4,

    // shadow params for ios
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    textAlignVertical: 'bottom',
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
