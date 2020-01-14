import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

// Never want to have a parent element to inspect a child's props

const TextScreen = () => {
	const [password, setPassword] = useState("");
	return (
		<View>
			<View>
				<Text>Enter Password: </Text>
				{/* Need these two for emails, passwords, etc.  */}
				<TextInput
					style={styles.input}
					autoCapitalize="none"
					autoCorrect={false}
					value={password}
					onChangeText={newText => setPassword(newText)}
				/>
			</View>

			{password.length < 4 ? (
				<Text>Password must be 4 characters</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	// ALWAYS need custom styling
	input: {
		margin: 15,
		padding: 15,
		borderColor: "black",
		borderWidth: 1,
		fontSize: 20
	}
});

export default TextScreen;
