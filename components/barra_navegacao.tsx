import { router, useLocalSearchParams, usePathname } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const TELAS = [
  { label: "Login", rota: "/login" },
  { label: "Mapa", rota: "/mapa" },
  { label: "Criar reporte", rota: "/criar_reporte" },
  { label: "Detalhes da ocorrência", rota: "/detalhes_de_ocorrencia" },
  { label: "Perfil", rota: "/perfil" },
  { label: "Painel da prefeitura", rota: "/painel_da_prefeitura" },
];

export default function BarraNavegacao() {
  const pathname = usePathname();
  const { logado } = useLocalSearchParams<{ logado?: string }>();

  const irPara = (rota: string) => {
    router.push({
      pathname: rota as any,
      params: { logado: logado ?? "false" },
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0, maxHeight: 60 }}
      contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 8, gap: 8, alignItems: "center" }}
    >
      {TELAS.map((tela) => {
        const ativa = pathname === tela.rota;
        return (
          <TouchableOpacity
            key={tela.rota}
            onPress={() => irPara(tela.rota)}
            style={{
              backgroundColor: ativa ? "#108245" : "#ffffff",
              borderWidth: 1,
              borderColor: ativa ? "#108245" : "#dcdfe3",
              paddingVertical: 10,
              paddingHorizontal: 18,
              borderRadius: 24,
              shadowColor: "#000",
              shadowOpacity: 0.06,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              elevation: 1,
            }}
          >
            <Text style={{ color: ativa ? "#ffffff" : "#2c2c2c", fontWeight: ativa ? "700" : "500" }}>
              {tela.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}