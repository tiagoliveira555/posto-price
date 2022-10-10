import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  height: 88%;
  padding-top: ${Platform.OS === "android" ? "20px" : 0};
`;

export const AreaText = styled.View`
  width: 100%;
  padding: 10px;
  position: relative;
`;

export const UserNameText = styled.Text`
  margin-left: 50px;
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  margin-left: 50px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: -10px;
`;

export const Logo = styled.Image`
  position: absolute;
  left: 10px;
  top: 12px;
  width: 42px;
  height: 43px;
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
