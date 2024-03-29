import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import SelectDropdown from "react-native-select-dropdown";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import HeaderArrow from "../../components/HeaderArrow";

import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
const AdDexpense = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [curDate, setCurDate] = useState("");

  const [isShow, setIsShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setIsShow(false);
    setCurDate(currentDate);
  };

  const [allData, setAllData] = useState([]);

  const handleSave = async () => {
    const newEntry = { item, category, amount, quantity, curDate };
    setAllData([newEntry]);
    try {
      const response = await axios.post(
        "https://expense-server-5jxm.onrender.com/addExp",
        {
          item: item,
          category: category,
          amount: amount,
          quantity: quantity,
          createdDate: curDate,
        }
      );
      console.warn(response.data);
    } catch (error) {
      console.warn(error, "yahi error hai");
    }
  };
  const categoryData = ["Meals", "Travels", "Daily Uses", "Other"];
  return (
    <View className="py-10 px-5">
      <View className="my-5">
        <HeaderArrow text={"Add Expenses"} />
      </View>
      <View>
        <Input placeholder={"Enter Name"} value={item} onChange={setItem} />
        <View className="border-neutral-400 border-[1px] rounded-xl">
          <SelectDropdown
            onSelect={(selectedItem, index) => {
              setCategory(selectedItem);
            }}
            renderDropdownIcon={() => (
              <ChevronDownIcon size={20} color={"black"} />
            )}
            data={categoryData}
            defaultButtonText="Select Category"
            dropdownIconPosition="right"
            buttonStyle={{
              borderRadius: 10,
              width: ["100%"],
            }}
          />
        </View>

        <Input
          placeholder={"Enter Amount"}
          value={amount}
          onChange={setAmount}
        />
        <Input
          placeholder={"Enter Quantity"}
          value={quantity}
          onChange={setQuantity}
        />
        <View>
          <TouchableOpacity
            className="border-[1px] flex flex-row items-center justify-between border-neutral-400 rounded-xl py-3 pl-5 pr-10 text-lg "
            onPress={() => setIsShow(!isShow)}
          >
            <Text> Date</Text>
            <Text>{curDate}</Text>
          </TouchableOpacity>
          {isShow && (
            <DateTimePicker
              mode={mode}
              onChange={onChangeDate}
              maximumDate={new Date()}
              is24Hour="true"
              value={new Date()}
            />
          )}
        </View>
      </View>
      <View className="flex flex-row justify-between gap-3 my-5">
        <TouchableOpacity className="flex-1 border-2 justify-center items-center p-5 rounded-xl ">
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSave}
          className="flex-1 border-2 justify-center items-center p-5 rounded-xl"
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      {allData &&
        allData.map((i, index) => {
          return (
            <View key={index} className="border-[1px] p-3">
              <Text>Item : {i.item} </Text>
              <Text>Categoty :{i.category} </Text>
              <Text>Amount : {i.amount} </Text>
              <Text>Quantity : {i.quantity} </Text>
              <Text>Created At : {i.curDate} </Text>
            </View>
          );
        })}
    </View>
  );
};

export default AdDexpense;
