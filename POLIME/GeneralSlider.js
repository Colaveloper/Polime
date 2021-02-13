import React, {Component} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import Slider from '@react-native-community/slider';

export default class GeneralSlider extends Component {
  state = {
    //to inherit
    maxValue1: 10,
    maxValue2: 10,
    //to inherit
    value1: 0,
    value2: 0,
    vauleMiddleman: 0,
    expand: false,
  };

  // constructor(props) {
  //   super(props);
  //   this.pressedSliderHandler = this.pressedSliderHandler.bind(this);
  // }

  // pressedSliderHandler(pressedSlider) {
  //   this.props.onSliderPress(pressedSlider.target.value)
  // }

  render() {
    if (
      this.props.showOnlySlider === this.props.type ||
      this.props.showOnlySlider === 'all'
    ) {
      return (
        <Card bordered>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={styles.text}
              onPress={() => {
                this.setState({expand: !this.state.expand});
                this.props.handler;
              }}>
              {this.props.type}: {this.state.value1 + this.state.value2}
            </Text>
            <Slider
              type={this.props.type}
              style={styles.highSlider}
              disabled={1}
              maximumValue={this.state.maxValue1 + this.state.maxValue2}
              thumbTintColor={this.props.thumbColor}
              value={this.state.value1 + this.state.value2}
            />
          </View>

          {this.state.expand && (
            <>
              <Slider
                style={styles.slider}
                maximumValue={this.state.maxValue1}
                step={1}
                thumbTintColor={this.props.thumbColor}
                onValueChange={(newValue) => this.setState({value1: newValue})}
                value={this.state.value1}
                minimumTrackTintColor="#000000"
              />
              <Slider
                style={styles.slider}
                maximumValue={this.state.maxValue2}
                step={1}
                thumbTintColor={this.props.thumbColor}
                onValueChange={(newValue) => this.setState({value2: newValue})}
                value={this.state.value2}
                minimumTrackTintColor="#000000"
              />
            </>
          )}
        </Card>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  highSlider: {width: 230, height: 50, marginLeft: 20},
  slider: {width: 360, height: 50, marginLeft: 20},
  text: {
    fontSize: 14,
    margin: 14,
  },
  button: {
    marginHorizontal: 14,
  },
});
