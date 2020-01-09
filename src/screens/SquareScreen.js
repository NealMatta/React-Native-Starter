import React, { useState } from "react";
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
	FlatList
} from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	COLOR_INCREMENT = 15;

	const setColor = (color, change) => {
		switch (color) {
			case "red":
				(red + change > 255) | (red + change < 0)
					? null
					: setRed(red + change);
				return;
			case "green":
				(green + change > 255) | (green + change < 0)
					? null
					: setGreen(green + change);
				return;

			case "blue":
				(blue + change > 255) | (blue + change < 0)
					? null
					: setBlue(blue + change);
				return;
			default:
				return;
		}
	};

	return (
		<View>
			<ColorCounter
				onIncrease={() => setColor("red", COLOR_INCREMENT)}
				onDecrease={() => setColor("red", -COLOR_INCREMENT)}
				colorValue="Red"
			/>
			<ColorCounter
				onIncrease={() => setColor("green", COLOR_INCREMENT)}
				onDecrease={() => setColor("green", -COLOR_INCREMENT)}
				colorValue="Green"
			/>
			<ColorCounter
				onIncrease={() => setColor("blue", COLOR_INCREMENT)}
				onDecrease={() => setColor("blue", -COLOR_INCREMENT)}
				colorValue="Blue"
			/>

			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue} )`
				}}
			></View>
			<Text style={{ fontSize: 50 }}>
				rgb({red}, {green}, {blue}){" "}
			</Text>
			{/* Double Curly braces means an object literal */}
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		margin: 10
	}
});

export default SquareScreen;
