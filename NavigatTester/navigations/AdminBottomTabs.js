import CasesStack from './CasesStack';
import EmployeesStack from './EmployeesStack';
import DoctorsStack from './DoctorsStack';
import MoreStack from './MoreStack';
import ProfileStack from './ProfileStack';

export const adminBottomTabs = [
  {
    name: 'CASES',
    label: 'Cases',
    component: CasesStack,
    icon: 'file-alt'
  },
  {
    name: 'EMPLOYEES',
    label: 'Employees',
    component: EmployeesStack,
    icon: 'users'
  },
  {
    name: 'DOCTORS',
    label: 'Doctors',
    component: DoctorsStack,
    icon: 'users-class'
  },
  {
    name: 'MORE',
    label: 'More',
    component: MoreStack,
    icon: 'layer-group'
  },
  {
    name: 'PROFILE',
    label: 'Profile',
    component: ProfileStack,
    icon: 'user'
  },
]