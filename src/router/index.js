import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Welcome from '../components/Welcome.vue'
import  Documents from "../components/Documents.vue";

const routes = [
  {
    path: "/",
    redirect: '/login',
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/login",
    component: Login,
  },

  {
    path: "/home",
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: "/welcome",
        component: Welcome,
      },

      {
        path: "/documents",
        component: Documents,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((old, next)=>{
  console.log(old, next)
})

export default router;
