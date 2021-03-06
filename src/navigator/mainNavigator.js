import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile93493Navigator from '../features/UserProfile93493/navigator';
import Tutorial93492Navigator from '../features/Tutorial93492/navigator';
import NotificationList93464Navigator from '../features/NotificationList93464/navigator';
import Settings93463Navigator from '../features/Settings93463/navigator';
import Settings93455Navigator from '../features/Settings93455/navigator';
import UserProfile93453Navigator from '../features/UserProfile93453/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile93493: { screen: UserProfile93493Navigator },
Tutorial93492: { screen: Tutorial93492Navigator },
NotificationList93464: { screen: NotificationList93464Navigator },
Settings93463: { screen: Settings93463Navigator },
Settings93455: { screen: Settings93455Navigator },
UserProfile93453: { screen: UserProfile93453Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
