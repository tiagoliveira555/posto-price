import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  border-radius: 8px;
  padding: 0 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`;
