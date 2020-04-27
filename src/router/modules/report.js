import Layout from '@/layout';

const reportRouter = {
  path: '/report',
  redirect: '/report/sale',
  component: Layout,
  alwaysShow: true,
  name: 'report',
  meta: {
    title: '统计报表',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'sale',
      component: () => import('@/views/permission/page'),
      name: 'sale',
      meta: {
        title: '销售报表'
      }
    },
    {
      path: 'summary',
      component: () => import('@/views/permission/page'),
      name: 'summary',
      meta: {
        title: '销售汇总'
      }
    },
    {
      path: 'daily',
      component: () => import('@/views/permission/page'),
      name: 'daily',
      meta: {
        title: '每日销售数据'
      }
    },
    {
      path: 'profit',
      component: () => import('@/views/permission/page'),
      name: 'profit',
      meta: {
        title: '产品销售利润'
      }
    },
    {
      path: 'realtime',
      component: () => import('@/views/permission/page'),
      name: 'realtime',
      meta: {
        title: '产品即时销售报告'
      }
    }
  ]
};
export default reportRouter;
