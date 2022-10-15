import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  justify-content: center;
  margin: 30px 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Logo = styled.Image`
  width: 42px;
  height: 44px;
`;

export const StationName = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 25px;
  font-weight: bold;
`;

export const AddressArea = styled.View`
  margin-top: 20px;
`;

export const AddressLabel = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const AddressText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  margin-top: 2px;
`;

export const PriceTitle = styled.Text`
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
`;

export const GasArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

export const GasName = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;
