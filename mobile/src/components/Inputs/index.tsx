import React from "react";
import * as S from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  iconName: string;
  placeholder: string;
  password?: boolean;
}

export const Inputs = ({ iconName, placeholder, password = false }: Props) => {
  return (
    <S.InputContainer>
      <FontAwesome5 name={iconName} size={24} color="#322153" />
      <S.Input
        placeholder={placeholder}
        placeholderTextColor="#322153"
        secureTextEntry={password}
      />
    </S.InputContainer>
  );
};
