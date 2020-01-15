import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import First from "../layouts/firstLayout";
import Second from "../layouts/secondLayout";
import Third from "../layouts/thirdLayout";

const Router = createStackNavigator(
  {
    First: {
      screen: First,
    },
    Second: {
      screen: Second,
    },
    Third: {
      screen: Third,
    }
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      animationEnabled: false,
      gestureEnabled: false,
      cardOverlayEnabled: false
    }
  }
);

export default createAppContainer(Router);
