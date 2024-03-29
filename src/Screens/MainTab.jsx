import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Tabs/Home";
import Dashboard from "./Tabs/Dashboard";
import Settings from "./Tabs/Settings";
import Profile from "./Tabs/Profile";
import addExpenses from "./Tabs/AdDexpense";
import { Image, Text, View } from "react-native";
import { violet } from "../Constants/Color";
import {
  ChartBarIcon,
  Cog8ToothIcon,
  HomeIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="flex items-center  justify-center">
                <HomeIcon size={25} color={focused ? violet : "grey"} />
                <Text style={{ display: focused ? "flex" : "none" }}>Home</Text>
              </View>
            );
          },
        }}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="flex items-center  justify-center">
                <ChartBarIcon size={25} color={focused ? violet : "grey"} />
                <Text style={{ display: focused ? "flex" : "none" }}>
                  Dashboard
                </Text>
              </View>
            );
          },
        }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <View className="flex items-center absolute bottom-[50%] justify-center">
                <PlusCircleIcon size={50} color={violet} />
              </View>
            );
          },
        }}
        name="addexp"
        component={addExpenses}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="flex items-center  justify-center">
                <Cog8ToothIcon size={25} color={focused ? violet : "grey"} />
                <Text style={{ display: focused ? "flex" : "none" }}>
                  Setting
                </Text>
              </View>
            );
          },
        }}
        name="settings"
        component={Settings}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className="flex items-center justify-center  rounded-full"
                style={focused ? { borderColor: violet, borderWidth: 2 } : null}
              >
                <Image
                  source={require("../../assets/Avatar.png")}
                  style={{ height: 30, width: 30 }}
                />
              </View>
            );
          },
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
