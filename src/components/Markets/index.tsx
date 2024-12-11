import { useEffect, useRef } from "react";
import { Text, StyleSheet, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { Market, MarketDataProps } from "../Market";

import { colors, fontFamily } from "@/styles/theme";

interface MarketsProps {
  data: MarketDataProps[];
}

export const Markets = ({ data }: MarketsProps) => {
  const { height } = useWindowDimensions();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 250,
    max: height - 250,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Market data={item} />}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <Text style={styles.title}>Explore locais perto de você!</Text>
        }
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: 100,
    height: 4,
    backgroundColor: colors.gray[300],
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    marginBottom: 16,
  },
});
