import React, {Component} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import Slider from 'react-native-slider';

export default class GeneralSlider extends Component {
  state = {
    //to inherit
    maxValue1: 10,
    maxValue2: 10,
    //to inherit
    value1: 0.5,
    value2: 0.5,
  };

  render() {
    if (
      this.props.showOnlySlider === this.props.type ||
      this.props.showOnlySlider === 'all'
    ) {
      return (
        <Pressable onPress={() => this.props.focusOnMe(this.props.type)}>
          <Card bordered>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>{this.props.type}</Text>

              <Slider
                type={this.props.type}
                style={styles.highSlider}
                disabled={true}
                maximumValue={this.state.maxValue1 + this.state.maxValue2}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.state.value1 + this.state.value2}
                //animateTransitions={true}
                minimumTrackTintColor={this.props.thumbColor}
                maximumTrackTintColor={'#D9D9D9'}
                trackStyle={{
                  height: 15,
                  borderRadius: 10,
                }}
                thumbStyle={{
                  width: 0,
                }}
              />
            </View>

            {this.props.showOnlySlider === this.props.type && (
              <>
                <Slider
                  style={styles.slider}
                  maximumValue={this.state.maxValue1}
                  step={1}
                  thumbTintColor={'rgba(0, 0, 0, 0)'}
                  value={this.state.value1}
                  onValueChange={(value1) => this.setState({value1})}
                  allowTouchTrack={true}
                  thumbTouchSize={{width: 100, height: 100}} //?
                  minimumTrackTintColor={this.props.thumbColor}
                  maximumTrackTintColor={'#D9D9D9'}
                  trackStyle={{
                    height: 30,
                    borderRadius: 10,
                  }}
                  thumbStyle={{
                    width: 0,
                  }}
                />
                <Slider
                  style={styles.slider}
                  maximumValue={this.state.maxValue2}
                  step={1}
                  thumbTintColor={'rgba(0, 0, 0, 0)'}
                  value={this.state.value2}
                  onValueChange={(value2) => this.setState({value2})}
                  allowTouchTrack={true}
                  thumbTouchSize={{width: 100, height: 100}} //?
                  minimumTrackTintColor={this.props.thumbColor}
                  maximumTrackTintColor={'#D9D9D9'}
                  trackStyle={{
                    height: 30,
                    borderRadius: 10,
                  }}
                  thumbStyle={{
                    width: 0,
                  }}
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
  highSlider: {width: 250, height: 50, marginHorizontal: 20},
  slider: {width: 330, height: 50, marginHorizontal: 20},
  text: {
    fontSize: 14,
    margin: 14,
  },
  button: {
    marginHorizontal: 14,
  },
});
