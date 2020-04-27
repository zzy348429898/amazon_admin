import Layout from '@/layout';

const systemRouter = {
  path: '/system',
  redirect: '/system/institution',
  component: Layout,
  alwaysShow: true,
  name: 'system',
  meta: {
    title: '系统管理',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'institution',
      component: () => import('@/views/product/list'),
      name: 'institution',
      meta: {
        title: '机构管理'
      }
    },
    {
      path: 'role',
      component: () => import('@/views/product/list'),
      name: 'role',
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'job',
      component: () => import('@/views/product/list'),
      name: 'job',
      meta: {
        title: '岗位管理'
      }
    },
    {
      path: 'user',
      component: () => import('@/views/permission/page'),
      name: 'user',
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'region',
      component: () => import('@/views/permission/page'),
      name: 'region',
      meta: {
        title: '区域管理'
      }
    },
    {
      path: 'dictionary',
      component: () => import('@/views/permission/page'),
      name: 'dictionary',
      meta: {
        title: '数据字典'
      }
    },
    {
      path: 'menu',
      component: () => import('@/views/permission/page'),
      name: 'menu',
      meta: {
        title: '系统菜单'
      }
    }
  ]
};

export default systemRouter;
