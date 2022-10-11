import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  margin-top: 10px;
  width: 100%;
  padding: 20px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-left: 5px;
`;
