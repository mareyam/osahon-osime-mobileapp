import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const LoginComp = ({navigation}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getUserCollections = async () => {
    const usersCollection = await firestore().collection('Users').get();
    console.log('usersCollection');
    console.log(usersCollection);
  };

  useEffect(() => {
    getUserCollections();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '129025063036-fs3qkju7hh7iaq21el7b390c68erkbpr.apps.googleusercontent.com',
    });
  });

  const handleEmailSignin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success', 'User signed in successfully');
        navigation.navigate('Home');
      })
      .catch(err => {
        console.error('Error during login:', err);
        Alert.alert('Login Error', err.message);
      });
  };

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const signInResult: any = await GoogleSignin.signIn();

      const idToken = signInResult?.data.idToken;
      console.log(signInResult?.data);

      if (!idToken) {
        throw new Error('ID token not found');
      }
      console.log(idToken);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Success login');

      // return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      console.error('Error during Google Sign-In', error);
      Alert.alert('Login Failed', error.message);
    }
  }

  const handleRouteSignup = () => {
    console.log('hi');
    navigation.navigate('Signup');
  };
  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100 px-6`}>
      <View style={tw`w-full max-w-md p-6`}>
        <Text style={tw`text-4xl font-bold text-center mb-6`}>
          Welcome Back!
          {'\n'} Login
        </Text>

        <View>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={tw`bg-white text-sm w-full p-3 mb-4 border rounded-lg ${
              isFocused
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-gray-300'
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={tw`bg-white text-sm w-full p-3 mb-4 border rounded-lg ${
              isFocused
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-gray-300'
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <Pressable
            onPress={handleEmailSignin}
            style={
              ({pressed}) =>
                pressed
                  ? tw`p-3 bg-green-700 rounded-lg` // Darker green when pressed
                  : tw`p-3 bg-green-600 rounded-lg` // Default green
            }>
            <Text style={tw`text-white text-center font-semibold`}>
              Continue
            </Text>
          </Pressable>

          <Text style={tw`text-xs text-center text-gray-500 my-4`}>
            Don&apos;t have an account?{' '}
            <Text
              onPress={handleRouteSignup}
              style={tw`text-green-500 font-semibold`}>
              Sign Up
            </Text>
          </Text>
        </View>

        {/* OR Separator */}
        <View style={tw`flex-row items-center my-4`}>
          <View style={tw`flex-1 h-px bg-gray-300`} />
          <Text style={tw`mx-2 text-gray-500`}>OR</Text>
          <View style={tw`flex-1 h-px bg-gray-300`} />
        </View>

        <View style={tw`gap-y-3`}>
          <Pressable
            onPress={onGoogleButtonPress}
            style={({pressed}) =>
              tw.style(
                `flex-row items-center justify-center w-full p-3 border border-neutral-300 rounded-lg`,
                pressed && `bg-gray-200`,
              )
            }>
            <Image
              source={require('../../../public/logos/Google.png')}
              style={tw`w-6 h-6 mr-2`}
            />
            <Text style={tw`text-sm`}>Continue with Google</Text>
          </Pressable>

          {/* <Pressable
            // onPress={handleGithubSignIn}
            style={({pressed}) =>
              tw.style(
                `flex-row items-center justify-center w-full p-3 border border-neutral-300 rounded-lg`,
                pressed && `bg-gray-300`,
              )
            }>
            <Image
              source={require('../../../public/logos/Github.png')}
              style={tw`w-6 h-6 mr-2`}
            />
            <Text style={tw`text-sm`}>Continue with GitHub</Text>
          </Pressable> */}
        </View>
      </View>
    </View>
  );
};

export default LoginComp;
