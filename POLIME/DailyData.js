import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import Slider from '@react-native-community/slider';

export default class DailyData extends Component {
  state = {
    show: false,
  };

  closeAllSliders() {
    this.setState({show: false});
    console.log(this.state.show);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralSlider
          thumbColor="#02b881"
          type="physical"
          show={this.state.show}
        />
        <GeneralSlider
          thumbColor="#1a09d6"
          type="creative"
          show={this.state.show}
        />
        <GeneralSlider
          thumbColor="#d60954"
          type="learning"
          show={this.state.show}
        />
        <GeneralSlider
          thumbColor="#d68409"
          type="social"
          show={this.state.show}
        />
        <GeneralSlider
          thumbColor="#d6f000"
          type="self-care"
          show={this.state.show}
        />
        <Button
          title="close all sliders"
          onPress={this.closeAllSliders.bind(this)}></Button>
      </View>
    );
  }
}

class GeneralSlider extends Component {
  static defaultProps = {
    value: 0,
    show: false,
  };

  state = {
    value: this.props.value,
    show: this.props.show,
  };

  render() {
    return (
      <Pressable
        onPress={(show) => {
          this.setState({show: !this.state.show}), console.log(this.state.show);
        }}>
        <Text style={styles.text}>
          {this.props.type}: {this.state.value}
        </Text>
        <Slider
          style={styles.slider}
          disabled={1}
          minimumValue={0}
          maximumValue={20}
          step={1}
          // thumbTintColor="rgba(0, 0, 0, 0)"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#b8b8b8"
          value={this.state.value}
        />
        {this.state.show && (
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={20}
            step={1}
            thumbTintColor={this.props.thumbColor}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#b8b8b8"
            value={this.state.value}
            onValueChange={(value) => this.setState({value: value})}
          />
        )}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  slider: {width: 360, height: 50, marginLeft: 20},
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
