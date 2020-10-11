import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import Slider from '@react-native-community/slider';

export default class DailyData extends Component {
  //   state = {
  //     counter: 0,
  //   };

  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralSlider thumbColor="#02b881" type="physical" />
        <GeneralSlider thumbColor="#1a09d6" type="creative" />
        <GeneralSlider thumbColor="#d60954" type="learning" />
        <GeneralSlider thumbColor="#d68409" type="social" />
        <GeneralSlider thumbColor="#d6f000" type="self-care" />
        <View style={styles.button}>
          <Button title="SAVE" onPress={this.goToHome}></Button>
        </View>
      </View>
    );
  }

  goToHome = () => {
    this.props.navigation.navigate('Home');
  };
}

class GeneralSlider extends Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={20}
          step={1}
          thumbTintColor={this.props.thumbColor}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#b8b8b8"
          onValueChange={(value) => this.setState({value: value})}
        />
        <Text style={styles.text}>{this.props.type}</Text>
        <Text style={styles.text}>
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  slider: {width: 360, height: 40, marginLeft: 20},
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  button: {
    marginHorizontal: 14,
  },
});
