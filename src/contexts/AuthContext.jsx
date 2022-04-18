import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  

  const login = async(data) => {
    let token
    try {
        const response = await axios.post("http://localhost:3001/api/users/login", data)
        const responseData = response.data
        token = responseData.token
    } catch (error) {
        console.log(error)
    }
    setToken(token);
  };

  const logout = (token) => {
    try {
        const response = await axios.post("http://localhost:3001/api/users/logout", data, {
            headers: {
                "context-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        // const responseData = response.data
        // token = responseData.token
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}