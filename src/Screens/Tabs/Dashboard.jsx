import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeaderDate from "../../components/HomeHeaderDate";
import axios from "axios";

const Dashboard = () => {
  const [allExpenses, setAllExpenses] = useState([]);
  const [data, setData] = useState("");

  const [todayDate, setTodayDate] = useState([]);
  const [curMonth, setCurMonth] = useState("");

  useEffect(() => {
    getApi();
  }, [getApi]);
  function getChildData(data) {
    setData(data);
  }
  useEffect(() => {
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    monthList(month);
    getNeDate(today);
  }, []);

  const getApi = async () => {
    const response = await axios.get(
      "https://expense-server-5jxm.onrender.com/expenses"
    );
    const result = await response.data;
    setAllExpenses(result);
  };

  const getNeDate = (today) => {
    let data = [];
    for (let i = today; i > 0; i--) {
      data[data.length] = i;
    }
    setTodayDate(data);
  };

  const monthList = (month) => {
    switch (month) {
      case 1:
        setCurMonth("January");
        break;
      case 2:
        setCurMonth("February");
        break;

      case 3:
        setCurMonth("March");
        break;
      case 4:
        setCurMonth("April");
        break;

      case 5:
        setCurMonth("May");
        break;
      case 6:
        setCurMonth("June");
        break;
      case 7:
        setCurMonth("July");
        break;
      case 8:
        setCurMonth("August");
        break;
      case 9:
        setCurMonth("September");
        break;
      case 10:
        setCurMonth("October");
        break;
      case 11:
        setCurMonth("November");
        break;
      case 12:
        setCurMonth("December");
        break;
      default:
        break;
    }
  };

  return (
    <View className="py-10 px-5 flex-1">
      <Pressable className="flex">
        <Text className="text-2xl">{curMonth}</Text>
      </Pressable>
      <View className="flex">
        <HomeHeaderDate
          getChildData={getChildData}
          date={todayDate}
          month={curMonth}
        />
      </View>

      <View className="flex-1">
        <Text>{data}</Text>
        <ScrollView
          className=" h-auto p-2 "
          scrollX
          showsVerticalScrollIndicator={false}
        >
          {allExpenses.map((i, index) => {
            return (
              <View
                key={index}
                className=" border-2 rounded-md flex flex-row mb-3 p-5 items-center justify-between "
              >
                <View className="">
                  <Text>Item : {i.item} </Text>
                  <Text>Category : {i.category} </Text>
                </View>
                <View>
                  <Text>Quantity : {i.quantity}</Text>
                  <Text>Price : {i.amount}</Text>
                  <Text>{i.createdDate}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;
