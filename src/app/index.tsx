import { View } from "react-native";

/* Components */
import { Welcome } from "@/components/Welcome";
import { StepList } from "@/components/StepList";

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
    </View>
  );
}
