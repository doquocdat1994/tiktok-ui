import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

//khong can dang nhap
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
//can dang nhap
const privatrRoutes = [];

export { publicRoutes, privatrRoutes };
