import PreScreen from '..//screens/PreScreen/PreScreen';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Notifications from '../screens/Notifications/Notifications';
import Location from '../screens/Location/Location';
import Home from '../screens/Home/Home';
import Item from '../screens/Item/Item';
import Department from '../screens/Department/Department';
import InnerCategoryDepartment from '../screens/InnerCategoryDepartment/InnerCategoryDepartment';
import Payment from '../screens/Payment/Payment';
import Shipment from '../screens/Shipment/Shipment';
import tab from './tab';
import AppTester from '../hooks/AppTester';
import HomeStacks from './HomeStacks';
export const Navigations = [
  {
    name: 'PreScreen',
    component: PreScreen,
  },
  {
    name: 'AppTester',
    component: AppTester,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'Notifications',
    component: Notifications,
  },
  {
    name: 'Location',
    component: Location,
  },
  {
    name: 'ICD',
    component: InnerCategoryDepartment,
  },
  {
    name: 'Shipment',
    component: Shipment,
  },
  {
    name: 'HomeStacks',
    component: HomeStacks,
  },
  {
    name: 'tab',
    component: tab,
  },
  {
    name: 'Home',
    component: Home,
    icon: require('../assets/home.png'),
  },
  {
    name: 'Payment',
    component: Payment,
    icon: require('../assets/visa.png'),
  },
];
