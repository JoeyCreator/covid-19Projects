import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountyOverview from "../views/CountyOverview.vue";
import OurTeam from "../views/OurTeam.vue";
import Welcome from "../views/Welcome.vue";
import covid19 from "../views/api/covid19.vue";
import CovidSource from "../covid-19-data/CovidSource.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/countyoverview",
    name: "CountyOverview",
    component: CountyOverview
  },
  {
    path: "/ourteam",
    name: "OurTeam",
    components: OurTeam
  },
  {
    path: "/welcome",
    name: "Welcome",
    components: Welcome
  },
  {
    path: "/covidsource",
    name: "CovidSource",
    components: CovidSource
  },
  {
    path: "/covid19",
    name: "Covid19",
    components: covid19
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
