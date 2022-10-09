import React from "react";
import { Button } from "../../components/Button";
import { Inputs } from "../../components/Inputs";
import { Logo } from "../../components/Logo";
import * as S from "./styles";

export const Signin = () => {
  return (
    <S.Container>
      <Logo />
      <S.InputArea>
        <Inputs iconName="user-alt" placeholder="Digite seu usuário" />
        <Inputs
          iconName="lock"
          placeholder="Digite sua senha"
          password={true}
        />
        <Button />
      </S.InputArea>

      <S.SignMessageButton>
        <S.SignMessageButtonText>
          Ainda não tem uma conta?
        </S.SignMessageButtonText>
        <S.SignMessageButtonTextBold>Cadastre-se</S.SignMessageButtonTextBold>
      </S.SignMessageButton>
    </S.Container>
  );
};
