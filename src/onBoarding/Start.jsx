import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import CarouselComp from "../components/Carousel";
import Button from "../components/Button";
import { bgColor, violet } from "../Constants/Color";
import { useNavigation } from "@react-navigation/native";

const Start = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1   justify-center px-5"
      style={{ backgroundColor: bgColor }}
    >
      <View className="">
        <CarouselComp />
      </View>
      <View>
        <Button text={"Sign Up"} onPress={() => navigation.navigate("signup")} />
        <Pressable
          onPress={() => navigation.navigate("signin")}
          className={`w-full py-5 my-2 rounded-2xl text-[${violet}] `}
          style={{ backgroundColor: "#EEE5FF", elevation: 5 }}
        >
          <Text className="text-center  text-[#7F3DFF] text-lg font-bold tracking-widest ">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Start;
