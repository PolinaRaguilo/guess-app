import React, {useState} from 'react';
import StartGameScreen from './screens/StartGameScreen';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './utils/colors';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const getUserNumber = number => {
    setUserNumber(number);
    setIsGameOver(false);
  };

  const gameOverHandler = number => {
    setIsGameOver(true);
    setRoundsNumber(number);
  };

  const onStartNewGame = () => {
    setUserNumber(null);
    setRoundsNumber(0);
  };

  let screen = <StartGameScreen getUserNumber={getUserNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onRestart={onStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary4, Colors.secondary1]}
      style={styles.viewsWrapper}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.viewsWrapper}
        imageStyle={styles.backgrounImage}>
        <SafeAreaView style={styles.viewsWrapper}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  viewsWrapper: {
    flex: 1,
  },
  backgrounImage: {
    opacity: 0.15,
  },
});

export default App;
