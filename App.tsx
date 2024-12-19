/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View, Text, Image} from 'react-native';
import tw from 'twrnc';
import LoginComp from './src/components/auth/login/LoginComp';
import SignupComp from './src/components/auth/signup/SignupComp';
import MainScreen from './src/components/home/MainScreen';
import HomeComp from './src/components/home';

function App(): React.JSX.Element {
  return (
    <HomeComp />
    // <MainScreen />
    // <LoginComp />
    // <SignupComp />
    // <View style={tw`p-4 android:pt-2 bg-black dark:bg-black flex flex-row`}>
    //   <View style={tw`p-4 bg-red-500`}>blue box</View>
    //   <View style={tw`p-4 bg-pink-900`}>red box</View>
    //   <View style={tw`p-4 bg-blue-500`}>pink box</View>
    //   <Text style={tw`text-md text-white dark:text-white`}>
    //     Hello{' '}
    //     <Text style={tw`text-2xl text-purple-500 dark:text-white`}>World</Text>
    //   </Text>
    //   <Image
    //     style={tw`h-32 w-24`}
    //     source={{uri: 'https://picsum.photos/id/237/200/300'}}
    //   />
    // </View>
  );
}

export default App;
