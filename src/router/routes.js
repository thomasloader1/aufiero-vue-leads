import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import LoginLayout from "@/layout/dashboard/LoginLayout.vue"
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Login from "@/pages/Login.vue";
import CreateBrand from "../components/CreateBrand/CreateBrandComponent.vue";
import Brand from "../components/CreateBrand/BrandsComponent.vue";
import BatchList from "../components/ImportBatch/BatchList.vue";

const routes = [
  {
    path: '/',
    component: LoginLayout,
    redirect: '/auth',
    beforeEnter: (to, from, next) =>{
      const isAuth = localStorage.getItem('isAuth');
      isAuth === 'true' ? next({path:'/main/dashboard'}) : next()
    },
    children:[
      {
        path: "auth",
        name: "login",
        component: Login
      },
    ]
  },
  {
    path: "/main",
    component: DashboardLayout,
    beforeEnter: (to, from, next) =>{
      const isAuth = localStorage.getItem('isAuth');
      isAuth === 'true' ? next() : next({path:'/'})
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "create-brand",
        name: "Crear Marca",
        component: CreateBrand
      },
      {
        path: "brand-list",
        name: "Marcas",
        component: Brand
      },
      {
        path: "import-batch",
        name: "Import Batch",
        component: CreateBrand
      },
      {
        path: "batch-list",
        name: "List Batch",
        component: BatchList
      },
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
