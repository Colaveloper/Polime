import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable, View} from 'react-native';
import GeneralSlider from './GeneralSlider';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class DailyData extends Component {
  state = {
    active: {
      pep: 'keep fit',

      goal: {
        name: 'goalName',
        maxValue: 10,
        end: 'end-date',
        description: 'description',
      },

      goalScore: 0.5,
      defaultScore: 0.5,

      get defaultMaxValue() {
        return 20 - this.goal.maxValue;
      },
    },
    creative: {
      pep: 'keep fit',

      goal: {
        name: 'goalName',
        maxValue: 10,
        end: 'end-date',
        description: 'description',
      },

      goalScore: 0.5,
      defaultScore: 0.5,

      get defaultMaxValue() {
        return 20 - this.goal.maxValue;
      },
    },
    learning: {
      pep: 'keep fit',

      goal: {
        name: 'goalName',
        maxValue: 10,
        end: 'end-date',
        description: 'description',
      },

      goalScore: 0.5,
      defaultScore: 0.5,

      get defaultMaxValue() {
        return 20 - this.goal.maxValue;
      },
    },
    social: {
      pep: 'keep fit',

      goal: {
        name: 'goalName',
        maxValue: 10,
        end: 'end-date',
        description: 'description',
      },

      goalScore: 0.5,
      defaultScore: 0.5,

      get defaultMaxValue() {
        return 20 - this.goal.maxValue;
      },
    },
    selfCaring: {
      pep: 'keep fit',

      goal: {
        name: 'goalName',
        maxValue: 10,
        end: 'end-date',
        description: 'description',
      },

      goalScore: 0.5,
      defaultScore: 0.5,

      get defaultMaxValue() {
        return 20 - this.goal.maxValue;
      },
    },
  };

  slidingHandler = (goalScore, type) => {
    this.setState({[type]: {...this.state[type], goalScore: goalScore}});
  };
  slidingHandlerDefault = (defaultScore, type) => {
    this.setState({[type]: {...this.state[type], defaultScore: defaultScore}});
  };

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <>
        <GeneralSlider
          thumbColor="#79D81A"
          type="active"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.active}
          score={this.state.active.defaultScore + this.state.active.goalScore}
          onSwipeUp={(state) => this.onSwipeUp(state)}
        />

        <GeneralSlider
          thumbColor="#47C0F4"
          type="creative"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.creative}
          score={
            this.state.creative.defaultScore + this.state.creative.goalScore
          }
        />
        <GeneralSlider
          thumbColor="#dd5e23"
          type="learning"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.learning}
          score={
            this.state.learning.defaultScore + this.state.learning.goalScore
          }
        />
        <GeneralSlider
          thumbColor="#E56CF3"
          type="social"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.social}
          score={this.state.social.defaultScore + this.state.social.goalScore}
        />
        <GeneralSlider
          thumbColor="#ffc721"
          type="selfCaring"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.selfCaring}
          score={
            this.state.selfCaring.defaultScore + this.state.selfCaring.goalScore
          }
        />
      </>
    );
  }
}
