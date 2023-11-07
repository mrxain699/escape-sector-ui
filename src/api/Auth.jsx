import React, { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [loginToken, setLoginToken] = useState(localStorage.getItem("token"));
  const [loggedInUser, setLoggedInUser] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);

  const getLoggedInUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );

        if (response) {
          setLoggedInUser(response.data.user);
        }
      }
    } catch (error) {
      console.log("Get User", error);
    }
  };

  const authenticate = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth`,
        {
          ...data,
        }
      );
      if (response) {
        if (response.data.status === "Failed") {
          seterrorMessage(response.data.message);
        } else {
          localStorage.setItem("token", response.data.token);
          setLoginToken(response.data.token);
          seterrorMessage(null);
        }
      }
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        localStorage.removeItem("token");
        setLoginToken(null);
      }
    } catch (error) {
      console.log("Logout Error", error);
    }
  };

  const value = {
    loginToken,
    setLoginToken,
    getLoggedInUser,
    loggedInUser,
    authenticate,
    errorMessage,
    seterrorMessage,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default Auth;
