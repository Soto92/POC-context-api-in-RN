import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from '../layouts/firstLayout';
import Second from '../layouts/secondLayout';
import Third from '../layouts/thirdLayout';

const Router = createStackNavigator({
  First: {
    screen: First,
    navigationOptions: {
      header: null,
    }
  },
  Second: {
    screen: Second,
    navigationOptions: {
      header: null,
    }
  },
  Third: {
    screen: Third,
    navigationOptions: {
      header: null,
    }
  },
},  {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
}
);

export default createAppContainer(Router);