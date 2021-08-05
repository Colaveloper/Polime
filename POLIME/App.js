import { style } from 'd3';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import DailyData from './DailyData';
import Chart from './Chart.js';


export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={{ width: "100%" }} >
          <Chart />
          <DailyData />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    width: "100%",
    flexWrap: 'wrap'
  }
});

