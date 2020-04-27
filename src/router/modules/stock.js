import Layout from '@/layout';

const stockRouter = {
  path: '/stock',
  redirect: '/stock/FBA_stock',
  component: Layout,
  alwaysShow: true,
  name: 'stock',
  meta: {
    title: '库存管理',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'FBA_management',
      component: () => import('@/views/product/list'),
      name: 'FBA_management',
      meta: {
        title: 'FBA备货管理'
      }
    },
    {
      path: 'FBA_stock',
      component: () => import('@/views/product/list'),
      name: 'FBA_stock',
      meta: {
        title: 'FBA实时库存'
      }
    },
    {
      path: 'FBA_stock_report',
      component: () => import('@/views/product/list'),
      name: 'FBA_stock_report',
      meta: {
        title: 'FBA实时库存（报表）'
      }
    },
    {
      path: 'import_FBA_inventory',
      component: () => import('@/views/permission/page'),
      name: 'import_FBA_inventory',
      meta: {
        title: '导入FBA Inventory'
      }
    },
    {
      path: 'FBA_shipment',
      component: () => import('@/views/permission/page'),
      name: 'FBA_shipment',
      meta: {
        title: 'FBA Shipment'
      }
    },
    {
      path: 'import_FBA_shipment',
      component: () => import('@/views/permission/page'),
      name: 'import_FBA_shipment',
      meta: {
        title: '导入FBA Shipment'
      }
    },
    {
      path: 'shipment_cost',
      component: () => import('@/views/permission/page'),
      name: 'shipment_cost',
      meta: {
        title: 'Shipment费用'
      }
    }
  ]
};

export default stockRouter;
