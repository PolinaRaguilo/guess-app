import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../components/ui/Button';
import Colors from '../utils/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

const StartGameScreen = ({getUserNumber}) => {
  const [enteredValue, setEnteredValue] = useState('');

  const enterHandler = enteredText => {
    setEnteredValue(enteredText);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => setEnteredValue(''),
          },
        ],
      );
      return;
    }
    getUserNumber(chosenNumber);
  };

  return (
    <View style={styles.screenWrapper}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.inputLabel}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={enterHandler}
        />
        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button onPressHandler={() => setEnteredValue('')}>Reset</Button>
          </View>
          <View style={styles.button}>
            <Button onPressHandler={confirmHandler}>Confirm</Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputLabel: {
    color: Colors.secondary1,
    fontSize: 24,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary1,
    borderBottomWidth: 2,
    color: Colors.secondary1,
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
