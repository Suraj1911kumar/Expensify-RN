import { View, Text, Pressable } from "react-native";
import React from "react";
import { violet } from "../Constants/Color";
import { useNavigation } from "@react-navigation/native";

const Button = ({ text, onPress }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={onPress}
      className="w-full py-5 my-2  rounded-2xl"
      style={{ backgroundColor: violet, elevation: 5 }}
    >
      <Text className="text-center text-white text-lg font-bold tracking-widest ">
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
