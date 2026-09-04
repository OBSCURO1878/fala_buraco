import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BarraNavegacao from "../components/barra_navegacao";
import StatusLogin from "../components/status_login";
import { globalStyles } from "../constants/layout"; // Importando o seu estilo global

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
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.navWrapper}>
        <BarraNavegacao />
      </View>

      {/* Adicionado o style global e mantido o 'gap: 20' original do seu projeto inline */}
      <View style={[globalStyles.content, { gap: 20 }]}>
        <StatusLogin estaLogado={estaLogado} />
        
        <Text style={globalStyles.title}>Faça login com Google</Text>
        
        <TouchableOpacity
          onPress={confirmarLogin}
          style={{ backgroundColor: "#108245", padding: 15, borderRadius: 10 }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Confirmar login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
