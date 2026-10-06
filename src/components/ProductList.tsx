import { FlatList, StyleSheet } from "react-native";
import type { ProductEntity } from "../Models/ProductEntity";
import { Product } from "./Product";

type ProductListProps = {
	products: ProductEntity[];
};

export function ProductList({ products }: ProductListProps) {
	return (
		<FlatList
			data={products}
			keyExtractor={(product) => product.id}
			numColumns={2}
			columnWrapperStyle={styles.row}
			contentContainerStyle={styles.content}
			renderItem={({ item }) => <Product product={item} isFavorite={false} />}
			showsVerticalScrollIndicator={false}
		/>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingHorizontal: 16,
		paddingTop: 12,
		paddingBottom: 24,
	},
	row: {
		justifyContent: "space-between",
		marginBottom: 16,
	},
});
