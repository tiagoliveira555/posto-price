import React from "react";
import { Inputs } from "../../components/Inputs";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import * as S from "./styles";

export const Signup = () => {
  return (
    <S.Container>
      <Logo />
      <S.InputArea>
        <Inputs iconName="user-tie" placeholder="Digite seu nome" />
        <Inputs iconName="user-alt" placeholder="Digite um usuário" />
        <Inputs
          iconName="lock"
          placeholder="Digite uma senha"
          password={true}
        />
        <Button />
      </S.InputArea>

      <S.SignMessageButton>
        <S.SignMessageButtonText>Já possui uma conta?</S.SignMessageButtonText>
        <S.SignMessageButtonTextBold>Faça Login</S.SignMessageButtonTextBold>
      </S.SignMessageButton>
    </S.Container>
  );
};
