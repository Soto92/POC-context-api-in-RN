import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import First from '../layouts/firstLayout';
import Second from '../layouts/secondLayout';
import Third from '../layouts/thirdLayout';

const Router = createSwitchNavigator({
  First: {
    screen: First,
  },
  Second: {
    screen: Second,
  },
  Third: {
    screen: Third,
  },
});

export default createAppContainer(Router);