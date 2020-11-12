const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/Reporting",
    component: () => import("../components/Reporting/ReportingItem.vue")
  },
  {
    path: "/WindowPortal",
    component: () => import("../components/Reporting/WindowPortal.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
