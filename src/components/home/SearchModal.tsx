import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';

const SearchModal = ({onClose}: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrompts = searchTerm
    ? prompts.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : prompts.slice(0, 4);

  return (
    <View
      style={tw`absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
      <View
        style={tw`border border-neutral-700 bg-gray-800 rounded-2xl w-11/12 max-w-lg h-96`}>
        {/* Search Input and Close Button */}
        <View
          style={tw`flex-row items-center justify-between border-b border-neutral-700`}>
          <TextInput
            onChangeText={setSearchTerm}
            style={tw`flex-1 bg-transparent text-neutral-500 px-5 py-3 text-base`}
            placeholder="Search chats..."
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity onPress={onClose} style={tw`p-2 rounded-full mx-2`}>
            <Image
              source={require('./icons/close.png')} 
              // Replace with your close icon path
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
        </View>

        {/* Prompts and Suggestions */}
        <View style={tw`px-4 mt-4 flex-1`}>
          {filteredPrompts.length > 0 ? (
            <>
              {/* "New Chat" Button */}
              <TouchableOpacity
                onPress={onClose}
                style={tw`flex-row items-center gap-2 py-3 rounded-lg hover:bg-gray-700`}>
                <Image
                  source={require('./icons/create.png')} // Replace with your create icon path
                  style={tw`w-5 h-5`}
                />
                <Text style={tw`text-white text-sm`}>New chat</Text>
              </TouchableOpacity>

              {/* Prompt List */}
              <ScrollView style={tw`mt-2`}>
                {filteredPrompts.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={tw`flex-row items-center gap-2 py-2 rounded-lg hover:bg-gray-700`}>
                    <Image
                      source={require('./icons/conversation.png')} // Replace with your conversation icon path
                      style={tw`w-6 h-6 rounded-lg`}
                    />
                    <Text
                      style={tw`text-sm text-neutral-200 flex-1`}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          ) : (
            <View style={tw`flex-row items-center gap-2 mt-4`}>
              <Image
                source={require('./icons/search.png')} // Replace with your search icon path
                style={tw`w-6 h-6`}
              />
              <Text style={tw`text-neutral-500 text-sm`}>No results</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchModal;

// Prompts Data
const prompts = [
  'Write a short story about a time traveler who visits the past but accidentally alters a significant historical event.',
  'Describe a futuristic world where artificial intelligence has taken over human society and how people adapt to this new reality.',
  'Imagine a world where every person is born with a unique superpower, but one person is born without any powers. How do they navigate life?',
  'Write a letter from a person stranded on a deserted island, pleading for rescue while describing their thoughts and experiences.',
  'Create a dialogue between two characters who are having a disagreement about the ethics of cloning animals for medical research.',
];
