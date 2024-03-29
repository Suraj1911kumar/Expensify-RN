import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import HeaderArrow from "../../components/HeaderArrow";
import Input from "../../components/Input";
import { violet } from "../../Constants/Color";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
const Forgotpass = () => {
  const navigation = useNavigation();
  return (
    <View className="py-10 px-5">
      <View className="mb-10 mt-5">
        <HeaderArrow text={"Forgot Password"} />
      </View>
      <View className="space-y-3 mt-10">
        <Text className="font-bold mb-5 text-2xl">
          Don’t worry. Enter your email and we’ll send you a link to reset your
          password.
        </Text>
        <Input placeholder={"Email"} />
      </View>
      <View className="mt-5 space-y-5">
        <Button text={"Continue"} onPress={"emailsent"} />
      </View>
    </View>
  );
};

export default Forgotpass;
