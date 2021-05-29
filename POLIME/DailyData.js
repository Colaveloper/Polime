import React, { Component } from 'react';
import { StyleSheet, Text, Button, Alert, Pressable, View } from 'react-native';
import GeneralSlider from './GeneralSlider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class DailyData extends Component {
  state = { //                                   Current data on the 5 categories and date

    body: {
      type: 'body',
      description: 'Fittness, sleep and health',
      color: "#76B947",
      goal: {
        name: 'goalName',
        maxValue: 0,
        end: 'end-date',
        description: 'description',
      },
      meanScore: 0,
      goalScore: 0,
      defaultScore: 1,
    },

    creativity: {
      type: 'creativity',
      description: 'Art, ingenuity and code',
      color: "#37ADE4",
      goal: {
        name: 'goalName',
        maxValue: 0,
        end: 'end-date',
        description: 'description',
      },
      meanScore: 0,
      goalScore: 0,
      defaultScore: 1,
    },

    learning: {
      type: 'learning',
      description: 'School, language and coding',
      color: "#EB5656",
      goal: {
        name: 'goalName',
        maxValue: 0,
        end: 'end-date',
        description: 'description',
      },
      meanScore: 0,
      goalScore: 0,
      defaultScore: 1,
    },

    sociality: {
      type: 'sociality',
      description: 'Meet, socials and PR',
      color: "#DA56ED",
      goal: {
        name: 'goalName',
        maxValue: 0,
        end: 'end-date',
        description: 'description',
      },
      meanScore: 0,
      goalScore: 0,
      defaultScore: 1,
    },

    mind: {
      type: 'mind',
      description: 'Awareness, entreprenuership, empathy',
      color: "#EAAA39",
      goal: {
        name: 'goalName',
        maxValue: 0,
        end: 'end-date',
        description: '',
      },
      meanScore: 0,
      goalScore: 0,
      defaultScore: 1,
    },

    date: this.isNewDay ?
      new Date().getDate() - 1 + '/' + new Date().getMonth() + '/' + new Date().getFullYear() :
      new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()

  };

  componentDidMount() { //                       Setup 
    this.retriveData();
    this.calculateMeans();
    this.interval = setInterval(() => { if (this.isNewDay) { this.newDayReset }; }, 5000);
  }

  retriveData() { //                             Retrives data from AsyncStorage and sets them in State
    AsyncStorage.getItem(this.state.date)
      .then((value) => {
        const data = JSON.parse(value);
        Object.keys(value).length < 2
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

  calculateMeans() { //                          Calculates the means and sets them in State
    const PreviousWeeks = [
      new Date().getDate() - 6 + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      new Date().getDate() - 5 + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      new Date().getDate() - 4 + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      new Date().getDate() - 3 + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      new Date().getDate() - 2 + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      new Date().getDate() - 1 + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
    ]

    AsyncStorage.multiGet(PreviousWeeks, (err, stores) => {

      var meanBody = 0
      var meanCreativity = 0
      var meanLearning = 0
      var meanSociality = 0
      var meanMind = 0

      stores.map((result, i, store) => {

        let key = store[i][0];
        let value = store[i][1];
        const data = JSON.parse(value)

        data == null
          ? null
          : (meanBody += (data.body.defaultScore + data.body.goalScore) * (i + 1),
            meanCreativity += (data.creativity.defaultScore + data.creativity.goalScore) * (i + 1),
            meanLearning += (data.learning.defaultScore + data.learning.goalScore) * (i + 1),
            meanSociality += (data.sociality.defaultScore + data.sociality.goalScore) * (i + 1),
            meanMind += (data.mind.defaultScore + data.mind.goalScore) * (i + 1))

      });

      this.setState((prevState) => ({
        body: {
          ...prevState.body,
          meanScore: Math.floor(meanBody / 28)
        },
        creativity: {
          ...prevState.creativity,
          meanScore: Math.floor(meanCreativity / 28)

        },
        learning: {
          ...prevState.learning,
          meanScore: Math.floor(meanLearning / 28)
        },
        sociality: {
          ...prevState.sociality,
          meanScore: Math.floor(meanSociality / 28)
        },
        mind: {
          ...prevState.mind,
          meanScore: Math.floor(meanMind / 28)
        },
      }));
    });
  }

  isNewDay() { //                                Returns true after 4am of a new day
    var isNewDay = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() !== this.state.date
    var isAfterFour = 4 <= new Date().getHours()
    return (isNewDay && isAfterFour)
  }

  newDayReset() { //                             Restores State to default values if isNewDay()
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

  slidingHandler = (newScore, type, kindOfSlider) => { // Updates State when sliding 
    this.setState({ [type]: { ...this.state[type], [kindOfSlider]: newScore } });

  }

  save() { //                                    Saves on AsyncStorage when slidingHandler is called
    const toSave = { // TODO save only what has been updated
      body: {
        meanScore: this.state.body.meanScore,
        goalScore: this.state.body.goalScore,
        defaultScore: this.state.body.defaultScore,
      },
      creativity: {
        meanScore: this.state.creativity.meanScore,
        goalScore: this.state.creativity.goalScore,
        defaultScore: this.state.creativity.defaultScore,
      },
      learning: {
        meanScore: this.state.learning.meanScore,
        goalScore: this.state.learning.goalScore,
        defaultScore: this.state.learning.defaultScore,
      },
      sociality: {
        meanScore: this.state.sociality.meanScore,
        goalScore: this.state.sociality.goalScore,
        defaultScore: this.state.sociality.defaultScore,
      },
      mind: {
        meanScore: this.state.mind.meanScore,
        goalScore: this.state.mind.goalScore,
        defaultScore: this.state.mind.defaultScore,
      },
      date: this.state.date
    }
    AsyncStorage.setItem(this.state.date, JSON.stringify(toSave)) // save everything in Async Storage
      .then(() => {
        null;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    this.save() //TODO implement autosave 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <Text style={{ color: 'white', fontSize: 24 }}>{this.state.date}{this.isNewDay ? ': go to sleep my boy' : ''}</Text>
        {['body', 'creativity', 'learning', 'sociality', 'mind'].map((type) => (
          <GeneralSlider
            key={type}
            typeData={this.state[type]}
            slidingHandler={this.slidingHandler}
          />
        ))}
      </>
    );
  }
}




//  TO PRINT THE STORAGE

/*
    AsyncStorage.getAllKeys().then((keyArray) => {
      AsyncStorage.multiGet(keyArray).then((keyValArray) => {
        let myStorage = {};
        for (let keyVal of keyValArray) {
          myStorage[keyVal[0]] = keyVal[1]
        }
        console.log('CURRENT STORAGE: ', myStorage);
      })
    });
*/