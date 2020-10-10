import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DailyData from './DailyData';

class HomeScreen extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    const counter = this.state.counter;

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.counter}>Counter: {counter}</Text>
        <TouchableOpacity style={styles.fab} onPress={this.goToDailyData}>
          <Icon name="plus" size={30} color="#150" />
        </TouchableOpacity>
      </View>
    );
  }

  goToDailyData = () => {
    this.props.navigation.navigate('DailyData');
    this.setState({
      counter: this.state.counter + 1,
    });
  };
}

//this are the screens of Polime
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Polime',
      headerTitleStyle: {
        textAlign: 'center',
      },
    }),
  },
  DailyData: {
    screen: DailyData,
    navigationOptions: () => ({
      title: 'Day Review',
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
