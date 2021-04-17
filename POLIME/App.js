import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DailyData from './DailyData';

export default class App extends React.Component {
  state = {
    showOnlySlider: 'all',
  };

  constructor(props) {
    super(props);

    this.focusOnMe = this.focusOnMe.bind(this);
  }

  focusOnMe = (type) => {
    if (type !== this.state.showOnlySlider) {
      this.setState({
        showOnlySlider: type,
      });
    }
  };

  render() {
    return (
      <SafeAreaView
        style={styles.mainContainer}
        onStartShouldSetResponder={() => this.focusOnMe('all')}>
        <DailyData
          showOnlySlider={this.state.showOnlySlider}
          focusOnMe={this.focusOnMe}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    flexWrap: 'wrap'
  },
});
