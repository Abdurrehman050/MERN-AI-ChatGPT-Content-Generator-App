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
