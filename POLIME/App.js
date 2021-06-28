import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import DailyData from './DailyData';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <DailyData />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    flexWrap: 'wrap'
  },
});
