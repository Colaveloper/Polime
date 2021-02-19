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
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },
  counter: {
    fontSize: 25,
  },
  fab: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
