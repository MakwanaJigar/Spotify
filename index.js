/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import store from './src/Component/redux/store';
import { Provider } from 'react-redux';


// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => require('./src/Service'));
AppRegistry.registerComponent(appName, () => App);
