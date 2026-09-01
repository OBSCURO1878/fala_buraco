import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BarraNavegacao from "../components/barra_navegacao";

export default function Login() {
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