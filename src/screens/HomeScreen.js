import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/*
	Using the curly braces inside of the parentheses allows for destructuring
		Destructuring is when you essentially rip off the top layer of the object and use the inner
*/

const HomeScreen = function({ navigation }) {
	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={function() {
					navigation.navigate("Components");
				}}
			>
				<Text>Go to Components</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={function() {
					navigation.navigate("Lists");
				}}
			>
				<Text>Go to List Demo</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={function() {
					navigation.navigate("Images");
				}}
			>
				<Text>Go to Image Screen Demo</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={function() {
					navigation.navigate("Counter");
				}}
			>
				<Text>Go to Counter Demo</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={function() {
					navigation.navigate("Colors");
				}}
			>
				<Text>Go to Color Screen Demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		margin: 10
	}
});

export default HomeScreen;
