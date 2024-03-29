import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import HeaderArrow from "../../components/HeaderArrow";
import Input from "../../components/Input";
import { violet } from "../../Constants/Color";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
const ResetPass = () => {
  const navigation = useNavigation();
  return (
    <View className="py-10 px-5">
      <View className="mb-10 mt-5">
        <HeaderArrow text={"Reset Password"} />
      </View>
      <View className="space-y-3 mt-10">
        <Input placeholder={"New Password"} />
        <Input placeholder={"Retype New Password"} />
      </View>
      <View className="mt-5 space-y-5">
        <Button text={"Continue"} onPress={"ResetPass"} />
      </View>
    </View>
  );
};

export default ResetPass;
