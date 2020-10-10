import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    layout: "/admin",
    props: {
      auth: true
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    layout: "/admin",
    props: {
      auth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/admin",
    props: {
      auth: true
    }
  }
];

export default dashboardRoutes;
