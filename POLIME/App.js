import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DailyData from './DailyData';

let BackgroundImage__URL = {
  uri:
    'https://i.pinimg.com/736x/33/64/1e/33641e566a3cb829a8a53669a734d7aa.jpg',
};

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={BackgroundImage__URL}
        style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={styles.mainContainer}>
          <DailyData />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 25,
  },
  fab: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
