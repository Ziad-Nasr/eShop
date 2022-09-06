import PreScreen from '..//screens/PreScreen/PreScreen';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Item from '../screens/Item/Item';
import Shipment from '../screens/Shipment/Shipment';
import AppTester from '../hooks/AppTester';

export default AuthStack = [
  {
    name: 'PreScreen',
    component: PreScreen,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
];
