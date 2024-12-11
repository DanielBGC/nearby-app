import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { IconProps as TablerIconsProps } from "@tabler/icons-react-native";

import { colors, fontFamily } from "@/styles/theme";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

const Button = ({
  children,
  style,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.gray[100]} size={32} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

interface IconProps {
  icon: React.ComponentType<TablerIconsProps>;
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 56,
    maxHeight: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.green.base,
    fontFamily: fontFamily.medium,
  },
  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
});
