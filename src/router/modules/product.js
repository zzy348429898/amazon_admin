import Layout from '@/layout';

const productRouter = {
  path: '/product',
  redirect: '/product/list',
  component: Layout,
  alwaysShow: true,
  name: 'Product',
  meta: {
    title: '产品管理',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/product/list'),
      name: 'product_list',
      meta: {
        title: '产品列表',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'upload',
      component: () => import('@/views/product/upload'),
      name: 'product_upload',
      meta: {
        title: '产品信息上传',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
  ]
};

export default productRouter;
