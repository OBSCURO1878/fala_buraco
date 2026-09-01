import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BarraNavegacao from "../components/barra_navegacao";
import StatusLogin from "../components/status_login";

export default function Login() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";

  const confirmarLogin = () => {
    router.replace({
      pathname: "/mapa",
      params: { logado: "true" },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <BarraNavegacao />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
        <StatusLogin estaLogado={estaLogado} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Faça login com Google</Text>
        <TouchableOpacity
          onPress={confirmarLogin}
          style={{ backgroundColor: "#108245", padding: 15, borderRadius: 10 }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Confirmar login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}