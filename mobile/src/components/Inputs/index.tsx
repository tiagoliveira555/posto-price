import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import * as S from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  iconName: string;
  control: Control<any>;
  name: string;
  error?: FieldError;
}

export const Inputs = ({ iconName, control, name, error, ...rest }: Props) => {
  return (
    <>
      <S.InputContainer>
        <S.AreaIcon>
          <FontAwesome5
            name={iconName}
            size={24}
            color={!error ? "#322153" : "#dc1637"}
          />
        </S.AreaIcon>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.Input
              onChangeText={onChange}
              value={value}
              placeholderTextColor="#322153"
              {...rest}
            />
          )}
        />
      </S.InputContainer>
      <S.AreaError>
        {error && <S.TextError>{error.message}</S.TextError>}
      </S.AreaError>
    </>
  );
};
