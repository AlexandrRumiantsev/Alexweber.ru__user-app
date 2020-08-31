import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _051171ef = () => interopDefault(import('../pages/papers/index.vue' /* webpackChunkName: "pages/papers/index" */))
const _6ee09702 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _ee3db7d2 = () => interopDefault(import('../pages/papers/_id.vue' /* webpackChunkName: "pages/papers/_id" */))
const _204c71ea = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _40b5abdd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _051171ef,
    name: "papers"
  }, {
    path: "/projects",
    component: _6ee09702,
    name: "projects"
  }, {
    path: "/papers/:id",
    component: _ee3db7d2,
    name: "papers-id"
  }, {
    path: "/projects/:id",
    component: _204c71ea,
    name: "projects-id"
  }, {
    path: "/",
    component: _40b5abdd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
