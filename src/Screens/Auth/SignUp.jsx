import { View, Text, Pressable, Image, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import HeaderArrow from "../../components/HeaderArrow";
import Input from "../../components/Input";
import { violet } from "../../Constants/Color";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../../components/Loader";

const SignUp = () => {
  const [error, setError] = useState("");
  const naigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading && <Loader />}
      <View className="py-10 px-5 w-full ">
        <View className="mb-10 mt-5">
          <HeaderArrow text={"Sign Up"} />
        </View>
        <Text className="text-center text-red-800">{error}</Text>
        <View className="space-y-3 mt-10">
          <Input placeholder={"Name"} value={name} onChange={setName} />
          <Input placeholder={"Email"} value={email} onChange={setEmail} />
          <Input
            placeholder={"Password"}
            eye={true}
            value={password}
            onChange={setPassword}
            secureField={true}
          />
          <View className="flex flex-row  items-center  space-x-3 ">
            <View
              className="h-6  w-6 rounded-md border-2 "
              style={{ borderColor: violet }}
            ></View>
            <Text className=" px-2">
              By signing up, you agree to the Terms of Service and Privacy
              Policy
            </Text>
          </View>
        </View>
        <View className="mt-5 space-y-5">
          <Button
            text={"Sign Up"}
            onPress={() => {
              register(name, email, password);
            }}
          />
          <Text className="text-center font-bold text-neutral-400">
            Or With
          </Text>
          <Pressable
            className="w-full  border-[1px] flex flex-row items-center py-3 rounded-xl justify-center space-x-4"
            style={{ borderColor: violet }}
          >
            <Image
              source={require("../../../assets/google.png")}
              style={{ height: 35, width: 35 }}
            />
            <Text className="text-xl font-bold">Sign Up With Google</Text>
          </Pressable>
          <Text className="text-center">
            Already Have an account?{" "}
            <Text
              onPress={() => naigation.navigate("maintab")}
              style={{
                borderBottomColor: violet,
                borderBottomWidth: 2,
                color: violet,
              }}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default SignUp;
