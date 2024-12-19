import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import Profile from './Profile';

const Sidebar = ({toggleWidth, openSearch}: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View
      style={tw`bg-[#171717] border-r border-r-2 border-neutral-800 w-full p-4 space-y-4`}>
      {/* Top Bar */}
      <View style={tw`flex flex-row justify-between`}>
        {/* Sidebar Toggle Button */}
        <TouchableOpacity onPress={toggleWidth} style={tw`p-1 rounded-lg`}>
          <Image
            source={require('../../public/icons/hamburger.png')}
            style={tw`w-6 h-6`}
          />
        </TouchableOpacity>

        {/* Search and Create Buttons */}
        <View style={tw`flex flex-row gap-2`}>
          <TouchableOpacity onPress={openSearch} style={tw`p-1 rounded-lg`}>
            <Image
              source={require('../../public/icons/search.png')}
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-1 rounded-lg`}>
            <Image
              source={require('../../public/icons/create.png')}
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={toggleWidth}
        style={tw`flex flex-row items-center gap-2 py-2 rounded-xl`}>
        <View
          style={tw`w-8 h-8 rounded-full border border-neutral-600 items-center justify-center`}>
          <Image
            source={require('../../public/icons/n8n.png')}
            style={tw`w-5 h-3`}
          />
        </View>
        <Text style={tw`text-white text-xs`}>Trigger N8n automations</Text>
      </TouchableOpacity>

      {/* Prompts List */}
      <ScrollView style={tw`space-y-1 max-h-[90%]`}>
        {prompts.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelect(index)}
            style={tw`p-2 rounded-lg ${
              selectedIndex === index ? 'bg-neutral-700' : ''
            }`}>
            <Text
              style={tw`text-sm ${
                selectedIndex === index ? 'text-white' : 'text-neutral-200'
              }`}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Profile Section */}
      <View
        style={tw`w-full flex md:hidden absolute bottom-0 left-0 px-4 h-12`}>
        <Profile isCollapsed={false} />
      </View>
    </View>
  );
};

export default Sidebar;

const prompts = [
  'Write a short story about a time traveler who visits the past but accidentally alters a significant historical event.',
  'Describe a futuristic world where artificial intelligence has taken over human society and how people adapt to this new reality.',
  'Imagine a world where every person is born with a unique superpower, but one person is born without any powers. How do they navigate life?',
  'Write a letter from a person stranded on a deserted island, pleading for rescue while describing their thoughts and experiences.',
  'Create a dialogue between two characters who are having a disagreement about the ethics of cloning animals for medical research.',
  'Write about a character who discovers they are the last person on Earth after a mysterious event wipes out humanity.',
  'Describe a city where dreams are sold as a commodity, and people can buy, sell, or trade their dreams.',
  'Imagine an alternate reality where humans live underwater, and the discovery of a new species challenges their understanding of the ocean.',
  'Write a scene where a detective tries to solve a mystery in a world where every person has the ability to read minds.',
  'Create a narrative where the protagonist discovers that their favorite childhood toy is secretly an ancient artifact with magical powers.',
  'Write a short story about a time traveler who visits the past but accidentally alters a significant historical event.',
  'Describe a futuristic world where artificial intelligence has taken over human society and how people adapt to this new reality.',
  'Imagine a world where every person is born with a unique superpower, but one person is born without any powers. How do they navigate life?',
  'Write a letter from a person stranded on a deserted island, pleading for rescue while describing their thoughts and experiences.',
  'Create a dialogue between two characters who are having a disagreement about the ethics of cloning animals for medical research.',
  'Write about a character who discovers they are the last person on Earth after a mysterious event wipes out humanity.',
  'Describe a city where dreams are sold as a commodity, and people can buy, sell, or trade their dreams.',
  'Imagine an alternate reality where humans live underwater, and the discovery of a new species challenges their understanding of the ocean.',
  'Write a scene where a detective tries to solve a mystery in a world where every person has the ability to read minds.',
  'Create a narrative where the protagonist discovers that their favorite childhood toy is secretly an ancient artifact with magical powers.,',
  'Write a short story about a time traveler who visits the past but accidentally alters a significant historical event.',
  'Describe a futuristic world where artificial intelligence has taken over human society and how people adapt to this new reality.',
  'Imagine a world where every person is born with a unique superpower, but one person is born without any powers. How do they navigate life?',
  'Write a letter from a person stranded on a deserted island, pleading for rescue while describing their thoughts and experiences.',
  'Create a dialogue between two characters who are having a disagreement about the ethics of cloning animals for medical research.',
  'Write about a character who discovers they are the last person on Earth after a mysterious event wipes out humanity.',
  'Describe a city where dreams are sold as a commodity, and people can buy, sell, or trade their dreams.',
  'Imagine an alternate reality where humans live underwater, and the discovery of a new species challenges their understanding of the ocean.',
  'Write a scene where a detective tries to solve a mystery in a world where every person has the ability to read minds.',
  'Create a narrative where the protagonist discovers that their favorite childhood toy is secretly an ancient artifact with magical powers.',
];
// import React from 'react';
// import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
// import tw from 'twrnc';
// import Profile from './Profile';

// const Sidebar = ({toggleWidth, openSearch}: any) => {
//   return (
//     <View style={tw`w-full p-4 space-y-4`}>
//       {/* Top Bar */}
//       <View style={tw`flex flex-row justify-between`}>
//         {/* Sidebar Toggle Button */}
//         <TouchableOpacity onPress={toggleWidth} style={tw`p-1 rounded-lg `}>
//           <Image
//             source={require('../../public/icons/hamburger.png')}
//             style={tw`w-6 h-6`}
//           />
//         </TouchableOpacity>

//         {/* Search and Create Buttons */}
//         <View style={tw`flex flex-row gap-2`}>
//           <TouchableOpacity onPress={openSearch} style={tw`p-1 rounded-lg `}>
//             <Image
//               source={require('../../public/icons/search.png')}
//               style={tw`w-6 h-6`}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={tw`p-1 rounded-lg `}>
//             <Image
//               source={require('../../public/icons/create.png')}
//               style={tw`w-6 h-6`}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity
//         onPress={toggleWidth}
//         style={tw`flex flex-row items-center gap-2 py-2  rounded-xl`}>
//         <View
//           style={tw`w-8 h-8 rounded-full border border-neutral-600 items-center justify-center`}>
//           <Image
//             source={require('../../public/icons/n8n.png')}
//             style={tw`w-5 h-3`}
//           />
//         </View>
//         <Text style={tw`text-white text-xs`}>Trigger N8n automations</Text>
//       </TouchableOpacity>

//       <ScrollView style={tw`space-y-1 max-h-[90%]`}>
//         {prompts.map((item, index) => (
//           <TouchableOpacity key={index} style={tw`p-2 rounded-lg`}>
//             <Text
//               style={tw`text-sm text-neutral-200`}
//               numberOfLines={1}
//               ellipsizeMode="tail">
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <View
//         style={tw`bg-black w-full flex md:hidden absolute bottom-0 left-0 px-4 h-12`}>
//         <Profile />
//       </View>
//     </View>
//   );
// };

// export default Sidebar;
