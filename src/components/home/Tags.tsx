import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import tw from 'twrnc';
import Toast from './Toast';

const Tags = () => {
  const [sendMessage, setSendMessage] = useState<boolean>(false);

  const handleSend = () => {
    setSendMessage(true);
    setTimeout(() => {
      setSendMessage(false);
    }, 3000);
  };

  const tags = [
    {label: 'Create image', icon: '🖼️'},
    {label: 'Make a plan', icon: '📝'},
    {label: 'Analyze data', icon: '📊'},
    {label: 'Code', icon: '💻'},
    {label: 'Summarize text', icon: '🔍'},
    {label: 'Write a letter', icon: '📝'},
  ];

  return (
    <View
      style={tw`justify-center align-center items-center flex-row flex-wrap p-4 rounded-lg`}>
      {tags.map((tag, index) => (
        <TouchableOpacity
          onPress={handleSend}
          key={index}
          style={tw`m-2 gap-2 flex-row items-center justify-center space-x-1 px-4 py-1 border border-gray-600 text-gray-400 rounded-full transition bg-transparent`}>
          <Text style={tw`text-lg`}>{tag.icon}</Text>
          <Text style={tw`text-xs text-neutral-300`}>{tag.label}</Text>
        </TouchableOpacity>
      ))}
      <Toast message={sendMessage} text="LLM not integrated yet!" />
    </View>
  );
};

export default Tags;
