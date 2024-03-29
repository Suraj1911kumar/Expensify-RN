import { Text, View } from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const HeaderArrow = ({ text }) => {
  const navigation = useNavigation();
  return (
    <View className="flex items-center w-full  flex-row">
      <ArrowLeftIcon
        onPress={() => navigation.goBack()}
        color={"black"}
        size={30}
      />
      <Text className="text-center flex-1 w-full  font-extrabold text-2xl">
        {text}
      </Text>
    </View>
  );
};

export default HeaderArrow;
