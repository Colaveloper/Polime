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
    show: false,
  };

  render() {
    if (
      this.props.showOnlySlider === this.props.type ||
      this.props.showOnlySlider === 'all'
    ) {
      return (
        <Pressable
          onPress={() => {
            this.setState({show: !this.state.show});
            this.props.handler;
          }}>
          <Card>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>
                {this.props.type}: {this.state.value1 + this.state.value2}
              </Text>
              <Slider
                type={this.props.type}
                style={styles.highSlider}
                disabled={1}
                minimumValue={0}
                maximumValue={this.state.maxValue1 + this.state.maxValue2}
                thumbTintColor={this.props.thumbColor}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#b8b8b8"
                value={this.state.value1 + this.state.value2}
              />
            </View>

            {this.state.show && (
              <>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={this.state.maxValue1}
                  step={1}
                  thumbTintColor={this.props.thumbColor}
                  minimumTrackTintColor="#000000"
                  maximumTrackTintColor="#b8b8b8"
                  onValueChange={(newValue) =>
                    this.setState({value1: newValue})
                  }
                />
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={this.state.maxValue2}
                  step={1}
                  thumbTintColor={this.props.thumbColor}
                  minimumTrackTintColor="#000000"
                  maximumTrackTintColor="#b8b8b8"
                  onValueChange={(newValue) =>
                    this.setState({value2: newValue})
                  }
                />
              </>
            )}
          </Card>
        </Pressable>
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
