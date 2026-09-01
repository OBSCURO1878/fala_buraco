import React from "react";
import { Text, View } from "react-native";
import BarraNavegacao from "../components/barra_navegacao";

export default function Perfil() {
  return (
    <View style={{ flex: 1 }}>
      <BarraNavegacao />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Perfil</Text>
      </View>
    </View>
  );
}