import React, {Component} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import Slider from 'react-native-slider';

export default class GeneralSlider extends Component {
  state = {
    //to inherit
    maxValue1: 10,
    maxValue2: 10,
    //to inherit

    //to make 0 somehow, without destroyng graphics
    //COULDFIX: setting different thumbStyle when value = 0
    value1: 0.5,
    value2: 0.5,
  };

  render() {
    if (
      this.props.showOnlySlider === this.props.type ||
      this.props.showOnlySlider === 'all'
    ) {
      return (
        <Pressable
          style={[
            styles.card,
            this.props.showOnlySlider === this.props.type
              ? {height: '100%', marginTop: -60}
              : null,
          ]}
          onPress={() => this.props.focusOnMe(this.props.type)}>
          <Slider
            type={this.props.type}
            style={styles.slider}
            disabled={true}
            maximumValue={this.state.maxValue1 + this.state.maxValue2}
            thumbTintColor={'rgba(0, 0, 0, 0)'}
            value={this.state.value1 + this.state.value2}
            //animateTransitions={true}
            minimumTrackTintColor={this.props.thumbColor}
            maximumTrackTintColor={'#D9D9D9'}
            trackStyle={{
              height: 15,
              borderRadius: 10,
            }}
            thumbStyle={{
              width: 0,
            }}
          />

          {this.props.showOnlySlider === this.props.type && (
            <View style={{width: '100%'}}>
              <Slider
                style={styles.slider}
                maximumValue={this.state.maxValue1}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.state.value1}
                onValueChange={(value1) => this.setState({value1})}
                allowTouchTrack={true}
                thumbTouchSize={{width: 100, height: 100}} //?
                minimumTrackTintColor={this.props.thumbColor}
                maximumTrackTintColor={'#D9D9D9'}
                trackStyle={{
                  height: 30,
                  borderRadius: 10,
                }}
                thumbStyle={{
                  width: 0,
                }}
              />
              <Slider
                style={styles.slider}
                maximumValue={this.state.maxValue2}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.state.value2}
                onValueChange={(value2) => this.setState({value2})}
                allowTouchTrack={true}
                thumbTouchSize={{width: 100, height: 100}} //?
                minimumTrackTintColor={this.props.thumbColor}
                maximumTrackTintColor={'#D9D9D9'}
                trackStyle={{
                  height: 30,
                  borderRadius: 10,
                }}
                thumbStyle={{
                  width: 0,
                }}
              />
            </View>
          )}
        </Pressable>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  slider: {width: '90%', height: 50, marginHorizontal: 20},
  button: {
    marginHorizontal: 14,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: -30,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
