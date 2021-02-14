import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable, View} from 'react-native';
import {color} from 'react-native-reanimated';
import GeneralSlider from './GeneralSlider';

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
