import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';
import tw from 'twrnc';

const Toast = ({message, text}: any) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (message) {
      // Fade in
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Fade out after 3 seconds
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }, 3000);
      });
    }
  }, [message, opacity]);

  return (
    <View style={tw`absolute bottom-12 w-full items-center`}>
      {message && (
        <Animated.View
          style={[
            tw`bg-gray-800 px-4 py-2 rounded-lg shadow-lg`,
            {
              opacity,
              transform: [
                {
                  translateY: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0], // Moves up as it fades in
                  }),
                },
              ],
            },
          ]}>
          <Text style={tw`text-white text-center text-sm`}>
            {/* {text} */}
          LLM is not integrated yet.

          </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Toast;
