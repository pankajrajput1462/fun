import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import SideMenu from './SideMenu/SideMenu';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Item from './Page1/SectionListBasics';
import ItemList from './Page1/ItemList';

export const Stack = StackNavigator({
  ItemList: { screen: ItemList },
}, {
    initialRouteName: 'ItemList',

  })

export default DrawerNavigator({

  Stack: {
    screen: Stack
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {
    contentComponent: SideMenu,
    drawerWidth: 300
  });
