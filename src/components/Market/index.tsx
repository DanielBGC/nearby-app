import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { colors, fontFamily } from "@/styles/theme";
import { IconTicket } from "@tabler/icons-react-native";

export type MarketDataProps = {
  id: string;
  name: string;
  description: string;
  address: string;
  cover: string;
  coupons: number;
};

interface MarketProps extends TouchableOpacityProps {
  data: MarketDataProps;
}

export const Market = ({ data, ...rest }: MarketProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.8}>
      <Image source={{ uri: data.cover }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },
  tickets: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
});
