<template>
  <div class="blocks">
    <expense-detail v-for="expense in expenses" :key="expense.id" :expense="expense"></expense-detail>
  </div>
</template>

<script>
import ExpenseDetail from "./../ExpenseDetail.vue";

const axios = require("axios");

export default {
  name: "ExpensesPage",
  components: { ExpenseDetail },
  data: function() {
    return {
      expenses: []
    };
  },
  props: [],
  mounted: function() {
    axios
      .get(
        "https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/expenses/"
      )
      .then(response => {
        this.expenses = response.data;
        console.log(this.expenses);
      });
  }
};
</script>

<style>
</style>