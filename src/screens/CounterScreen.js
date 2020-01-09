import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const CounterScreen = () => {
	// This is a function based component

	// Using state, react automatically watches the variable. And when changed, React automatically updates content on screen
	const [counter, setCounter] = useState(0);
	// When calling UseState, you need to pass in the default value/starting value of the piece of data
	/* Array Destructuring Example
        const colors = ['red', 'green']
        const [color1, color2] = colors
        color1 = 'red; color2 = 'green'
    */
	// When changing the state, you need to the use the setCounter function
	// Instances of components will create their own individual states

	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					setCounter(counter + 1);
				}}
			>
				<Text>Increase Counter</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					setCounter(counter - 1);
				}}
			>
				<Text>Decrease Counter</Text>
			</TouchableOpacity>

			<View>
				<Text>Current Count: {counter} </Text>
			</View>
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

export default CounterScreen;
