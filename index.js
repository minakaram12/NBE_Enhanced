/**
 * @format
 */

// import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import AppProviders from './app/AppProviders';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppProviders);
