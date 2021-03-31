import Vue from "vue";
import VueRouter from "vue-router";
import Query from "../views/query.vue";
import Report from "../views/report.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/query",
    name: "Query",
    component: Query
  },
  {
    path: "/report",
    name: "Report",
    component: Report
  }
];

const router = new VueRouter({
  routes
});

export default router;