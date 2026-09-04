import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BarraNavegacao from "../components/barra_navegacao";
import StatusLogin from "../components/status_login";
import { globalStyles } from "../constants/layout"; // Linkando o estilo global

export default function Mapa() {
  const { logado } = useLocalSearchParams<{ logado?: string }>();
  const estaLogado = logado === "true";

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.navWrapper}>
        <BarraNavegacao />
      </View>

      <View style={globalStyles.content}>
        <StatusLogin estaLogado={estaLogado} />
        {estaLogado && (
          <Text style={globalStyles.text}>Botão adiciona buraco</Text>
        )}
        <Text style={globalStyles.text}>Mapa dos buracos</Text>
      </View>
    </SafeAreaView>
  );
}
