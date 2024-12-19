import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
  Image,
} from 'react-native';
import tw from 'twrnc';
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
    <View
      style={tw`relative items-center justify-center bg-[#171717] p-4 h-[100%]`}>
      {/* Title */}
      <View style={tw`mb-5`}>
        <Text style={tw`text-white text-4xl font-medium text-center`}>
          What can I help with?
        </Text>
      </View>

      {/* Tags Section */}
      <View style={tw`mt-5`}>
        <Tags />
      </View>

      {/* Absolute Positioned Input */}
      <View
        style={tw`absolute bottom-4 w-full rounded-3xl bg-[#2F2F2F] p-2 px-3 pb-5`}>
        <TextInput
          multiline
          onContentSizeChange={handleInput}
          style={[
            tw`w-full min-h-[56px] max-h-[96px] rounded-lg bg-transparent text-neutral-100 text-base`,
            {height: textareaHeight},
          ]}
          placeholder="Message ChatGPT"
          placeholderTextColor="#B3B3B3"
          textAlignVertical="top"
        />
        <View style={tw`w-full rounded-3xl relative justify-end flex-row`}>
          <TouchableOpacity
            onPress={handleSend}
            style={tw`border w-8 h-8 bg-white rounded-full items-center justify-center`}>
            <Image
              source={require('../../public/icons/sendButton.png')}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Toast Message */}
      {sendMessage && <Toast message="LLM not integrated yet!" />}
    </View>

    // <View style={tw`relative items-center justify-center bg-[#171717] p-4`}>
    //   <View style={tw`mb-5`}>
    //     <Text style={tw`text-white text-4xl font-medium text-center`}>
    //       What can I help with?
    //     </Text>
    //   </View>

    //   <View style={tw`mt-5`}>
    //     <Tags />
    //   </View>

    //   <View
    //     style={tw`absolute bottom-4 w-full  rounded-3xl bg-[#2F2F2F] p-2 px-3 pb-5`}>
    //     <TextInput
    //       multiline
    //       onContentSizeChange={handleInput}
    //       style={[
    //         tw`w-full min-h-[56px] max-h-[96px] rounded-lg bg-transparent text-neutral-100 text-base`,
    //         {height: textareaHeight},
    //       ]}
    //       placeholder="Message ChatGPT"
    //       placeholderTextColor="#B3B3B3"
    //       textAlignVertical="top"
    //     />
    //     <View style={tw`w-full rounded-3xl relative justify-end flex-row`}>
    //       <TouchableOpacity
    //         onPress={handleSend}
    //         style={tw`border w-8 h-8 bg-white rounded-full items-center justify-center`}>
    //         <Image
    //           source={require('../../public/icons/sendButton.png')}
    //           style={{width: 20, height: 20}}
    //           resizeMode="contain"
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   </View>

    //   {sendMessage && <Toast message="LLM not integrated yet!" />}
    // </View>
  );
};

export default MainScreen;
