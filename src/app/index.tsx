import { View } from "react-native";
import { router } from "expo-router";

/* Components */
import { Welcome } from "@/components/Welcome";
import { StepList } from "@/components/StepList";
import { Button } from "@/components/Button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40,
      }}
    >
      <Welcome />

      <StepList />

      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
