import React, {Component} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import Slider from '@react-native-community/slider';

export default class GeneralSlider extends Component {
  state = {
    valueOne: 0,
    valueTwo: 0,
    vauleMiddleman: 0,
    show: false,
  };

  render() {
    return (
      <Pressable
        onPress={() => {
          this.setState({show: !this.state.show});
        }}>
        <Text style={styles.text} onPress={console.log('')}>
          {this.props.type}: {this.state.value}
        </Text>
        <Slider
          type={this.props.type}
          style={styles.slider}
          disabled={1}
          minimumValue={0}
          maximumValue={20}
          step={1}
          // thumbTintColor="rgba(0, 0, 0, 0)"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#b8b8b8"
          value={this.state.valueOne + this.state.valueTwo}
        />
        {this.state.show && (
          <>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              thumbTintColor={this.props.thumbColor}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#b8b8b8"
              onValueChange={(newValue) => this.setState({valueOne: newValue})}
            />
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              thumbTintColor={this.props.thumbColor}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#b8b8b8"
              onValueChange={(newValue) => this.setState({valueTwo: newValue})}
            />
          </>
        )}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  slider: {width: 360, height: 50, marginLeft: 20},
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  button: {
    marginHorizontal: 14,
  },
});
