import React, { useReducer } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

// action === howToChangeState
const reducer = (state, action) => {
	/*
    Expect
        state === {count : number}
        action === { type: 'increment' || 'decrement}
    */
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

const CounterScreenReducer = () => {
	// Dispatch === callMyReducer
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					dispatch({ type: "increment" });
				}}
			>
				<Text>Increase Counter</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					dispatch({ type: "decrement" });
				}}
			>
				<Text>Decrease Counter</Text>
			</TouchableOpacity>

			<View>
				<Text>Current Count: {state.count} </Text>
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

export default CounterScreenReducer;
