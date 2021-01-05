import type { AppRouteRecordRaw } from '@/router/types'
import { DEFAULT_LAYOUT_COMPONENT } from '../constants'
// 主框架根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: DEFAULT_LAYOUT_COMPONENT,
  redirect: '/dashboard',
  meta: {
    title: 'Root'
  },
  children: []
}

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录'
  }
}

// 基础路由 不用权限
export const basicRoutes = [LoginRoute, RootRoute]
