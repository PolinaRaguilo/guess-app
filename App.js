import React from 'react';
import StartGameScreen from './screens/StartGameScreen';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.viewsWrapper}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.viewsWrapper}
        imageStyle={styles.backgrounImage}>
        <StartGameScreen />
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
