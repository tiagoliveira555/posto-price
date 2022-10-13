import React, { useEffect, useState } from "react";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import * as S from "./styles";

import logoPostoPrice from "../../assets/posto-price.png";
import { TabBar } from "../../components/TabBar";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../utils/api";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface StationData {
  id: string;
  name: string;
  latitude: number;
  logitude: number;
  regularGasoline: number;
  additiveGasoline: number;
  ethanol: number;
  diesel: number;
  created_at: string;
}

interface Origin {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export const Home = () => {
  const { authData } = useAuth();
  const navigation = useNavigation();

  const firstName = authData?.user.name.split(" ")[0];

  const initialOrigin = {
    latitude: -10.686830992329593,
    longitude: -37.856772955305026,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [stations, setStations] = useState<StationData[]>();
  const [origin, setOrigin] = useState<Origin>();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        console.log(status);
        const location = await Location.getCurrentPositionAsync({});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        setOrigin(initialOrigin);
      }
    })();
  }, []);

  useEffect(() => {
    const data = async () => {
      const res = await api.get("/stations");

      setStations(res.data);
    };

    data();
  }, []);

  return (
    <S.Container>
      <S.AreaHeader>
        <S.Logo source={logoPostoPrice} />
        <S.AreaText>
          <S.UserNameText>{firstName}, tudo bem?</S.UserNameText>
          <S.Subtitle>Encontre aqui os preços de combustíves.</S.Subtitle>
        </S.AreaText>
      </S.AreaHeader>
      <S.AreaMarkerContainer>
        <S.AreaMarker>
          {stations && origin ? (
            <MapView
              style={{ flex: 1 }}
              initialRegion={origin}
              showsUserLocation={true}
            >
              {stations.map((item) => {
                return (
                  <Marker
                    key={item.id}
                    coordinate={{
                      longitude: Number(item.logitude),
                      latitude: Number(item.latitude),
                    }}
                    onPress={() =>
                      navigation.navigate("Details", { id: item.id })
                    }
                  />
                );
              })}
            </MapView>
          ) : (
            <ActivityIndicator style={{ flex: 1 }} />
          )}
        </S.AreaMarker>
      </S.AreaMarkerContainer>
      <TabBar />
    </S.Container>
  );
};
