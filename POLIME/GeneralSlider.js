import React, {Component} from 'react';
import {Animated, StyleSheet, Text, Pressable, View} from 'react-native';
import Slider from 'react-native-slider';

export default class GeneralSlider extends Component {
  state = {
    //to inherit
    maxGoalScore: 10,
    maxDefaultScore: 10,
    //to inherit

    //to make 0 somehow, without destroyng graphics
    //COULDFIX: setting different thumbStyle when value = 0
    goalScore: 0.5,
    defaultScore: 0.5,
  };

  render() {
    if (
      this.props.showOnlySlider === this.props.type ||
      this.props.showOnlySlider === 'all'
    ) {
      return (
        <Pressable
          style={[
            styles.card,
            this.props.showOnlySlider === this.props.type
              ? {height: '80%', marginTop: -60}
              : null,
          ]}
          onPress={() => this.props.focusOnMe(this.props.type)}>
          <Slider
            type={this.props.type}
            style={styles.slider}
            disabled={true}
            maximumValue={this.state.maxGoalScore + this.state.maxDefaultScore}
            thumbTintColor={'rgba(0, 0, 0, 0)'}
            value={this.state.goalScore + this.state.defaultScore}
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

          {this.props.showOnlySlider === this.props.type && (
            <View style={{width: '100%'}}>
              <Slider
                style={styles.slider}
                maximumValue={this.state.maxGoalScore}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.props.active.goalScore}
                onValueChange={(goalScore) =>
                  this.props.slidingHandler(goalScore)
                }
                tapToSeek={true}
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
                maximumValue={this.state.maxDefaultScore}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.state.defaultScore}
                onValueChange={(defaultScore) => this.setState({defaultScore})}
                tapToSeek={true}
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
            </View>
          )}
        </Pressable>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  slider: {width: '90%', height: 50, marginHorizontal: 20},
  button: {
    marginHorizontal: 14,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#CDCDCD',
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: -30,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
