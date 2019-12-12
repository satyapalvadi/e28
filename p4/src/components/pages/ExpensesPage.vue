<template>
  <div class="blocks">
    <expense-detail v-for="expense in expenses" :key="expense.id" :expense="expense"></expense-detail>
  </div>
</template>

<script>
import ExpenseDetail from "./../ExpenseDetail.vue";

export default {
  name: "ExpensesPage",
  components: { ExpenseDetail },
  data: function() {
    return {};
  },

  computed: {
    expenses: function() {
      return this.$store.state.expenses;
    }
  },

  props: [],
  mounted: function() {
    this.$store.dispatch("setExpenses");
  }
};
</script>

<style>
</style>