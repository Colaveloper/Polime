import React, {Component} from 'react';
import {StyleSheet, Text, Button, Alert, Pressable, View} from 'react-native';
import GeneralSlider from './GeneralSlider';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class DailyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidUpdate() {
    AsyncStorage.setItem('data', JSON.stringify(this.state))
      .then(() => {
        null; //data saved
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.retriveData();
  }

  retriveData = () => {
    AsyncStorage.getItem('data')
      .then((value) => {
        const data = JSON.parse(value);
        this.setState((prevState) => ({
          active: {
            ...prevState.active,
            defaultScore: data.active.defaultScore,
            goalScore: data.active.goalScore,
          },
          creative: {
            ...prevState.creative,
            defaultScore: data.creative.defaultScore,
            goalScore: data.creative.goalScore,
          },
          learning: {
            ...prevState.learning,
            defaultScore: data.learning.defaultScore,
            goalScore: data.learning.goalScore,
          },
          social: {
            ...prevState.social,
            defaultScore: data.social.defaultScore,
            goalScore: data.social.goalScore,
          },
          selfCaring: {
            ...prevState.selfCaring,
            defaultScore: data.selfCaring.defaultScore,
            goalScore: data.selfCaring.goalScore,
          },
        }));
      })
      .catch((error) => {
        console.log(error);
      });
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
