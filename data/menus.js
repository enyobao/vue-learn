export default [
    {
        icon: "fa-home",
        text: "首页",
        href: "home",
        class: ''
    },
    {
        icon: "fa-user",
        text: "服务管理",
        class: '',
        childMenus: [
            {
                href: 'user',
                text: '服务管理111',
                class: ''
            },
            {
                href: 'admin',
                text: '服务管理222',
                class: ''
            }
        ]
    },
    {
        icon: 'fa-cubes',
        text: "服务列表",
        class: '',
        childMenus: [
            {
                href: '/user',
                text: '用户中心',
                class: ''
            },
            {
                href: '/log',
                text: '日志页面',
                class: ''
            }
            ,
            {
                href: '/statistics',
                text: '统计页面',
                class: ''
            }
        ]
    }
]