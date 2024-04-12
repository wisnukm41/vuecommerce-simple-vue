import { createRouter, createWebHistory } from "vue-router";

import Login from "./components/LoginView.vue"
import Register from "./components/Register.vue"
import ProductList from "./components/ProductList.vue"
import AddProduct from "./components/AddProduct.vue"
import EditProduct from "./components/EditProduct.vue"
import ProductDetail from "./components/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { public: true }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { public: true }
    },
    {
      path: "/",
      name: "index",
      component: ProductList,
      meta: { public: false }
    },
    {
      path: "/add-product",
      name: "addProduct",
      component: AddProduct,
      meta: { public: false }
    },
    {
      path: "/edit-product/:id",
      name: "editProduct",
      component: EditProduct,
      meta: { public: false }
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: ProductDetail,
      meta: { public: false }
    },
  ],
});

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('token') ? true : false;
    if(!to.meta.public && !isLogin) {
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router;
