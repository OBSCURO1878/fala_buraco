import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BarraNavegacao from "../components/barra_navegacao";
import StatusLogin from "../components/status_login";

export default function Mapa() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f8fa" }}>
      <BarraNavegacao />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusLogin estaLogado={estaLogado} />
        {estaLogado && (
          <Text style={{ fontSize: 18 }}>Botão adiciona buraco</Text>
        )}
        <Text style={{ fontSize: 18, alignItems: "baseline" }}>Mapa dos buracos</Text>
      </View>
    </SafeAreaView>
  );
}