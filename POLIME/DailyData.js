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
  state = {
    showOnlySlider: 'all',
  };

  constructor(props) {
    super(props);

    this.focusOnMe = this.focusOnMe.bind(this.props.type);
  }

  focusOnMe = (e) => {
    if (
      e.target._internalFiberInstanceHandleDEV.child.memoizedProps !==
      this.state.showOnlySlider
    ) {
      this.setState({
        showOnlySlider:
          e.target._internalFiberInstanceHandleDEV.child.memoizedProps,
      });
    } else {
      this.setState({
        showOnlySlider: 'all',
      });
    }
  };

  render() {
    return (
      <>
        <GeneralSlider
          thumbColor="#02b881"
          type="active"
          showOnlySlider={this.state.showOnlySlider}
          focusOnMe={this.focusOnMe}
        />

        <GeneralSlider
          thumbColor="#1a09d6"
          type="creative"
          showOnlySlider={this.state.showOnlySlider}
          focusOnMe={this.focusOnMe}
        />
        <GeneralSlider
          thumbColor="#d60954"
          type="learning"
          showOnlySlider={this.state.showOnlySlider}
          focusOnMe={this.focusOnMe}
        />
        <GeneralSlider
          thumbColor="#d68409"
          type="social"
          showOnlySlider={this.state.showOnlySlider}
          focusOnMe={this.focusOnMe}
        />
        <GeneralSlider
          thumbColor="#d6f000"
          type="self-caring"
          showOnlySlider={this.state.showOnlySlider}
          focusOnMe={this.focusOnMe}
        />
      </>
    );
  }
}
