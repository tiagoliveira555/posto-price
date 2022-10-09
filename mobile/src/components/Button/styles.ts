import styled from "styled-components/native";

export const CustomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
export const CustomButtomText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;
`;
