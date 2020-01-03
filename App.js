import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

// Object that decides what object to show on the screen at any time
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen
	},
	{
		initialRouteName: "Components",
		defaultNavigationOptions: {
			title: "App"
		}
	}
);

export default createAppContainer(navigator);
