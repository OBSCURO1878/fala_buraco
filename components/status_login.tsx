import React from "react";
import { Text } from "react-native";

type Props = {
  estaLogado: boolean;
};

export default function StatusLogin({ estaLogado }: Props) {
  return (
    <Text style={{ color: estaLogado ? "green" : "red", fontWeight: "bold", marginBottom: 10 }}>
      {estaLogado ? "Logado" : "Não logado"}
    </Text>
  );
}