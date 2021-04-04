import React, {Component} from 'react';
import {StyleSheet, Text, Button, Alert, Pressable, View} from 'react-native';
import GeneralSlider from './GeneralSlider';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class DailyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {
        pep: 'keep fit',

        goal: {
          name: 'goalName',
          maxValue: 10,
          end: 'end-date',
          description: 'description',
        },

        meanScore: 2,
        goalScore: 0.5,
        defaultScore: 0.5,

        get defaultMaxValue() {
          return 20 - this.goal.maxValue;
        },
      },
      creativity: {
        pep: 'feel free to change',

        goal: {
          name: 'goalName',
          maxValue: 10,
          end: 'end-date',
          description: 'description',
        },

        meanScore: 3,
        goalScore: 0.5,
        defaultScore: 0.5,

        get defaultMaxValue() {
          return 20 - this.goal.maxValue;
        },
      },
      learning: {
        pep: 'train your mind',

        goal: {
          name: 'goalName',
          maxValue: 10,
          end: 'end-date',
          description: 'description',
        },

        meanScore: 7,
        goalScore: 0.5,
        defaultScore: 0.5,

        get defaultMaxValue() {
          return 20 - this.goal.maxValue;
        },
      },
      sociality: {
        pep: 'stay connected',

        goal: {
          name: 'goalName',
          maxValue: 10,
          end: 'end-date',
          description: 'description',
        },

        meanScore: 15,
        goalScore: 0.5,
        defaultScore: 0.5,

        get defaultMaxValue() {
          return 20 - this.goal.maxValue;
        },
      },
      mind: {
        pep: 'mind the mind',

        goal: {
          name: 'goalName',
          maxValue: 10,
          end: 'end-date',
          description: 'description',
        },

        meanScore: 4,
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
        value === null
          ? null
          : this.setState((prevState) => ({
              body: {
                ...prevState.body,
                defaultScore: data.body.defaultScore,
                goalScore: data.body.goalScore,
              },
              creativity: {
                ...prevState.creativity,
                defaultScore: data.creativity.defaultScore,
                goalScore: data.creativity.goalScore,
              },
              learning: {
                ...prevState.learning,
                defaultScore: data.learning.defaultScore,
                goalScore: data.learning.goalScore,
              },
              sociality: {
                ...prevState.sociality,
                defaultScore: data.sociality.defaultScore,
                goalScore: data.sociality.goalScore,
              },
              mind: {
                ...prevState.mind,
                defaultScore: data.mind.defaultScore,
                goalScore: data.mind.goalScore,
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
          thumbColor="#76B947"
          type="body"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.body}
          score={this.state.body.defaultScore + this.state.body.goalScore}
          meanScore={this.state.body.meanScore}
        />
        <GeneralSlider
          thumbColor="#37ADE4"
          type="creativity"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.creativity}
          score={
            this.state.creativity.defaultScore + this.state.creativity.goalScore
          }
          meanScore={this.state.creativity.meanScore}

        />
        <GeneralSlider
          thumbColor="#EB5656"
          type="learning"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.learning}
          score={
            this.state.learning.defaultScore + this.state.learning.goalScore
          }
          meanScore={this.state.learning.meanScore}

        />
        <GeneralSlider
          thumbColor="#DA56ED"
          type="sociality"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.sociality}
          score={
            this.state.sociality.defaultScore + this.state.sociality.goalScore
          }
          meanScore={this.state.sociality.meanScore}

        />
        <GeneralSlider
          thumbColor="#EAAA39"
          type="mind"
          showOnlySlider={this.props.showOnlySlider}
          focusOnMe={this.props.focusOnMe}
          slidingHandler={this.slidingHandler}
          slidingHandlerDefault={this.slidingHandlerDefault}
          typeData={this.state.mind}
          score={this.state.mind.defaultScore + this.state.mind.goalScore}
          meanScore={this.state.mind.meanScore}

        />
        
      </>
    );
  }
}
