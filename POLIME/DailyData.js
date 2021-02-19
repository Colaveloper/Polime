import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable, View} from 'react-native';
import {color} from 'react-native-reanimated';
import GeneralSlider from './GeneralSlider';

// In the arrays that follow, the first number tells the score,
// while the second tells its max value.

// Default is the sub-slider that represent
// a general aspect (e.g. active) and not a
// goal, and therefore has its max value calculated as
// 20 - all the goals max weight

// Score is calculated as the sum of default and goals scores

var active = {
  goals: {
    goalOne: [2, 8],
    goalTwo: [2, 2],
  },

  defaultScore: 1,

  default: function () {
    var sum = 0;
    for (var goal in this.goals) {
      if (this.goals.hasOwnProperty(goal)) {
        sum += parseFloat(this.goals[goal][1]);
      }
    }
    return [this.defaultScore, 20 - sum];
  },

  score: function () {
    var sum = 0;
    for (var goal in this.goals) {
      if (this.goals.hasOwnProperty(goal)) {
        sum += parseFloat(this.goals[goal][0]);
      }
    }
    return sum;
  },
};

export default class DailyData extends Component {
  render() {
    return (
      <>
        <GeneralSlider
          thumbColor="#79D81A"
          type="active"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
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
