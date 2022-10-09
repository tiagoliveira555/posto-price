import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  width: 100%;
  padding: 40px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin: 50px 0 20px;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-left: 5px;
`;
