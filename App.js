/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigation from './navigation/rootNavigation';
import { View, Text, NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigation/>
    </NativeBaseProvider>
  );
}