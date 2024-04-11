/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { getFireStore } from '@react-native-firebase/firestore'
import { getAuth } from '@react-native-firebase/auth'
import { initializeApp } from '@react-native-firebase/app';

// Initialize Firebase
initializeApp();


AppRegistry.registerComponent(appName, () => App);