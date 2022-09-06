import {
  Splash,
  Auth,
  PreLogin,
  Login,
  PreRegister,
  Register,
  Admin,
  SendNotifis
}
from '@screens'

import Main from './../../Main'
export const mainStack = [
  {
    name: 'MAIN',
    component: Main
  },
  {
    name: 'ADMIN',
    component: Admin
  },
  {
    name: 'SPLASH',
    component: Splash
  },
  {
    name: 'AUTH',
    component: Auth
  },
  {
    name: 'PRE_LOGIN',
    component: PreLogin
  },
  {
    name: 'LOGIN',
    component: Login
  },
  {
    name: 'PRE_REGISTER',
    component: PreRegister
  },
  {
    name: 'REGISTER',
    component: Register
  },
  {
    name: 'SEND_NOTIFIS',
    component: SendNotifis
  },
]