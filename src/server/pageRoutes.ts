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
    name: 'MyInfo',
    pattern: '/myinfo',
    page: 'myInfo/MyInfoPage',
  },
  {
    name: 'LoginPage',
    pattern: '/login',
    page: 'login/LoginPage',
  },
  {
    name: 'MyProduct',
    pattern: '/myproduct',
    page: 'myproduct/MyProductPage',
  },
  {
    name: 'MyInfoChange',
    pattern: '/myinfochange',
    page: 'myInfoChange/MyInfoChangePage',
  },
  {
    name: 'ProductId',
    pattern: '/products/:product_id',
    page: 'product/ProductDetailPage',
  },
  {
    name: 'Search',
    pattern: '/search',
    page: 'search/SearchPage',
  },
  {
    name: 'User',
    pattern: '/user',
    page: 'user/OtherUsersPage',
  },
  {
    name: 'Upload',
    pattern: '/upload',
    page: 'upload/UploadPage',
  },
] as Routes[];

pageRoutes.forEach((route) => {
  routes.add(route);
});

export default routes;
