import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginComp from '../components/auth/login/LoginComp';
import SignupComp from '../components/auth/signup/SignupComp';
import HomeComp from '../components/home';
import Profile from '../components/home/Profile';
import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      console.log('user issssssssssssssssssss');
      console.log(user?.email);
    });
    return subscriber;
  }, []);

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginComp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupComp}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeComp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: true}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
