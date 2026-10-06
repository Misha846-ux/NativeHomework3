import { FlatList, StyleSheet } from "react-native";
import type { CategoryEntity } from "../Models/Category";
import { Category } from "./Category";

type CategoryListProps = {
	categories: CategoryEntity[];
};

export function CategoryList({ categories }: CategoryListProps) {
	return (
		<FlatList
			data={categories}
			horizontal
			keyExtractor={(category) => category.id}
			renderItem={({ item }) => <Category category={item} />}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.content}
		/>
	);
}

const styles = StyleSheet.create({
	content: {
		alignItems: "center",
		paddingHorizontal: 16,
	},
});
