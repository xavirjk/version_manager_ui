import { c_routes } from '../utils';
import * as views from '../views';
export const routes = [
  {
    path: c_routes.home,
    component: views.Private,
    isPrivate: true,
  },
  {
    path: c_routes.signin,
    component: views.Login,
    isPrivate: false,
  },
  {
    path: c_routes.notFound,
    component: views.PageNotFound,
    isPrivate: false,
  },
];
