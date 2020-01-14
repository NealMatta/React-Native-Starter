import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

/*
When to use a Reducer
	- We have a set of state values which are extremely related
	- There is a precise set of well-known ways in which we update these values 
Creating a Reducer	
	- Always called with two seperate objects
		- Arg 1: Object that has all of our state in it 
		- Arg 2: object that describes the update we want to make
	- Never change Arg 1 directly
		- state = state++ is a big No no
	- We must always return a value to be used as Arg 1
		- Whatever value is returned during the reducer, then that value becomes Arg 1
*/

COLOR_INCREMENT = 15;

/* 
Best to define the reducer function above because 
one of the parameters is going to be state and if the state 
variable is reused in the component call, problems will arise 
*/

const reducer = (state, action) => {
	// Action just means how am I going to change state object

	/*
    What will the objects look like
        - state === {red: number, green: number, blue: number}
        - action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
        
        Community convention for action object:
        - 'type' and 'payload' instead of 'colorToChange' and 'amount'
        How it should be ==> 
        - action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    */
	switch (action.colorToChange) {
		case "red":
			const redToCheck = state.red + action.amount;
			if (redToCheck > 255 || redToCheck < 0) {
				return state;
			}
			// 1. Assemble a new object
			// {}
			// 2. Copy and paste the state into this new object
			// {red: 0, green: 0, blue: 0}
			// 3. and then overriding the new object
			// {red: state.red + action.amount, green: 0, blue: 0}
			return { ...state, red: state.red + action.amount };
		case "green":
			const greenToCheck = state.green + action.amount;
			return greenToCheck > 255 || greenToCheck < 0
				? state
				: { ...state, green: state.green + action.amount };
		case "blue":
			const blueToCheck = state.blue + action.amount;
			return blueToCheck > 255 || blueToCheck < 0
				? state
				: { ...state, blue: state.blue + action.amount };
		default:
			return state;
	}
};

const SquareScreenReducer = () => {
	// Any time our state function changes because of the reducer, the page is rerendered
	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0
	});
	const { red, green, blue } = state;

	return (
		<View>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ colorToChange: "red", amount: -COLOR_INCREMENT })
				}
				colorValue="Red"
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({
						colorToChange: "green",
						amount: COLOR_INCREMENT
					})
				}
				onDecrease={() =>
					dispatch({
						colorToChange: "green",
						amount: -COLOR_INCREMENT
					})
				}
				colorValue="Green"
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({
						colorToChange: "blue",
						amount: -COLOR_INCREMENT
					})
				}
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

export default SquareScreenReducer;
