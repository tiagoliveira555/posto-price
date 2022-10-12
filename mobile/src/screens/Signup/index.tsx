import React from "react";
import { Inputs } from "../../components/Inputs";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import * as S from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { propsStack } from "../../routes/ModelsStacks";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  completeName: string;
  username: string;
  password: string;
  password_confirm: string;
}

const schema = yup.object({
  completeName: yup.string().required("Informe seu nome"),
  username: yup.string().required("Informe seu usuário"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 dígitos")
    .required("Digite uma senha"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "A senha de confirmação não confere")
    .required("Digite uma senha"),
});

export const Signup = () => {
  const navigation = useNavigation<propsStack>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleUserRegister = (data: FormData) => {
    console.log(data);

    reset();
  };

  return (
    <S.Container>
      <Logo />
      <S.InputArea>
        <Inputs
          name="completeName"
          control={control}
          iconName="user-tie"
          placeholder="Digite seu nome"
          error={errors.completeName}
        />
        <Inputs
          name="username"
          control={control}
          iconName="user-alt"
          placeholder="Digite um usuário"
          error={errors.username}
        />
        <Inputs
          name="password"
          control={control}
          iconName="lock"
          placeholder="Digite uma senha"
          secureTextEntry
          error={errors.password}
        />
        <Inputs
          name="password_confirm"
          control={control}
          iconName="lock"
          placeholder="Confirme a senha"
          secureTextEntry
          error={errors.password_confirm}
        />
        <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
      </S.InputArea>

      <S.SignMessageButton
        onPress={() =>
          navigation.reset({
            routes: [{ name: "Signin" }],
          })
        }
      >
        <S.SignMessageButtonText>Já possui uma conta?</S.SignMessageButtonText>
        <S.SignMessageButtonTextBold>Faça Login</S.SignMessageButtonTextBold>
      </S.SignMessageButton>
    </S.Container>
  );
};
