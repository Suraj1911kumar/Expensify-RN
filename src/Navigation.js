import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import Welcome from "./onBoarding/Welcome";
import Start from "./onBoarding/Start";
import SignUp from "./Screens/Auth/SignUp";
import Signin from "./Screens/Auth/Signin";
import ForgotPass from "./Screens/Auth/ForgotPass";
import EmailSent from "./Screens/Auth/EmailSent";
import ResetPass from "./Screens/Auth/ResetPass";
import MainTab from "./Screens/MainTab";
import AdDexpense from "./Screens/Tabs/AdDexpense";
import { AuthContext } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="start" component={Start} />
        <Stack.Screen name="maintab" component={MainTab} />
        <Stack.Screen name="addexp" component={AdDexpense} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="forgotpass" component={ForgotPass} />
        <Stack.Screen name="resetpass" component={ResetPass} />
        <Stack.Screen name="emailsent" component={EmailSent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
