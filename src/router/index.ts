import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import Layout from "@/views/layout/MasterView.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: DashboardView,
        name: "Dashboard",
      },
      {
        path: "list",
        component: () => import("@/views/ListView.vue"),
        name: "List",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
