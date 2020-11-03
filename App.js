/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import Nav from './src/Nav/screens';

export const store = configureStore();

const APP = () => (
    <Provider store={store}>
      <Nav />
    </Provider>
);

export default APP;
