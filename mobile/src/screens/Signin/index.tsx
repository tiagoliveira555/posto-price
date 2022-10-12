import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Inputs } from "../../components/Inputs";
import { Logo } from "../../components/Logo";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../utils/api";

import { Alert, DatePickerAndroid } from "react-native";

import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";

interface FormData {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("Informe seu usuário"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 dígitos")
    .required("Informe uma senha"),
});

export const Signin = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSignin = (data: FormData) => {
    signIn(data.username, data.password);
  };

  return (
    <S.Container>
      <Logo />
      <S.InputArea>
        <Inputs
          name="username"
          control={control}
          iconName="user-alt"
          placeholder="Digite seu usuário"
          error={errors.username}
        />

        <Inputs
          name="password"
          control={control}
          iconName="lock"
          placeholder="Digite sua senha"
          secureTextEntry
          error={errors.password}
        />

        <Button title="Entrar" onPress={handleSubmit(handleSignin)} />
      </S.InputArea>

      <S.SignMessageButton onPress={() => navigation.navigate("Signup")}>
        <S.SignMessageButtonText>
          Ainda não tem uma conta?
        </S.SignMessageButtonText>
        <S.SignMessageButtonTextBold>Cadastre-se</S.SignMessageButtonTextBold>
      </S.SignMessageButton>
    </S.Container>
  );
};
