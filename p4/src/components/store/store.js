import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
    state: {
        personResponsibilities: {},
        friends: {},
        expenses: {}
    },

    mutations: {
        setPersonResponsibilities(state, payload) {
            state.personResponsibilities = payload;
        },
        setFriends(state, payload) {
            state.friends = payload;
        },
        setExpenses(state, payload) {
            state.expenses = payload;
        },
        addExpense(state, payload) {
            _.merge(state.expenses, payload);
        }
    },

    actions: {
        //chain the 2 api calls needed for data in the homepage
        getData(context) {
            axios.get("https://e28-expenser.firebaseio.com/persons.json").then(response => {
                context.commit('setFriends', response.data);
                axios.get("https://e28-expenser.firebaseio.com/personResponsibilities.json").then(response => {
                    context.commit('setPersonResponsibilities', response.data);
                });
            });
        },

        getFriends(context) {
            axios.get("https://e28-expenser.firebaseio.com/persons.json").then(response => {
                context.commit('setFriends', response.data);
            });
        },

        getExpenses(context) {
            axios.get("https://e28-expenser.firebaseio.com/expenses.json").then(response => {
                context.commit('setExpenses', response.data);
            });
        }
    },

    getters: {
        getNextExpenseId(state) {
            let expenseIds = _.map(state.expenses, "id");
            console.log(expenseIds);
            let expenseIdNums = _.sortBy(_.map(expenseIds, (n) => Number(n)));
            console.log(expenseIdNums);
            return expenseIdNums[expenseIdNums.length - 1] + 1;
        },

        personExists(state) {
            return function (pid) {
                let found =_.find(state.friends, friend => {return friend.id == pid});
                let lcl = found ? true : false;
                return lcl;
            }
        }
    }
})