import { IBestAFSRoute } from '@umijs/plugin-layout';
// import { AccountRoutes } from '../src/modules/account';
//import {WetrialSiteRoutes} from '../src/modules/wetrial-site';

// umi routes: https://umijs.org/zh/guide/router.html
const routes: IBestAFSRoute[]= [
  {
    path: '/',
    menu: {
      name: '欢迎',
      flatMenu: true,
    },
    routes: [
      {
        path: '/',
        component:'@/pages/index'
      },
      // ...AccountRoutes,
      // ...WetrialSiteRoutes,
    ],
  },
];

export default routes;
