import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

export default class DailyData extends Component {
  //   state = {
  //     counter: 0,
  //   };

  render() {
    return (
      <View>
        <Text>Creativity</Text>
        <GeneralSlider />
        <GeneralSlider />
        <GeneralSlider />
        <GeneralSlider />
        <GeneralSlider />
      </View>
    );
  }
}

class GeneralSlider extends Component {
  render() {
    return (
      <Slider
        style={{width: 400, height: 40}}
        minimumValue={0}
        maximumValue={20}
        step={1}
        thumbTintColor="#5eff6c"
        minimumTrackTintColor="#218229"
        maximumTrackTintColor="#b8b8b8"
        maximumTrackImage
      />
    );
  }
}
