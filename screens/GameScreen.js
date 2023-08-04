import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Button from '../components/ui/Button';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({userNumber, onGameOver}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(minBoundary, maxBoundary, userNumber),
  );

  // direction: 'lower' | 'greater'
  const getNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.wrapper}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.text}>Higher or lower?</Text>
        <View>
          <View>
            <Button onPressHandler={() => getNextGuess('greater')}>+</Button>
          </View>
          <View>
            <Button onPressHandler={() => getNextGuess('lower')}>-</Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
  },
  text: {
    color: 'white',
    paddingBottom: 10,
    fontSize: 20,
  },
});
