const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: 'livestocks',
    component: () => import('pages/Livestocks.vue'),
    alias: ''
  },
  {
    path: '/:id',
    component: () => import('pages/Animal.vue')
  }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
