import { View, Text, StyleSheet } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { colors, fontFamily } from "@/styles/theme";

interface StepProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
}

export const Step = ({ icon: Icon, title, description }: StepProps) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 8,
  },
});
