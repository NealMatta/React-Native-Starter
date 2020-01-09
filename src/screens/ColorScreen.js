import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from "react-native";

const ColorScreen = () => {
	const [colors, updateColors] = useState([]);
	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					updateColors([...colors, randomRGB()]);
					// the ...colors adds all the elements from colors into this new array
				}}
			>
				<Text>Add a new color</Text>
			</TouchableOpacity>
			<FlatList
				keyExtractor={item => item}
				data={colors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>;
				}}
			/>
		</View>
	);
};

const randomRGB = function() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	// tempalte string with backticks
	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		margin: 10
	},
	colorBox: {
		height: 100,
		width: 100
	}
});

export default ColorScreen;
