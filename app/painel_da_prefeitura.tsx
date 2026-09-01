import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import BarraNavegacao from "../components/barra_navegacao";
import StatusLogin from "../components/status_login";

export default function PainelDaPrefeitura() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";

  return (
    <View style={{ flex: 1 }}>
      <BarraNavegacao />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusLogin estaLogado={estaLogado} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Painel da prefeitura</Text>
      </View>
    </View>
  );
}