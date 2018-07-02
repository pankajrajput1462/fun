/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import CameraComponent from './Camera-App.component';
class CamApp extends Component {
  render () {
    return (
     <CameraComponent/>
    );
  }
}

export default CamApp;
