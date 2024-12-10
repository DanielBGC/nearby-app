import { StyleSheet, View, ActivityIndicator } from "react-native";

import { colors } from "@/styles/theme";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.green.base} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[100],
    transform: [{ scale: 1.5 }],
  },
});
