import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
    state: {
        personResponsibilities: null,
        friends: null,
        expenses: null
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
        addExpense(state, payload){
            _.merge(state.expenses, payload);
        }
    },

    actions: {
        //chain the 2 api calls needed for data in the homepage
        setData(context) {
            axios.get("https://e28-expenser.firebaseio.com/persons.json").then(response => {
                context.commit('setFriends', response.data);
                axios.get("https://e28-expenser.firebaseio.com/personResponsibilities.json").then(response => {
                    context.commit('setPersonResponsibilities', response.data);
                });
            });
        },

        setFriends(context) {
            axios.get("https://e28-expenser.firebaseio.com/persons.json").then(response => {
                context.commit('setFriends', response.data);
            });
        },

        setExpenses(context) {
            axios.get("https://e28-expenser.firebaseio.com/expenses.json").then(response => {
                context.commit('setExpenses', response.data);
            });
        }
    },

    getters:{
        getNextExpenseId(state){
            let expenseIds = _.map(state.expenses, "id");
            let expenseIdNums = _.sortBy(_.map(expenseIds, (n) => Number(n) ));
            return expenseIdNums[expenseIdNums.length - 1] + 1;
        }
    }
})