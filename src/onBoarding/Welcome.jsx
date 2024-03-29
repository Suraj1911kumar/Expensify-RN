import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { violet } from "../Constants/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('start')
    }, 2000);
  }, []);
  return (
    <View
      className="h-screen w-full flex-1 items-center justify-center "
      style={{ backgroundColor: violet }}
    >
      <View className="relative backdrop-blur-3xl">
        <Text className=" text-white  z-10  " style={{ fontSize: wp(10) }}>
          Welcome
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
