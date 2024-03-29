import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const register = (name, email, password) => {
    setIsLoading(true);
    axios
      .post("https://expense-server-5jxm.onrender.com/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.warn(res);
        if (res.status === 201) {
          console.warn("successfull");
        }
        setIsLoading(false);
      })
      .catch((e) => {
        console.warn("response error", e);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post("https://expense-server-5jxm.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.warn("response hai ye", res.data.token);
        setUserInfo(res.data);
        AsyncStorage.setItem("token", JSON.stringify(res.data));
        setIsLoading(false);
      })
      .catch((e) => {
        console.warn("error while login", e);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{ register, isLoading, login, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
