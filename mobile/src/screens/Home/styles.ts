import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  height: 88%;
  padding-top: ${Platform.OS === "android" ? "20px" : 0};
`;

export const AreaText = styled.View`
  width: 100%;
  padding: 10px;
`;

export const UserNameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: -10px;
`;

export const AreaMarkerContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AreaMarker = styled.View`
  width: 98%;
  height: 98%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;
