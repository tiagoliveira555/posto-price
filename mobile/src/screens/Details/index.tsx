import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { StationData } from "../Home";
import * as S from "./styles";

import { Feather } from "@expo/vector-icons";
import Logo from "../../assets/posto-price.png";

interface Props {
  id: string;
}

interface AddressParams {
  street: string;
  city: string;
  state: string;
}

export const Details = () => {
  const route = useRoute();
  const { id } = route.params as Props;

  const { signOut } = useAuth();
  const toast = useToast();
  const navigation = useNavigation();

  const [station, setStation] = useState<StationData>();
  const [address, setAddress] = useState<AddressParams>();

  useEffect(() => {
    api
      .get(`/stations/${id}`)
      .then((res) => {
        setStation(res.data);
        api(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${res.data.latitude}&lon=${res.data.logitude}&lang=pt&apiKey=4112d248294e437ab34dd177bba213b2`
        ).then((res) => {
          setAddress({
            street: res.data.features[0].properties.street,
            city: res.data.features[0].properties.city,
            state: res.data.features[0].properties.state,
          });
        });
      })
      .catch(() => {
        toast.show("Autentique-se!", { type: "warning" });
        signOut();
      });
  }, []);

  if (!address) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={40} color="#322153" />
        </S.ButtonBack>

        <S.Logo source={Logo} />
      </S.Header>
      <S.StationName>{station?.name}</S.StationName>
      <S.AddressArea>
        <S.AddressLabel>Endereço</S.AddressLabel>
        <S.AddressText>{address?.street}</S.AddressText>
        <S.AddressText>{address?.city}</S.AddressText>
        <S.AddressText>{address?.state}</S.AddressText>
      </S.AddressArea>
      <S.PriceTitle>Preços dos Combustíves:</S.PriceTitle>

      <S.GasArea>
        <S.GasName>GASOLINA COMUM: </S.GasName>
        <S.Price>R$ {station?.regularGasoline}</S.Price>
      </S.GasArea>
      <S.GasArea>
        <S.GasName>GASOLINA ATIVIVADA: </S.GasName>
        <S.Price>R$ {station?.additiveGasoline}</S.Price>
      </S.GasArea>
      <S.GasArea>
        <S.GasName>ETANOL: </S.GasName>
        <S.Price>R$ {station?.ethanol}</S.Price>
      </S.GasArea>
      <S.GasArea>
        <S.GasName>DIESEL: </S.GasName>
        <S.Price>R$ {station?.diesel}</S.Price>
      </S.GasArea>
    </S.Container>
  );
};
