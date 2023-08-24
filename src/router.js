import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";
import ContactPage from "./components/ContactPage.vue";

// Define route components
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/projects",
    component: ProjectsPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
