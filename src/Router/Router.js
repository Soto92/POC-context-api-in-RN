import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FirstStep from "../layouts/firstLayout";
import SecondStep from "../layouts/secondLayout";
import ThirdStep from "../layouts/thirdLayout";
import FourthStep from '../layouts/fourthLayout';

const Router = createStackNavigator(
  {
    FirstStep: {
      screen: FirstStep,
    },
    SecondStep: {
      screen: SecondStep,
    },
    ThirdStep: {
      screen: ThirdStep,
    },
    FourthStep: {
      screen: FourthStep,
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
