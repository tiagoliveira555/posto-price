import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Inputs } from "../../components/Inputs";
import { Logo } from "../../components/Logo";
import * as S from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

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

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSignin = async (data: FormData) => {
    try {
      const res = await api.post(`/users/login`, data);

      if (res.data) {
        navigation.reset({
          routes: [{ name: "Home" }],
        });
      }
    } catch {
      Alert.alert("Usuário e/ou senha incorretos!");
    }
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

      <S.SignMessageButton
        onPress={() =>
          navigation.reset({
            routes: [{ name: "Signup" }],
          })
        }
      >
        <S.SignMessageButtonText>
          Ainda não tem uma conta?
        </S.SignMessageButtonText>
        <S.SignMessageButtonTextBold>Cadastre-se</S.SignMessageButtonTextBold>
      </S.SignMessageButton>
    </S.Container>
  );
};
