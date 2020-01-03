import React from "react";
import { View, Text, StyleSheet } from "react-native";

// function () === () =>
const HomeScreen = function() {
	// [1]
	const name = "Neal";

	return (
		<View>
			<Text style={{ fontSize: 45 }}>Getting started with react native!</Text>
			<Text style={styles.subtitle}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	// Creating a grouping of styling rules that we are applying to textStyles
	subtitle: {
		fontSize: 20
	}
});

export default HomeScreen;
