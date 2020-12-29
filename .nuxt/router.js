import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _add1d126 = () => interopDefault(import('../pages/papers/index.vue' /* webpackChunkName: "pages/papers/index" */))
const _2812d500 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _4723ddd6 = () => interopDefault(import('../pages/papers/_id.vue' /* webpackChunkName: "pages/papers/_id" */))
const _775bd130 = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _ca27cfc2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/papers",
    component: _add1d126,
    name: "papers"
  }, {
    path: "/projects",
    component: _2812d500,
    name: "projects"
  }, {
    path: "/papers/:id",
    component: _4723ddd6,
    name: "papers-id"
  }, {
    path: "/projects/:id",
    component: _775bd130,
    name: "projects-id"
  }, {
    path: "/",
    component: _ca27cfc2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
