import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { StationData } from "../Home";
import * as S from "./styles";

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
      <Text>Posto: {station?.name}</Text>
      <Text></Text>
      <Text>Endereço: {address?.street}</Text>
      <Text>Cidade: {address?.city}</Text>
      <Text>Estado: {address?.state}</Text>
      <Text></Text>
      <Text>Preços:</Text>
      <Text>Gasolina Comum: R$ {station?.regularGasoline}</Text>
      <Text>Gasolina Aditivada: R$ {station?.additiveGasoline}</Text>
      <Text>Etanol: R$ {station?.ethanol}</Text>
      <Text>Diesel: R$ {station?.diesel}</Text>
    </S.Container>
  );
};
