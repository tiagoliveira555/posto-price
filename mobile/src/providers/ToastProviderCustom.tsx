import { ReactNode } from "react";
import { ToastProvider } from "react-native-toast-notifications";

import { AntDesign } from "@expo/vector-icons";

interface Props {
  children: ReactNode;
}

export const ToastProviderCustom = ({ children }: Props) => {
  return (
    <ToastProvider
      placement="top"
      duration={3000}
      textStyle={{
        fontSize: 16,
        color: "#fff",
        marginLeft: 5,
      }}
      offsetTop={30}
      successColor="#22bb33"
      dangerColor="#bb2124"
      successIcon={<AntDesign name="like1" size={20} color="#fff" />}
      dangerIcon={<AntDesign name="dislike1" size={20} color="#fff" />}
      warningIcon={<AntDesign name="infocirlce" size={20} color="#fff" />}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </ToastProvider>
  );
};
