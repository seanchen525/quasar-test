const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/User.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('pages/user/Profile.vue')
      },
      {
        path: 'posts',
        component: () => import('pages/user/Posts.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/Auth.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/auth/Login.vue')
      },
      {
        path: 'signup',
        component: () => import('pages/auth/Signup.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
