import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, Animated, StyleSheet} from 'react-native';

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
    <View style={styles.container}>
      {message && (
        <Animated.View
          style={[
            styles.toast,
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
          <Text style={styles.toastText}>{text}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{translateX: -150}], // Center horizontally
    width: 300,
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  toastText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Toast;
