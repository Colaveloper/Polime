import React, {Component} from 'react';
import {Animated, StyleSheet, Text, Pressable, View} from 'react-native';
import Slider from 'react-native-slider';

export default class GeneralSlider extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   goalScore: this.props.active.goalScore || 0,
    // };
  }

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
            maximumValue={20}
            thumbTintColor={'rgba(0, 0, 0, 0)'}
            value={this.props.score}
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
                maximumValue={this.props.active.goals.maxValue}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={0.5}
                onValueChange={(goalScore) => {
                  if (goalScore != this.props.active.goalScore) {
                    this.props.slidingHandler(goalScore);
                  }
                }}
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
                maximumValue={10} //this.props.active.defaultMaxValue
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={0.5}
                onValueChange={(defaultScore) => {
                  if (defaultScore != this.props.active.defaultScore) {
                    this.props.slidingHandlerDefault(defaultScore);
                  }
                }}
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
