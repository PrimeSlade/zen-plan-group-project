import axiosInstance from "@/axiosInstance";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [registerError, setRegisterError] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (name, email, password) => {
    try {
      const { data } = await axiosInstance.post(
        "user/register",
        { name: name, email: email, password: password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data.msg) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setRegisterError(error.response.data.msg);
    }
  };

  return { registerUser, registerError, setRegisterError };
};

export default useRegister;
