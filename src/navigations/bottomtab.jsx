import InnerCategoryDepartment from '../screens/InnerCategoryDepartment/InnerCategoryDepartment';
import HomeStacks from './HomeStacks';
import PaymentStacks from './PaymentStacks';
import ItemStacks from './ItemStacks';

export const BottomTab = [
  {
    name: 'Home',
    component: HomeStacks,
    icon: 'home',
  },
  {
    name: 'Category',
    component: InnerCategoryDepartment,
    icon: 'layers',
  },
  {
    name: 'Item',
    component: ItemStacks,
    icon: 'shirt',
  },
  {
    name: 'Payment',
    component: PaymentStacks,
    icon: 'cash',
  },
];
