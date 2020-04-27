import Layout from '@/layout';

const exampleRouter = {
  path: '/example',
  redirect: '/example/external_mail',
  component: Layout,
  alwaysShow: true,
  name: 'example',
  meta: {
    title: '常用示例',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'external_mail',
      component: () => import('@/views/permission/page'),
      name: 'external_mail',
      meta: {
        title: '外部邮箱'
      }
    }, {
      path: 'sms',
      component: () => import('@/views/permission/page'),
      name: 'sms',
      meta: {
        title: '短信工具'
      }
    }, {
      path: 'qrcode',
      component: () => import('@/views/permission/page'),
      name: 'qrcode',
      meta: {
        title: '二维码生成'
      }
    }, {
      path: 'print',
      component: () => import('@/views/permission/page'),
      name: 'print',
      meta: {
        title: '打印测试'
      }
    }, {
      path: 'signature',
      component: () => import('@/views/permission/page'),
      name: 'signature',
      meta: {
        title: '电子签章'
      }
    }, {
      path: 'contactor',
      component: () => import('@/views/permission/page'),
      name: 'contactor',
      meta: {
        title: '联系簿'
      }
    }
  ]
};

export default exampleRouter;
