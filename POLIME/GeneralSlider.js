import React, {Component} from 'react';
import {Animated, StyleSheet, Text, Pressable, View} from 'react-native';
//import Slider from 'react-native-slider';
import { Slider } from 'react-native-elements';

export default class GeneralSlider extends Component {
  constructor(props) {
    super(props);
  }

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
              ? {height: '80%', marginTop: -60}
              : null,
          ]}
          onPress={() => this.props.focusOnMe(this.props.type)}>
          <Slider
            type={this.props.type}
            style={styles.slider}
            disabled={true}
            maximumValue={20}
            thumbTintColor={'rgba(0, 0, 0, 0)'}
            value={this.props.score}
            animateTransitions={true}
            minimumTrackTintColor={this.props.thumbColor}
            maximumTrackTintColor={'#e5e5e5'}
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
              <Text>
                {this.props.typeData == undefined
                  ? ''
                  : this.props.typeData.pep}
              </Text>
              <Text>
                {this.props.typeData == undefined
                  ? ''
                  : this.props.typeData.goal.name}
              </Text>
              <Text>
                {this.props.typeData == undefined
                  ? ''
                  : this.props.typeData.goal.description}
              </Text>
              <Text>
                {this.props.typeData == undefined
                  ? ''
                  : this.props.typeData.goal.end}
              </Text>
              <Slider
                style={styles.slider}
                maximumValue={this.props.typeData.goal.maxValue}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.props.typeData.goalScore}
                animateTransitions={true}
                onValueChange={(goalScore) => {
                  if (goalScore != this.props.typeData.goalScore) {
                    this.props.slidingHandler(goalScore, this.props.type);
                  }
                }}
                allowTouchTrack={true}        
                minimumTrackTintColor={this.props.thumbColor}
                maximumTrackTintColor={'#e5e5e5'}
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
                maximumValue={this.props.typeData.defaultMaxValue}
                step={1}
                thumbTintColor={'rgba(0, 0, 0, 0)'}
                value={this.props.typeData.defaultScore}
                animateTransitions={true}
                onValueChange={(defaultScore) => {
                  if (defaultScore != this.props.typeData.defaultScore) {
                    this.props.slidingHandlerDefault(
                      defaultScore,
                      this.props.type,
                    );
                  }
                }}
                allowTouchTrack={true} 
                minimumTrackTintColor={this.props.thumbColor}
                maximumTrackTintColor={'#e5e5e5'}
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
    borderColor: '#CDCDCD',
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: -30,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
