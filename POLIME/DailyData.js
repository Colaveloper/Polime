import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {act} from 'react-test-renderer';
import GeneralSlider from './GeneralSlider';

var active = {
  goals: {
    name: 'goalName',
    maxValue: 8,
    end: 'end-date',
    description: 'description',
  },

  goalScore: 2,

  get defaultScore() {
    return 20 - this.goalScore;
  },
  get score() {
    return this.goalScore + this.defaultScore;
  },
};

export default class DailyData extends Component {
  slidingHandler = (goalScore) => {
    active.goalScore = goalScore;
    console.log(active.goalScore);
  };

  render() {
    return (
      <>
        <Text style={{color: 'white'}}>
          {active.goalScore}, {active.defaultScore}, {active.score}
        </Text>
        <GeneralSlider
          thumbColor="#79D81A"
          type="active"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          active={active}
        />

        <GeneralSlider
          thumbColor="#47C0F4"
          type="creative"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
        />
        <GeneralSlider
          thumbColor="#EC553E"
          type="learning"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
        />
        <GeneralSlider
          thumbColor="#E56CF3"
          type="social"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
        />
        <GeneralSlider
          thumbColor="#E1BD5B"
          type="self-caring"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
        />
      </>
    );
  }
}
