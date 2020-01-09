import React, { useState } from "react";
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
	FlatList
} from "react-native";

const ColorCounter = props => {
	// const [colors, updateColors] = useState([]);
	return (
		<View style={styles.colorSection}>
			<Text style={styles.title}> {props.colorValue}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.onIncrease()}
			>
				<Text>Increase {props.colorValue}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.onDecrease()}
			>
				<Text>Decrease {props.colorValue}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	title: { fontSize: 20 },
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		margin: 10
	},
	colorSection: {
		marginBottom: 50
	}
});

export default ColorCounter;
