/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
