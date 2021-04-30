import React, { Component } from 'react';
import { Animated, StyleSheet, Text, Pressable, View } from 'react-native';
import { Slider } from 'react-native-elements';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class GeneralSlider extends Component {

  render() {
    const type = this.props.typeData.type
    const score = this.props.typeData.defaultScore + this.props.typeData.goalScore
    const noGoal = this.props.typeData.goal.maxValue === 0

    return (
      <View style={styles.card} >
        <Slider
          style={styles.mean}
          disabled={true}
          step={1}
          maximumValue={20}
          thumbTintColor={score > this.props.typeData.meanScore ? this.props.typeData.color : 'grey'}
          value={this.props.typeData.meanScore - .5}
          animateTransitions={true}
          minimumTrackTintColor={'rgba(0, 0, 0, 0)'}
          maximumTrackTintColor={'rgba(0, 0, 0, 0)'}
          trackStyle={{
            height: 15,
            borderRadius: 10,
          }}
          thumbStyle={{
            width: 5,
            height: 25
          }}
        /><Slider
          style={styles.slider}
          step={1}
          disabled={false}
          maximumValue={20}
          thumbTintColor={'rgba(0, 0, 0, 0)'}
          value={parseInt(score)}
          animateTransitions={true}
          onValueChange={(defaultScore) => {
            if (parseInt(defaultScore) != this.props.typeData.defaultScore) {
              this.props.slidingHandler(parseInt(defaultScore), type, 'default');
            }
          }}
          allowTouchTrack={true}
          minimumTrackTintColor={this.props.typeData.color}
          maximumTrackTintColor={'#e5e5e5'}
          trackStyle={{
            height: 15,
            borderRadius: 10,
          }}
          thumbStyle={{
            width: 5,
            height: 5,
            zIndex: 2,
          }}
        />
        <View style={{ width: '100%' }}>
          <Text style={{
            fontSize: 20, color: 'grey'
          }}>{type}</Text>
          <Text style={{
            fontStyle: 'italic', color: 'grey'
          }}>
            {this.props.typeData.pep}
          </Text></View>
        {!noGoal && (
          <>
            <Text>
              {this.props.typeData.goal.name}
            </Text>
            <Text>
              {this.props.typeData.goal.description}
            </Text>
            <Text>
              {this.props.typeData.goal.end}
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
            />
            <Slider
              style={styles.slider}
              maximumValue=
              {this.props.typeData.defaultMaxValue}
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
            /></>)}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  slider: { width: '97%', height: 50 },
  mean: { position: 'absolute', width: '90%', height: 80, marginTop: -15, marginHorizontal: 20, },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 5,
    borderBottomWidth: 1,
    borderRadius: 20,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 15,
  },

});

{/* <GestureRecognizer
          onSwipeUp={() => this.props.focusOnMe(type)}
          onSwipeDown={() => this.props.focusOnMe('all')}
          style={[
            styles.card,
            this.props.showOnlySlider === type
              ? { height: '80%', marginTop: -60 }
              : null,
          ]}></GestureRecognizer> */}