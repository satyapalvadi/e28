import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import FriendsPage from './components/pages/FriendsPage.vue';
import ExpensesPage from './components/pages/ExpensesPage.vue';
import CreateExpense from './components/pages/CreateExpense.vue';
import store from './components/store/store';
import Vuelidate from 'vuelidate';

/* eslint-disable no-unused-vars */
const _ = require('lodash');
/* eslint-enable no-unused-vars */

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false

const routes = [
  {path:'/', component: HomePage, name:'home'},
  {path:'/friends', component: FriendsPage, name:'friends'},
  {path:'/expenses', component: ExpensesPage, name:'expenses'},
  {path:'/createExpense', component: CreateExpense, name:'add'},
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
