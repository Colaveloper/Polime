import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {act} from 'react-test-renderer';
import GeneralSlider from './GeneralSlider';

export default class DailyData extends Component {
  state = {
    active: {
      goals: {
        name: 'goalName',
        maxValue: 10,
        end: 'end-date',
        description: 'description',
      },

      goalScore: 0.5,
      defaultScore: 0.5,

      get defaultMaxValue() {
        return 20 - this.goals.maxValue;
      },
      // score: this.goalScore + this.defaultScore,
    },
  };

  constructor(props) {
    super(props);
  }

  slidingHandler = (goalScore) => {
    this.setState({active: {...this.state.active, goalScore: goalScore}});
    console.log([
      'goalScore: ' + this.state.active.goalScore,
      'score: ' +
        (this.state.active.defaultScore + this.state.active.goalScore),
    ]);
  };
  slidingHandlerDefault = (defaultScore) => {
    this.setState({active: {...this.state.active, defaultScore: defaultScore}});
    console.log([
      'defaultScore: ' + this.state.active.defaultScore,
      'score: ' +
        (this.state.active.defaultScore + this.state.active.goalScore),
    ]);
  };

  render() {
    return (
      <>
        <GeneralSlider
          thumbColor="#79D81A"
          type="active"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          active={this.state.active}
          score={this.state.active.defaultScore + this.state.active.goalScore}
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
