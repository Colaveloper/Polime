import React, { Component } from 'react';
import { StyleSheet, Text, Button, Alert, Pressable, View } from 'react-native';
import GeneralSlider from './GeneralSlider';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TO PRINT THE STORAGE
AsyncStorage.getAllKeys().then((keyArray) => {
  AsyncStorage.multiGet(keyArray).then((keyValArray) => {
    let myStorage = {};
    for (let keyVal of keyValArray) {
      myStorage[keyVal[0]] = keyVal[1]
    }
    console.log('CURRENT STORAGE: ', myStorage);
  })
});

export default class DailyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {
        type: 'body',
        pep: 'keep fit',
        color: "#76B947",

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
      creativity: {
        type: 'creativity',
        pep: 'feel free to change',
        color: "#37ADE4",

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
        type: 'learning',
        pep: 'train your mind',
        color: "#EB5656",

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
        type: 'sociality',
        pep: 'stay connected',
        color: "#DA56ED",

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
        type: 'mind',
        pep: 'mind the mind',
        color: "#EAAA39",

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
      date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
    };
  }

  componentDidUpdate() {
    AsyncStorage.setItem(this.state.date, JSON.stringify(this.state)) // save everything in Async Storage
      .then(() => {
        null;
      })
      .catch((error) => {
        console.log(error);
      });
  }



  componentDidMount() {
    this.retriveData();
    this.interval = setInterval(() => this.newDayReset(), 5000);
  }

  retriveData = () => {
    AsyncStorage.getItem(this.state.date)
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

  newDayReset() {
    // if (new day and after 4am) {reset}
    if (new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() !== this.state.date
      && 4 >= new Date().getHours()
    ) {
      this.setState((prevState) => ({
        body: {
          ...prevState.body,
          defaultScore: .5,
          goalScore: .5,
        },
        creativity: {
          ...prevState.creativity,
          defaultScore: .5,
          goalScore: .5,
        },
        learning: {
          ...prevState.learning,
          defaultScore: .5,
          goalScore: .5,
        },
        sociality: {
          ...prevState.sociality,
          defaultScore: .5,
          goalScore: .5,
        },
        mind: {
          ...prevState.mind,
          defaultScore: .5,
          goalScore: .5,
        },
        date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
      }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  slidingHandler = (newScore, type, slider) => {
    if (slider === 'goal') {
      this.setState({ [type]: { ...this.state[type], goalScore: newScore } });
    } else if (slider === 'default') {
      this.setState({ [type]: { ...this.state[type], defaultScore: newScore } });
    }
  }


  render() {
    return (
      <>
        <Text>{this.state.date}, {new Date().getHours()} hours</Text>
        {['body', 'creativity', 'learning', 'sociality', 'mind'].map((type) => (
          <GeneralSlider
            showOnlySlider={this.props.showOnlySlider}
            focusOnMe={this.props.focusOnMe}
            slidingHandler={this.slidingHandler}
            key={type}
            typeData={this.state[type]}
          />
        ))}
      </>
    );
  }
}
