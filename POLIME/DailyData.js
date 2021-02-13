import React, {Component} from 'react';
import {StyleSheet, Text, Button, Pressable, View} from 'react-native';
import {color} from 'react-native-reanimated';
import GeneralSlider from './GeneralSlider';

export default class DailyData extends Component {
  state = {
    showOnlySlider: 'creative',
  };

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      showOnlySlider: 'clicked slider name',
    });
  }

  render() {
    return (
      <>
        <Text style={{color: 'white'}} onPress={this.handler}>
          {this.state.showOnlySlider}
        </Text>
        <GeneralSlider
          thumbColor="#02b881"
          type="active"
          showOnlySlider={this.state.showOnlySlider}
          handler={this.handler}
          onClick={this.handler}
        />
        <GeneralSlider
          thumbColor="#1a09d6"
          type="creative"
          showOnlySlider={this.state.showOnlySlider}
          handler={this.handler}
        />
        <GeneralSlider
          thumbColor="#d60954"
          type="learning"
          showOnlySlider={this.state.showOnlySlider}
        />
        <GeneralSlider
          thumbColor="#d68409"
          type="social"
          showOnlySlider={this.state.showOnlySlider}
        />
        <GeneralSlider
          thumbColor="#d6f000"
          type="self-caring"
          showOnlySlider={this.state.showOnlySlider}
        />
        <Button
          title="show all sliders"
          onPress={() => {
            this.setState({showOnlySlider: 'all'});
          }}></Button>
      </>
    );
  }
}
