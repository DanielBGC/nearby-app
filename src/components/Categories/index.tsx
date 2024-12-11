import { FlatList, StyleSheet } from "react-native";

import { Category } from "../Category";

export type CategoriesDataProps = {
  id: string;
  name: string;
}[];

interface CategoriesProps {
  data: CategoriesDataProps;
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function Categories({
  data,
  selectedCategory,
  onSelectCategory,
}: CategoriesProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelectCategory(item.id)}
          isSelected={item.id === selectedCategory}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: "absolute",
    zIndex: 1,
    top: 64,
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
});
