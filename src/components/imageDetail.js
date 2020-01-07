import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = props => {
	return (
		<View>
			<View style={styles.box}>
				<Text>{props.title}</Text>
				<Image source={props.imgInFile} />
				<Text>Image Score - {props.score}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		margin: 10,
		padding: 10,
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: "#d6d7da"
	}
});

export default ImageDetail;
