import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { api } from "../utils/api";

interface AuthData {
  user: {
    id: string;
    name: string;
    username: string;
  };
  token: string;
}

interface AuthContextData {
  authData?: AuthData;
  loading: boolean;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface AuthProviderData {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderData) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem("@AuthData");
    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const res = await api.post("/users/login", { username, password });

      AsyncStorage.setItem("@AuthData", JSON.stringify(res.data));

      setAuthData(res.data);
    } catch (error) {
      console.log(`Error: ${error}`);
      Alert.alert("usuário e/ou senha inválidos!");
    }
  };

  const signOut = () => {
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
