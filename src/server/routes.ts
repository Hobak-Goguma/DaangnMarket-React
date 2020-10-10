import nextRoutes from 'next-routes';

interface Routes {
  name: string;
  pattern: string;
  page: string;
}

const routes = new nextRoutes();

const pageRoutes = [
  {
    name: 'Home',
    pattern: '/',
    page: 'home/HomePage',
  },
  {
    name: 'A',
    pattern: '/a',
    page: 'a/App',
  },
  {
    name: 'test',
    pattern: '/b/:id',
    page: 'b/R',
  },
] as Routes[];

pageRoutes.forEach((route) => {
  routes.add(route);
});

export default routes;
