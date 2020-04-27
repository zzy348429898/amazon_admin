import Layout from '@/layout';

const orderRouter = {
  path: '/order',
  redirect: '/order/list',
  component: Layout,
  alwaysShow: true,
  name: 'order',
  meta: {
    title: '订单管理',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/product/list'),
      name: 'order_list',
      meta: {
        title: '订单列表'
      }
    },
    {
      path: 'list2',
      component: () => import('@/views/product/list'),
      name: 'order_list2',
      meta: {
        title: '订单列表2'
      }
    }
  ]
};

export default orderRouter;
