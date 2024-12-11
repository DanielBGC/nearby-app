import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { Categories, CategoriesDataProps } from "@/components/Categories";
import { Markets } from "@/components/Markets";
import { MarketDataProps } from "@/components/Market";

import { api } from "@/services/axios";

import { colors } from "@/styles/theme";

type MarketsProps = MarketDataProps & {};

export default function Home() {
  const [categories, setCategories] = useState<CategoriesDataProps>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setSelectedCategory(data[0].id);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias");
    }
  }

  async function fetchMarkets() {
    try {
      if (!selectedCategory) {
        return;
      }

      const { data } = await api.get("/markets/category/" + selectedCategory);
      setMarkets(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Lugares", "Não foi possível carregar os lugares");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <Markets data={markets} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
});
