import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ShowHome from './components/pages/HomePage.vue';
import ShowProducts from './components/pages/ProductsPage.vue';
import ShowCategories from './components/pages/CategoriesPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ShowHome, name:'home' },
  { path: '/products', component: ShowProducts, name: 'products' },
  { path: '/categories', component: ShowCategories, name: 'categories' }
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
