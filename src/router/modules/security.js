import Layout from '@/layout';

const securityRouter = {
  path: '/security',
  redirect: '/security/account',
  component: Layout,
  alwaysShow: true,
  name: 'security',
  meta: {
    title: '系统安全',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'account',
      component: () => import('@/views/product/list'),
      name: 'account',
      meta: {
        title: '我的账号'
      }
    },
    {
      path: 'MWS',
      component: () => import('@/views/product/list'),
      name: 'MWS',
      meta: {
        title: '亚马逊MWX配置'
      }
    },
    {
      path: 'mail_template',
      component: () => import('@/views/product/list'),
      name: 'mail_template',
      meta: {
        title: '邮箱模板管理'
      }
    },
    {
      path: 'mail_plan',
      component: () => import('@/views/product/list'),
      name: 'mail_plan',
      meta: {
        title: '邮箱发送计划'
      }
    },
    {
      path: 'backup',
      component: () => import('@/views/product/list'),
      name: 'backup',
      meta: {
        title: '数据备份'
      }
    },
    {
      path: 'access_control',
      component: () => import('@/views/product/list'),
      name: 'access_control',
      meta: {
        title: '访问控制'
      }
    },
    {
      path: 'log',
      component: () => import('@/views/product/list'),
      name: 'log',
      meta: {
        title: '系统日志'
      }
    },
    {
      path: 'server_monitor',
      component: () => import('@/views/product/list'),
      name: 'server_monitor',
      meta: {
        title: '服务器监控'
      }
    }
  ]
};

export default securityRouter;
