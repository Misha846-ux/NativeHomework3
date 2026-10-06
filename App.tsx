import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CategoryList } from "./src/components/CategoryList";
import { ProductList } from "./src/components/ProductList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CategoryEntity } from "./src/Models/Category";
import { ProductEntity } from "./src/Models/ProductEntity";

const API_BASE_URL = "http://192.168.0.252:3000"

export default function App() {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const categoriesRsponse = await fetch(`${API_BASE_URL}/categories`);
      const productsResponse = await fetch(`${API_BASE_URL}/products`);
      const categoriesData = await categoriesRsponse.json() as CategoryEntity[];
      const productsData = await productsResponse.json() as ProductEntity[];
      setCategories(categoriesData);
      setProducts(productsData);
      setLoading(false);
    };

    loadData();
    setLoading(!loading);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.categories}>
          <CategoryList categories={categories} />
        </View>
        <View style={styles.products}>
          <ProductList products={products} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  categories: {
    width: "100%",
    height: "10%",
  },
  products: {
    flex: 1,
  },
  feedback: {
    flex: 1,
  },
  error: {
    padding: 24,
    color: "#B00020",
    textAlign: "center",
  },
});
