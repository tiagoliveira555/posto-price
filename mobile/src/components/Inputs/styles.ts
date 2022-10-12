import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  border-radius: 8px;
  padding: 0 15px;
  align-items: center;
`;

export const AreaIcon = styled.View`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`;

export const AreaError = styled.View`
  min-height: 20px;
`;

export const TextError = styled.Text`
  margin: 2px 0 0 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
`;
