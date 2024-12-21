import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import auth from '@react-native-firebase/auth';

const SignupComp = ({navigation}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input

  const handleGoogleSignUp = async () => {
    console.log('GitHub Sign In');
  };

  const handleEmailSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User Created with credentials provided');
        navigation.navigate('Login');
      })
      .catch((err: any) => {
        console.log('err occcc');
        // Alert.alert('Error', err.message);
      });
  };

  const handleRouteSignin = () => {
    console.log('hi');
    navigation.navigate('Login');
  };
  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100 px-6`}>
      <View style={tw`w-full max-w-md p-6`}>
        <Text style={tw`text-4xl font-bold text-center mb-6`}>
          Welcome to OsahonOsime!
          {'\n'}
        </Text>

        <View>
          {/* Email Input */}
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail} // Update email state
            style={tw`bg-white text-sm w-full p-3 mb-4 border rounded-lg ${
              isFocused
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-gray-300'
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Password Input */}
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword} // Update password state
            secureTextEntry
            style={tw`bg-white text-sm w-full p-3 mb-4 border rounded-lg ${
              isFocused
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-gray-300'
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Confirm Password Input */}
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword} // Update confirmPassword state
            secureTextEntry
            style={tw`bg-white text-sm w-full p-3 mb-4 border rounded-lg ${
              isFocused
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-gray-300'
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Continue Button */}
          <Pressable
            onPress={handleEmailSignup}
            style={({pressed}) =>
              tw.style(
                'p-3 rounded-lg',
                pressed ? 'bg-green-700' : 'bg-green-600',
              )
            }>
            <Text style={tw`text-white text-center font-semibold`}>
              Continue
            </Text>
          </Pressable>

          <Text style={tw`text-xs text-center text-gray-500 my-4`}>
            Already have an account?{' '}
            <Text onPress={handleRouteSignin} style={tw`text-green-500`}>
              Sign In
            </Text>
          </Text>
        </View>

        {/* OR Separator */}
        <View style={tw`flex-row items-center my-4`}>
          <View style={tw`flex-1 h-px bg-gray-300`} />
          <Text style={tw`mx-2 text-gray-500`}>OR</Text>
          <View style={tw`flex-1 h-px bg-gray-300`} />
        </View>

        {/* Social Login Buttons */}
        <View style={tw`gap-y-3`}>
          {/* Google Sign-In */}
          <Pressable
            onPress={handleGoogleSignUp}
            style={({pressed}) =>
              tw.style(
                'flex-row items-center justify-center w-full p-3 border border-neutral-300 rounded-lg',
                pressed && 'bg-gray-200',
              )
            }>
            <Image
              source={require('../../../public/logos/Google.png')}
              style={tw`w-6 h-6 mr-2`}
            />
            <Text style={tw`text-sm`}>Continue with Google</Text>
          </Pressable>

          {/* GitHub Sign-In */}
          {/* <Pressable
            onPress={handleGithubSignIn}
            style={({pressed}) =>
              tw.style(
                'flex-row items-center justify-center w-full p-3 border border-neutral-300 rounded-lg',
                pressed && 'bg-gray-300',
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

export default SignupComp;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Pressable,
//   Alert,
// } from 'react-native';
// import tw from 'twrnc';
// import auth from '@react-native-firebase/auth';

// const SignupComp = () => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleGithubSignIn = async () => {
//     console.log('GitHub Sign In');
//   };

//   const handleGoogleSignUp = () => {
//     auth()
//       .createUserWithEmailAndPassword('test1@gmail.com', 'Password')
//       .then(() => {
//         Alert.alert('User Created');
//       })
//       .catch((err: any) => {
//         console.log(err);
//       });
//   };

//   return (
//     <View style={tw`flex-1 items-center justify-center bg-gray-100 px-6`}>
//       <View style={tw`w-full max-w-md p-6`}>
//         <Text style={tw`text-4xl font-bold text-center mb-6`}>
//           Welcome Back!
//           {'\n'} Login
//         </Text>

//         <View>
//           <TextInput
//             placeholder="Enter Email"
//             style={tw`bg-white text-sm w-full p-3 mb-4 border rounded-lg ${
//               isFocused
//                 ? 'border-green-500 ring-2 ring-green-500'
//                 : 'border-gray-300'
//             }`}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//           />

//           <Pressable
//             onPress={handleGoogleSignUp}
//             style={
//               ({pressed}) =>
//                 pressed
//                   ? tw`p-3 bg-green-700 rounded-lg` // Darker green when pressed
//                   : tw`p-3 bg-green-600 rounded-lg` // Default green
//             }>
//             <Text style={tw`text-white text-center font-semibold`}>
//               Continue
//             </Text>
//           </Pressable>

//           <Text style={tw`text-xs text-center text-gray-500 my-4`}>
//             Already have an Account?
//             <Text style={tw`text-green-500`}>Sign Up</Text>
//           </Text>
//         </View>

//         {/* OR Separator */}
//         <View style={tw`flex-row items-center my-4`}>
//           <View style={tw`flex-1 h-px bg-gray-300`} />
//           <Text style={tw`mx-2 text-gray-500`}>OR</Text>
//           <View style={tw`flex-1 h-px bg-gray-300`} />
//         </View>

//         <View style={tw`gap-y-3`}>
//           <Pressable
//             onPress={handleGoogleSignUp}
//             style={({pressed}) =>
//               tw.style(
//                 `flex-row items-center justify-center w-full p-3 border border-neutral-300 rounded-lg`,
//                 pressed && `bg-gray-200`,
//               )
//             }>
//             <Image
//               source={require('../../../public/logos/Google.png')}
//               style={tw`w-6 h-6 mr-2`}
//             />
//             <Text style={tw`text-sm`}>Continue with Google</Text>
//           </Pressable>

//           <Pressable
//             onPress={handleGithubSignIn}
//             style={({pressed}) =>
//               tw.style(
//                 `flex-row items-center justify-center w-full p-3 border border-neutral-300 rounded-lg`,
//                 pressed && `bg-gray-300`,
//               )
//             }>
//             <Image
//               source={require('../../../public/logos/Github.png')}
//               style={tw`w-6 h-6 mr-2`}
//             />
//             <Text style={tw`text-sm`}>Continue with GitHub</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default SignupComp;
