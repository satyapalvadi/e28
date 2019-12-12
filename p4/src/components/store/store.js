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
        }
    },

    actions: {
        //chain the 2 api calls needed for data in the homepage
        setData(context) {
            axios.get("https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/persons").then(response => {
                context.commit('setFriends', response.data);
                axios.get("https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/personResponsibilities").then(response => {
                    context.commit('setPersonResponsibilities', response.data);
                });
            });
        },

        setFriends(context) {
            axios.get("https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/persons").then(response => {
                context.commit('setFriends', response.data);
            });
        },

        setExpenses(context) {
            axios.get("https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/expenses").then(response => {
                context.commit('setExpenses', response.data);
            });
        }
    },

    getters: {

    }
})