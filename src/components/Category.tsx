import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import type { CategoryEntity } from "../Models/Category";

type CategoryProps = {
	category: CategoryEntity;
};

export function Category({ category }: CategoryProps) {
	return (
		<View style={styles.card}>
			<View style={[styles.iconContainer, { backgroundColor: category.bgColor }]}>
				<MaterialCommunityIcons
					name={category.icon as any}
					size={32}
					color={category.iconColor}
				/>
			</View>
			<Text style={styles.name} numberOfLines={1}>
				{category.name}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		marginRight: 16,
		width: 72,
	},
	iconContainer: {
		width: 48,
		height: 48,
		borderRadius: 16,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 4,
	},
	name: {
		color: "#212121",
		fontSize: 10,
		textAlign: "center",
		lineHeight: 12,
	},
});
