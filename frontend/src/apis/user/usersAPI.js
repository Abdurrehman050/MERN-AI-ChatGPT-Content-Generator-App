import axios from "axios";

// Registration API call
export const registerAPI = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8090/api/v1/users/register",
      {
        username: userData?.username,
        email: userData?.email,
        password: userData?.password,
      },
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

//========= Login API=============
export const loginAPI = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8090/api/v1/users/login",
      {
        email: userData?.email,
        password: userData?.password,
      },
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

//========= Check Auth API=============
export const checkUserAuthStatusAPI = async (userData) => {
  try {
    const response = await axios.get(
      "http://localhost:8090/api/v1/auth/check",
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Authentication failed");
  }
};

//======== logout==========

export const logoutAPI = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8090/api/v1/users/logout",
      {},
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Authentication failed");
  }
};
