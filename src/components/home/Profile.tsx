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
      setUserName(user.displayName || user.email);
      const firstLetter = (user.displayName || user.email || '')
        .charAt(0)
        .toUpperCase();
      setUserName(firstLetter);
    }
  }, []);

  const handleLogout = () => {
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
