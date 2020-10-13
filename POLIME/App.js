import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import DailyData from './DailyData';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <DailyData />
      </View>
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
