import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { api } from "../../utils/api";
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

  const [station, setStation] = useState<StationData>();
  const [address, setAddress] = useState<AddressParams>();

  useEffect(() => {
    (async () => {
      const res = await api.get(`/stations/${id}`);
      setStation(res.data);
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${res.data.latitude}&lon=${res.data.logitude}&lang=pt&apiKey=4112d248294e437ab34dd177bba213b2`
      ).then(async (req) => {
        const data = await req.json();
        setAddress({
          street: data.features[0].properties.street,
          city: data.features[0].properties.city,
          state: data.features[0].properties.state,
        });
      });
    })();
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
