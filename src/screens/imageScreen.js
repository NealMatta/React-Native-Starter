import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = function({ navigation }) {
	return (
		<View>
			<ImageDetail title="Forest" imgInFile={require("../../assets/forest.jpg")} score={9} />
			<ImageDetail title="Mountains" imgInFile={require("../../assets/mountain.jpg")} score={7} />
			<ImageDetail title="Beach" imgInFile={require("../../assets/beach.jpg")} score={4} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
