import { View, Text, StyleSheet } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

import { Step } from "@/components/Step";

import { colors, fontFamily } from "@/styles/theme";

export const StepList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>

      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
