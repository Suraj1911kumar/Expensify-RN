import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { violet } from "../Constants/Color";

const HomeHeaderDate = ({ date, month, getChildData }) => {
  const handleChange = (i) => {
    getChildData(i);
  };
  return (
    <ScrollView
      horizontal
      className=" space-x-2 mx-[-15]  py-2"
      showsHorizontalScrollIndicator={false}
    >
      {date.map((i, index) => {
        return (
          <TouchableOpacity
            onPress={(e) => handleChange(i)}
            key={index}
            className="border-2 h-20 w-20 rounded-md flex items-center justify-center  active:bg-red-800 "
            style={{ borderColor: violet }}
          >
            <Text className="text-2xl">{i}</Text>
            <Text>{month}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default HomeHeaderDate;
