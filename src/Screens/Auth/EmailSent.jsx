import { View, Text, Image } from "react-native";
import React from "react";
import Button from "../../components/Button";

const EmailSent = () => {
  return (
    <View className="py-10 px-5 flex-1">
      <View className="flex-1 space-y-4 items-center">
        <Image source={require("../../../assets/sentemail.png")} />
        <Text className='text-2xl font-bold text-center'>Your email is on the way</Text>
        <Text className='text-sm font-semibold text-center'>
          Check your email test@test.com and follow the instructions to reset
          your password
        </Text>
      </View>
      <View>
        <Button text={"Back to Login"} onPress={'resetpass'} />
      </View>
    </View>
  );
};

export default EmailSent;
