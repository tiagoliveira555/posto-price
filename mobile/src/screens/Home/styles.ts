import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? "20px" : 0};
`;

export const AreaHeader = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px -10px;
`;

export const AreaText = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const UserNameText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.Image`
  width: 42px;
  height: 44px;
`;

export const AreaMarkerContainer = styled.View`
  flex: 1;
  margin-bottom: 2px;
  justify-content: center;
  align-items: center;
`;

export const AreaMarker = styled.View`
  width: 98%;
  height: 98%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;
