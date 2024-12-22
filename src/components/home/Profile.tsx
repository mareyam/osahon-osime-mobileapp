import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import LoginComp from '../auth/login/LoginComp';

interface ProfileProps {
  isCollapsed?: boolean;
  navigation?: any;
}

const Profile = ({isCollapsed, navigation}: ProfileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const session = {
    user: {
      name: 'John Doe',
    },
  };

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      console.log('Display name is: ' + (user.displayName || 'N/A'));
      console.log('Email is: ' + (user.email || 'N/A'));

      if (user.displayName) {
        const nameParts = user.displayName.split(' ');
        const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
        const secondInitial = nameParts[1]?.charAt(0).toUpperCase() || '';
        setUserName(`${firstInitial}${secondInitial}`);
      } else if (user.email) {
        const firstLetter = user.email.charAt(0).toUpperCase();
        setUserName(firstLetter);
      } else {
        setUserName('N/A');
      }
    }
  }, []);

  const handleLogout = async () => {
    auth()
      .signOut()
      .then(response => {
        console.log('response :', response);
        Alert.alert('User signed out!');
        navigation.navigate('Login');
        setUserName('');
      })
      .catch(error => {
        console.log('error :', error);
        Alert.alert('Not able to logout!');
      });
  };

  //try
  // async function onGoogleSignOut() {
  //   try {
  //     // Sign out from Firebase authentication
  //     await auth().signOut();

  //     // Check if the user is signed in with Google
  //     const isSignedIn = await GoogleSignin.isSignedIn();
  //     if (isSignedIn) {
  //       // Revoke access to the Google account
  //       await GoogleSignin.revokeAccess();
  //       // Sign out from Google
  //       await GoogleSignin.signOut();
  //       console.log('Google account disconnected successfully.');
  //       Alert.alert('Sign Out', 'You have been signed out.');
  //     } else {
  //       console.log('No Google account is connected.');
  //       Alert.alert('Sign Out', 'No account is connected.');
  //     }
  //   } catch (error) {
  //     console.error('Error during Google Sign-Out', error);
  //     Alert.alert(
  //       'Error',
  //       error.message || 'An error occurred while signing out.',
  //     );
  //   }
  // }
  return (
    <View style={tw`relative`}>
      <TouchableOpacity
        style={tw`rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center`}
        onPress={toggleDropdown}>
        <Text style={tw`text-white font-light text-base`}>
          {session ? userName : ''}
        </Text>
      </TouchableOpacity>

      {/* Dropdown Menu */}
      {isOpen && (
        <View
          style={tw`absolute w-48 z-10 border border-neutral-600 bg-[#2F2F2F] rounded-md shadow-lg ${
            isCollapsed ? 'right-0 top-12' : 'left-12 bottom-4'
          }`}>
          <TouchableOpacity style={tw`px-4 py-2 hover:bg-gray-700 rounded-lg`}>
            <Text style={tw`text-neutral-300 text-sm`}>Settings</Text>
          </TouchableOpacity>
          <View style={tw`w-full h-px bg-neutral-600 my-2`} />
          <Pressable
            onPress={handleLogout}
            style={tw`px-4 py-2 hover:bg-gray-700 rounded-lg`}>
            <Text style={tw`text-neutral-300 text-sm`}>Logout</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Profile;
