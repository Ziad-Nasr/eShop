import AuthStack from './auth';
import Notifications from '../screens/Notifications/Notifications';
import Location from '../screens/Location/Location';
import Home from '../screens/Home/Home';
import Item from '../screens/Item/Item';
import Department from '../screens/Department/Department';
import InnerCategoryDepartment from '../screens/InnerCategoryDepartment/InnerCategoryDepartment';
import Payment from '../screens/Payment/Payment';
import Shipment from '../screens/Shipment/Shipment';
import tab from './tab';
export const Navigations = [
  ...AuthStack,
  {
    name: 'Notifications',
    component: Notifications,
  },
  {
    name: 'Location',
    component: Location,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Item',
    component: Item,
  },
  {
    name: 'ICD',
    component: InnerCategoryDepartment,
  },
  {
    name: 'Department',
    component: Department,
  },
  {
    name: 'Payment',
    component: Payment,
  },
  {
    name: 'Shipment',
    component: Shipment,
  },
  {
    name: 'tab',
    component: tab,
  },
];
