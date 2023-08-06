import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import Button from '../components/ui/Button';
import Colors from '../utils/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

const StartGameScreen = ({getUserNumber}) => {
  const [enteredValue, setEnteredValue] = useState('');

  const {height} = useWindowDimensions();

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

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.screenWrapper, {marginTop: marginTopDistance}]}>
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
                <Button onPressHandler={() => setEnteredValue('')}>
                  Reset
                </Button>
              </View>
              <View style={styles.button}>
                <Button onPressHandler={confirmHandler}>Confirm</Button>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenWrapper: {
    flex: 1,
    // marginTop: deviceHight < 400 ? 30 : 100,
    alignItems: 'center',
  },
  inputLabel: {
    color: Colors.secondary1,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
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
