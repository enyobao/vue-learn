// import home from './page/home';

const admin = r => require.ensure([], () => r(require('./page/admin.vue')), 'admin');
// const main = r => require.ensure([], () => r(require('./page/main.vue')), 'main');
const home = r => require.ensure([], () => r(require('./page/home.vue')), 'home');
const serviceList = r => require.ensure([], () => r(require('./page/serviceList.vue')), 'serviceList');
const log = r => require.ensure([], () => r(require('./page/log.vue')), 'log');
const statistics = r => require.ensure([], () => r(require('./page/statistics.vue')), 'statistics');

const user = r => require.ensure([], () => r(require('./page/user.vue')), 'user');

export default [
    {
        path: '/',
        redirect: '/home',

    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/serviceList',
        component: serviceList
    },
    {
        path: '/user',
        component: user
    },
    {
        path: '/admin',
        components: {
            fullScreen: admin
        }
    },
    {
        path: '/log',
        component: log
    },
    {
        path: '/statistics',
        component: statistics
    }
];