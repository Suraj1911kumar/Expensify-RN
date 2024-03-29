import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { BellIcon, PlusIcon } from "react-native-heroicons/solid";
import { violet } from "../../Constants/Color";
import { useNavigation } from "@react-navigation/native";
import Home_PieChart from "../../components/Home_PieChart";

const Home = () => {
  const navigation = useNavigation();
  const handleChange = () => {
    navigation.navigate("addexp");
  };

  return (
    <View className="py-10 px-5 relative h-screen">
      {/* <View className="absolute bottom-5 right-[50%] ">
        <TouchableOpacity
          onPress={handleChange}
          className="p-2 w-auto rounded-full"
          style={{ backgroundColor: violet, elevation: 5 }}
        >
          <PlusIcon color={"white"} size={40} />
        </TouchableOpacity>
      </View> */}
      <View className="flex flex-row items-center justify-between my-2">
        <View>
          <Text className="text-md text-neutral-600 font-bold">
            Good Morning,
          </Text>
          <Text className="text-2xl font-extrabold tracking-widest">
            Suraj Kumar
          </Text>
        </View>
        <View>
          <BellIcon size={30} color={"grey"} />
        </View>
      </View>
      <View className="h-screen">
        <Home_PieChart />
      </View>
    </View>
  );
};

export default Home;
