import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Notifications } from 'react-native-notifications';
import DailyData from './DailyData';

export default class App extends React.Component {
  constructor() {
    super();
    // Request permissions on iOS, refresh token on Android
    Notifications.registerRemoteNotifications();

    Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
      // TODO: Send the token to my server so it could send back push notifications...
      console.log("Device Token Received", event.deviceToken);
    });
    Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
      console.error(event);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <DailyData />
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
