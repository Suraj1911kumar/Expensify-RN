import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View className=" absolute bg-slate-200 flex-1 w-full  h-screen  backdrop-blur-3xl  flex items-center justify-center">
      <ActivityIndicator size={30} />
    </View>
  );
};

export default Loader;
