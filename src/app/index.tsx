import { View, Text } from "react-native";
import { fontFamily } from "@/styles/font-family";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: fontFamily.bold,
          fontSize: 22,
        }}
      >
        Hello Nearby Project
      </Text>
    </View>
  );
}
