import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { EyeIcon } from "react-native-heroicons/solid";

const Input = ({ placeholder, eye, value, onChange, secureField }) => {
  const [isSecure, setIsSecure] = useState(secureField);

  return (
    <View className="justify-center relative">
      <TextInput
        className="border-[1px] my-2 border-neutral-400 rounded-xl py-3 pl-5 pr-10 text-lg "
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={isSecure}
      />
      {eye === true ? (
        <View className="absolute right-3 ">
          <EyeIcon
            onPress={() => setIsSecure(!isSecure)}
            color={"black"}
            size={20}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Input;
