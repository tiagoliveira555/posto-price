import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TabArea = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  border-radius: 30px;
`;

export const TabItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AreaCenter = styled.View`
  width: 120px;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
`;
