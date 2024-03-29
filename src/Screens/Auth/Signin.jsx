import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useState } from "react";
import HeaderArrow from "../../components/HeaderArrow";
import Input from "../../components/Input";
import { violet } from "../../Constants/Color";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../../components/Loader";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <>
      {isLoading && <Loader />}
      <View className="py-10 px-5">
        <View className="mb-10 mt-5">
          <HeaderArrow text={"Sign In"} />
        </View>
        <View className="space-y-3 mt-10">
          <Input placeholder={"Email"} value={email} onChange={setEmail} />
          <Input
            placeholder={"Password"}
            eye={true}
            value={password}
            onChange={setPassword}
          />
        </View>
        <View className="mt-5 space-y-5">
          <Button
            text={"Sign In"}
            onPress={() => {
              login(email, password);
            }}
          />
          <Text
            onPress={() => navigation.navigate("forgotpass")}
            className="text-center text-lg  font-bold "
            style={{
              color: violet,
            }}
          >
            Forgot Password?
          </Text>

          <Text className="text-center">
            Don't have an account yet?
            <Text
              style={{
                borderBottomColor: violet,
                borderBottomWidth: 2,
                color: violet,
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default SignIn;
