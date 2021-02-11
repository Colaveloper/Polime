import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable} from 'react-native';
import GeneralSlider from './GeneralSlider';

export default class DailyData extends Component {
  state = {
    showAll: false,
  };

  closeAllSliders() {
    this.setState({show: false});
    console.log(this.state.show);
  }

  render() {
    return (
      <>
        <GeneralSlider
          thumbColor="#02b881"
          type="physical"
          show={this.state.showAll}
        />
        <GeneralSlider
          thumbColor="#1a09d6"
          type="creativity"
          show={this.state.showAll}
        />
        <GeneralSlider
          thumbColor="#d60954"
          type="learning"
          show={this.state.showAll}
        />
        <GeneralSlider
          thumbColor="#d68409"
          type="social"
          show={this.state.showAll}
        />
        <GeneralSlider
          thumbColor="#d6f000"
          type="self-care"
          show={this.state.showAll}
        />
        <Button
          title="close all sliders"
          onPress={() => {
            this.setState({showAll: !this.state.showAll});
          }}></Button>
      </>
    );
  }
}
