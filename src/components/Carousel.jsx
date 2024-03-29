import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "pinar";
import { violet } from "../Constants/Color";

const CarouselComp = () => {
  const height = Dimensions.get("window").height;
  const slides = [
    {
      id: 1,
      img: require("../../assets/Illustration.png"),
      mainTitle: "Gain total control of your money",
      innerTitle: "Become your own money manager and make every cent count",
    },
    {
      id: 2,
      img: require("../../assets/Illustration1.png"),
      mainTitle: "Know where your money goes",
      innerTitle:
        "Track your transaction easily, with categories and financial report ",
    },
    {
      id: 3,
      img: require("../../assets/Illustration2.png"),
      mainTitle: "Planning ahead",
      innerTitle: "Setup your budget for each category so you in control",
    },
  ];
  return (
    <View style={{ height: hp(70) }}>
      <Carousel showsControls={false} loop={true} dotStyle={Styles.dotStyle} autoplay={true} autoplayInterval={3000}>
        {slides.map((i, index) => {
          return (
            <View
              key={index}
              className=" flex items-center justify-center space-y-3"
            >
              <Image source={i.img} className="" />
              <Text className="font-extrabold text-center w-80 text-3xl">
                {i.mainTitle}
              </Text>
              <Text className="text-neutral-500 text-center w-72 text-md">
                {i.innerTitle}
              </Text>
            </View>
          );
        })}
      </Carousel>
    </View>
  );
};

export default CarouselComp;
const Styles= StyleSheet.create({
    dotStyle:{
        width:20,
        height:4,
        backgroundColor:violet,
        marginHorizontal:4,
        borderRadius:10
    }
})
