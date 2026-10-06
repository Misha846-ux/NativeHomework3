import { Ionicons } from "@expo/vector-icons";
import {
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import type { ProductEntity } from "../Models/ProductEntity";

type ProductProps = {
	product: ProductEntity;
	isFavorite: boolean;
};

export function Product({ product, isFavorite }: ProductProps) {
	return (
		<View style={styles.card}>
			<View style={styles.favoriteIcon}>
				<Ionicons
					name={isFavorite ? "heart" : "heart-outline"}
					size={20}
					color={isFavorite ? "#E53935" : "#BDBDBD"}
				/>
			</View>

			<Image
				source={{ uri: product.image }}
				style={styles.image}
				resizeMode="contain"
			/>

			<Text style={styles.title} numberOfLines={1}>
				{product.title}
			</Text>
			<Text style={styles.price}>
				{product.price}{" "}
				<Text style={styles.unit}>{product.unit}</Text>
			</Text>

			<View style={styles.footer}>
				<View style={styles.rating}>
					<Ionicons name="star" size={14} color="#FFB300" />
					<Text style={styles.ratingText}>
						{product.rating}{" "}
						<Text style={styles.reviews}>({product.reviews})</Text>
					</Text>
				</View>

				<View style={styles.addButton}>
					<Ionicons name="cart-outline" size={16} color="#FFFFFF" />
					<Text style={styles.addButtonText}>Додати</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "100%",
		borderRadius: 16,
		padding: 12,
		position: "relative",
		borderWidth: 1,
		borderColor: "#F0F0F0",
		backgroundColor: "#FAFAFA",
	},
	favoriteIcon: {
		position: "absolute",
		top: 10,
		right: 10,
		zIndex: 1,
	},
	image: {
		width: "100%",
		height: 90,
		marginVertical: 8,
	},
	title: {
		color: "#212121",
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 4,
	},
	price: {
		color: "#212121",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
	},
	unit: {
		color: "#757575",
		fontSize: 12,
		fontWeight: "normal",
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 4,
	},
	rating: {
		flexDirection: "row",
		alignItems: "center",
	},
	ratingText: {
		color: "#212121",
		fontSize: 12,
		fontWeight: "bold",
		marginLeft: 2,
	},
	reviews: {
		color: "#9E9E9E",
		fontSize: 11,
		fontWeight: "normal",
	},
	addButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#2E7D32",
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderRadius: 12,
	},
	addButtonText: {
		color: "#FFFFFF",
		fontSize: 11,
		fontWeight: "600",
		marginLeft: 4,
	},
});
