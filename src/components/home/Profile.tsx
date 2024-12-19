import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import tw from 'twrnc';

const Profile = ({isCollapsed}: {isCollapsed: boolean}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const session = {
    user: {
      name: 'John Doe',
    },
  };
  const getInitials = () => {
    if (session?.user?.name) {
      const names = session.user.name.split(' ');
      const firstInitial = names[0]?.charAt(0).toUpperCase() || '';
      const lastInitial = names[1]?.charAt(0).toUpperCase() || '';
      return `${firstInitial}${lastInitial}`;
    }
    return '';
  };

  return (
    <View style={tw`relative`}>
      <TouchableOpacity
        style={tw`rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center`}
        onPress={toggleDropdown}>
        <Text style={tw`text-white font-light text-base`}>
          {session ? getInitials() : ''}
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
          <TouchableOpacity style={tw`px-4 py-2 hover:bg-gray-700 rounded-lg`}>
            <Text style={tw`text-neutral-300 text-sm`}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Profile;

// 'use client'
// import { useSession } from "next-auth/react";
// import { useState } from "react";
// import Logged from "../auth/Logged";

// const Profile = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleDropdown = () => setIsOpen(!isOpen);
//     const { data: session } = useSession();

//     return (
//         <div className=" relative inline-block text-left">
//             <div
//                 className="cursor-pointer rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center"
//                 onClick={toggleDropdown}
//             >
//                 <span className="text-white font-light">{session.user}</span>
//             </div>

//             <div
//                 className={`hidden lg:block border border-neutral-600 bg-[#2F2F2F] absolute md:right-0  mt-2 w-48 rounded-md shadow-lg transform transition-all duration-300 ease-in-out md:origin-top
//                     ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
//                 `}
//             >
//                 <ul className="space-y-2 text-neutral-300 text-sm p-2 ">
//                     <li className="px-4 py-2 hover:bg-neutral-700 rounded-lg cursor-pointer">Settings</li>
//                     <div className="w-full h-[1px] bg-neutral-600" />
//                     <li className="px-4 py-2 hover:bg-neutral-700 rounded-lg cursor-pointer">Logout</li>
//                 </ul>
//             </div>

//             <div
//                 className={`block lg:hidden border border-neutral-600 bg-[#2F2F2F] absolute bottom-14 w-48 rounded-md shadow-lg transform transition-all duration-300 ease-in-out md:origin-top
//                     ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
//                 `}
//             >
//                 <ul className="space-y-2 text-neutral-300 text-sm p-2 ">
//                     <li className="px-4 py-2 hover:bg-neutral-700 rounded-lg cursor-pointer">Settings</li>
//                     <div className="w-full h-[1px] bg-neutral-600" />
//                     <li className="px-4 py-2 hover:bg-neutral-700 rounded-lg cursor-pointer">Logout</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Profile;
