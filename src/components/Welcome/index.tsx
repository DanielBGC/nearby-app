import { View, Text, Image, StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const Welcome = () => {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Bem-vindo(a) ao Nearby!</Text>

      <Text style={styles.subtitle}>
        Tenha cupons de vantagem para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
