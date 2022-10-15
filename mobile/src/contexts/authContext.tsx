import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";
import { useToast } from "react-native-toast-notifications";

export interface AuthData {
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

  const toast = useToast();

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

  const signIn = (username: string, password: string) => {
    api
      .post("/users/login", { username, password })
      .then((res) => {
        AsyncStorage.setItem("@AuthData", JSON.stringify(res.data));

        setAuthData(res.data);
      })
      .catch((err) => {
        toast.show(err.response.data.errors[0], { type: "danger" });
      });
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
