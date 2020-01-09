import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";

// Object that decides what object to show on the screen at any time
const navigator = createStackNavigator(
	// When a screen is rendered, certain props are passed along to it
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		Lists: ListScreen,
		Images: ImageScreen,
		Counter: CounterScreen,
		Colors: ColorScreen
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App"
		}
	}
);

export default createAppContainer(navigator);
