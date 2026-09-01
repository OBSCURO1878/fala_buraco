import React from "react";
import { Text, View } from "react-native";
import BarraNavegacao from "../components/barra_navegacao";

export default function DetalheOcorrencia() {
  return (
    <View style={{ flex: 1 }}>
      <BarraNavegacao />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detalhe da ocorrência</Text>
      </View>
    </View>
  );
}