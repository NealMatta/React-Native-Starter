import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getCurrentFrame } from "expo/build/AR";

// function () === () =>
const ListScreen = function() {
	// Props are configuration options we specify when we write out a JSX element
	const friends = [
		{ name: "1", age: 1 },
		{ name: "2", age: 2 },
		{ name: "3", age: 3 },
		{ name: "4", age: 4 }
	];
	return (
		<View style={styles.pageStyling}>
			<FlatList
				Vertical
				keyExtractor={friend => friend.name + friend.age}
				// Allows us to define keys on runtime
				data={friends}
				renderItem={({ item }) => {
					return (
						<View>
							<View style={styles.box}>
								<Text>
									{item.name} - {item.age}
								</Text>
							</View>
						</View>
					);
				}}
			/>
			{/* 
				Called with each individual element
				element object has different properties in it
					element === {item: {name: '1'}, index: 0}
				Doing this, we can just use item 
			*/}
			{/* 
				Without a key, when lists get updated, react native has to update every element in our 
				list in order to look at everything cleanly. Keys allow us to track specific objects and react native
				does not need to update every elemement 
				
				Keys allow us to tie some specific element of data with an actual element that appears on the screen 
				Keys MUST:
					be a string
					be consistent between renders
					unique to all data values
				
				keyExtractor takes individual objects from the array
			*/}
		</View>
	);
};

const styles = StyleSheet.create({
	// Creating a grouping of styling rules that we are applying to textStyles
	subtitle: {
		fontSize: 20
	},
	pageStyling: {
		marginVertical: 50
		// marginLeft: 50
		// backgroundColor: "green"
	},
	box: {
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: "#d6d7da",
		margin: 10,
		padding: 10
	}
});

export default ListScreen;
