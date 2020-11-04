import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Help from "../views/help.vue";
import OurTeam from "../views/OurTeam.vue";
import Contacts from "../views/Contacts.vue"
import Services from "../views/Services.vue"
import Blog from "../views/Blog.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  }, 
  {
      path: "/help",
      name: "help", 
      component: Help 
  }, 
  {
      path: "/OurTeam",
      name: "OurTeam", 
      component: OurTeam
  }, 
  {
      path: "/Contacts",
      name: "Contacts", 
      component: Contacts
  }, 
  {
      path: "/Services",
      name: "Services", 
      component: Services
  }, 
  {
      path: "/Blog", 
      name: "Blog", 
      component: Blog
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
