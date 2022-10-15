import React, { useEffect, useState } from "react";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import * as S from "./styles";

import logoPostoPrice from "../../assets/posto-price.png";
import { TabBar } from "../../components/TabBar";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { Preload } from "../Preload";
import { useToast } from "react-native-toast-notifications";

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
  const { authData, signOut } = useAuth();
  const navigation = useNavigation();
  const toast = useToast();

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
    api
      .get("/stations")
      .then((res) => setStations(res.data))
      .catch(() => {
        toast.show("Autentique-se!", { type: "warning" });
        signOut();
      });
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
            <Preload />
          )}
        </S.AreaMarker>
      </S.AreaMarkerContainer>
      <TabBar />
    </S.Container>
  );
};
