import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from 'react-native';
import tw from 'twrnc';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from './Toast';
import Tags from './Tags';

const MainScreen = () => {
  const [textareaHeight, setTextareaHeight] = useState(64);
  const [sendMessage, setSendMessage] = useState(false);

  const handleInput = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const clampedHeight = Math.min(contentHeight, 96);
    setTextareaHeight(clampedHeight);
  };

  const handleSend = () => {
    setSendMessage(true);
    setTimeout(() => {
      setSendMessage(false);
    }, 3000);
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-[#171717] p-4`}>
      <View style={tw`mb-5`}>
        <Text style={tw`text-white text-4xl font-medium text-center`}>
          What can I help with?
        </Text>
      </View>

      <View style={tw`mt-5`}>
        <Tags />
      </View>

      <View style={tw`w-full rounded-3xl bg-[#2F2F2F] relative p-4`}>
        <TextInput
          multiline
          onContentSizeChange={handleInput}
          style={[
            tw`min-h-[64px] max-h-[96px] w-full text-white bg-transparent text-base overflow-hidden`,
            {height: textareaHeight},
          ]}
          placeholder="Message ChatGPT"
          placeholderTextColor="#B3B3B3"
        />
        <TouchableOpacity
          onPress={handleSend}
          style={tw`absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full items-center justify-center`}>
          {/* <Ionicons name="arrow-up-sharp" size={20} color="black" /> */}
        </TouchableOpacity>
      </View>

      {sendMessage && <Toast message="LLM not integrated yet!" />}
    </View>
  );
};

export default MainScreen;
