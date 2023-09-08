import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Sneakers } from './components/Sneakers';
import { Sale } from './components/Sale'
import { About } from './components/About'

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/Sneakers',
    element: <Sneakers />
  },
  {
    path: '/Sale',
    element: <Sale />
  },

  {
    path: '/About',
    element: <About />
  },

  // {
  //   path: '/Login',
  //   element: <Login />
  // },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
