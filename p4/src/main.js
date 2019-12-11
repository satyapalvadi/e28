import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import FriendsPage from './components/pages/FriendsPage.vue';
import ExpensesPage from './components/pages/ExpensesPage.vue';
import store from './components/store/store';

Vue.use(VueRouter);

const routes = [
  {path:'/', component: HomePage, name:'home'},
  {path:'/friends', component: FriendsPage, name:'friends'},
  {path:'/expenses', component: ExpensesPage, name:'expenses'},
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
