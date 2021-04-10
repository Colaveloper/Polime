import React, { Component } from 'react';
import { Animated, StyleSheet, Text, Pressable, View } from 'react-native';
import { Slider } from 'react-native-elements';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class GeneralSlider extends Component {

  render() {
    const type = this.props.typeData.type
    const score = this.props.typeData.defaultScore + this.props.typeData.goalScore

    if (
      this.props.showOnlySlider === type ||
      this.props.showOnlySlider === 'all'
    ) {
      return (
        <GestureRecognizer
          onSwipeUp={() => this.props.focusOnMe(type)}
          onSwipeDown={() => this.props.focusOnMe('all')}
          style={[
            styles.card,
            this.props.showOnlySlider === type
              ? { height: '80%', marginTop: -60 }
              : null,
          ]}>
          <View style={{ width: '100%' }}>
            <Slider
              type={type}
              style={styles.slider}
              disabled={true}
              maximumValue={20}
              thumbTintColor={'rgba(0, 0, 0, 0)'}
              value={score}
              animateTransitions={true}
              minimumTrackTintColor={this.props.typeData.color}
              maximumTrackTintColor={'#e5e5e5'}
              trackStyle={{
                height: 15,
                borderRadius: 10,
              }}
              thumbStyle={{
                width: 0,
              }}
            />
            <Slider
              type={type}
              style={styles.mean}
              disabled={true}
              maximumValue={20}
              thumbTintColor={score > this.props.typeData.meanScore ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}
              value={this.props.typeData.meanScore}
              animateTransitions={true}
              minimumTrackTintColor={'rgba(0, 0, 0, 0)'}
              maximumTrackTintColor={'rgba(0, 0, 0, 0)'}
              trackStyle={{
                height: 15,
                borderRadius: 10,
              }}
              thumbStyle={{
                width: 5,
                height: 5
              }}
            />
          </View>
          {this.props.showOnlySlider === type && (
            <View style={{ width: '100%' }}>
              <Text>{type == undefined ? '' : type}</Text>
              <Text>
                {this.props.typeData == undefined
                  ? ''
                  : this.props.typeData.pep}
              </Text>
              {this.props.typeData.goal.maxValue !== 0 && (
                <>
                  <Text>
                    {this.props.typeData == undefined
                      ? ''
                      : this.props.typeData.goal.name}
                  </Text>
                  <Text>
                    {this.props.typeData == undefined
                      ? ''
                      : this.props.typeData.goal.description}
                  </Text>
                  <Text>
                    {this.props.typeData == undefined
                      ? ''
                      : this.props.typeData.goal.end}
                  </Text>
                  <Slider
                    style={styles.slider}
                    maximumValue={this.props.typeData.goal.maxValue}
                    step={1}
                    thumbTintColor={'rgba(0, 0, 0, 0)'}
                    value={this.props.typeData.goalScore}
                    animateTransitions={true}
                    onValueChange={(goalScore) => {
                      if (goalScore != this.props.typeData.goalScore) {
                        this.props.slidingHandler(goalScore, type, 'goal');
                      }
                    }}
                    allowTouchTrack={true}
                    minimumTrackTintColor={this.props.typeData.color}
                    maximumTrackTintColor={'#e5e5e5'}
                    trackStyle={{
                      height: 30,
                      borderRadius: 10,
                    }}
                    thumbStyle={{
                      width: 0,
                    }}
                  /></>)}
              <Slider
                style={styles.slider}
                maximumValue={this.props.typeData.defaultMaxValue}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.props.typeData.defaultScore}
                animateTransitions={true}
                onValueChange={(defaultScore) => {
                  if (defaultScore != this.props.typeData.defaultScore) {
                    this.props.slidingHandler(defaultScore, type, 'default');
                  }
                }}
                allowTouchTrack={true}
                minimumTrackTintColor={this.props.typeData.color}
                maximumTrackTintColor={'#e5e5e5'}
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
        </GestureRecognizer>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  slider: { width: '90%', height: 50, marginHorizontal: 20 },
  mean: { position: 'absolute', width: '90%', height: 50, marginHorizontal: 20 },
  button: {
    marginHorizontal: 14,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#CDCDCD',
    borderWidth: 3,
    borderTopWidth: 4,
    borderRadius: 15,
    marginBottom: -30,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
