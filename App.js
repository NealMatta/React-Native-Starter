import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/imageScreen";

// Object that decides what object to show on the screen at any time
const navigator = createStackNavigator(
	// When a screen is rendered, certain props are passed along to it
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		Lists: ListScreen,
		Images: ImageScreen
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App"
		}
	}
);

export default createAppContainer(navigator);
