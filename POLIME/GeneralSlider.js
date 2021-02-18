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
    value1: 0,
    value2: 0,
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
                thumbTintColor={this.props.thumbColor}
                value={this.state.value1 + this.state.value2}
                animateTransitions={true}
                animationType={'spring'}
                useNativeDriver={false}
                minimumTrackTintColor={this.props.thumbColor}
                trackStyle={{
                  height: 15,
                  borderRadius: 15,
                }}
                thumbStyle={{
                  height: 15,
                  width: 20,
                  borderRadius: 15,
                }}
              />
            </View>

            {this.props.showOnlySlider === this.props.type && (
              <>
                <Slider
                  style={styles.slider}
                  maximumValue={this.state.maxValue1}
                  step={1}
                  thumbTintColor={this.props.thumbColor}
                  value={this.state.value1}
                  onValueChange={(value1) => this.setState({value1})}
                  thumbTouchSize={{width: 100, height: 100}} //?
                  minimumTrackTintColor={this.props.thumbColor}
                  trackStyle={{
                    height: 30,
                    borderRadius: 30,
                  }}
                  thumbStyle={{
                    height: 30,
                    width: 40,
                    borderRadius: 30,
                  }}
                />
                <Slider
                  style={styles.slider}
                  maximumValue={this.state.maxValue2}
                  step={1}
                  thumbTintColor={this.props.thumbColor}
                  value={this.state.value2}
                  onValueChange={(value2) => this.setState({value2})}
                  thumbTouchSize={{width: 100, height: 100}} //?
                  minimumTrackTintColor={this.props.thumbColor}
                  trackStyle={{
                    height: 30,
                    borderRadius: 30,
                  }}
                  thumbStyle={{
                    height: 30,
                    width: 40,
                    borderRadius: 30,
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
  highSlider: {width: 230, height: 50, marginHorizontal: 20},
  slider: {width: 330, height: 50, marginHorizontal: 20},
  text: {
    fontSize: 14,
    margin: 14,
  },
  button: {
    marginHorizontal: 14,
  },
});
