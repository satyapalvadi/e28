<template>
  <div id="create-expense">
    <h1>Add a Expense</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Description</label>
        <input
          type="text"
          :class="{ 'form-input-error': $v.expense.description.$error }"
          id="description"
          data-test="expense-description-input"
          v-model="$v.expense.description.$model"
        />
        <div v-if="$v.expense.description.$error">
          <div
            class="form-feedback-error"
            v-if="!$v.expense.description.required"
          >Expense description is required.</div>
        </div>
      </div>

      <div class="form-group">
        <label for="name">Expense Amount</label>
        <input
          type="number"
          :class="{ 'form-input-error': $v.expense.amount.$error }"
          data-test="expense-amount-input"
          id="amount"
          v-model="$v.expense.amount.$model"
        />
        <div v-if="$v.expense.amount.$error">
          <div
            class="form-feedback-error"
            v-if="!$v.expense.amount.required"
          >Expense amount is required.</div>
        </div>
      </div>

      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" data-test="expense-date" id="expense-date" v-model="expense.date" />
      </div>

      <div class="form-group">
        <label for="splitters">Splitters</label>
        <input
          type="text"
          id="Splitters"
          data-test="expense-splitters-input"
          v-model="expense.splitters"
        />
        <small id="categoriesHelp" class="form-help">Comma separated e.g. p1-40, p2-60</small>
      </div>

      <button data-test="add-expense-button" type="submit">Add Expense</button>

      <div class="form-feedback-error" v-if="formHasErrors">Please correct the above errors</div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

let expense = {};
expense = {
  description: "",
  amount: "",
  date: "",
  paidBy: "",
  split: "",
  splitters: []
};

const axios = require("axios");

export default {
  name: "CreateExpense",
  data: function() {
    return {
      expense: expense,
      formHasErrors: false
    };
  },
  validations: {
    expense: {
      description: {
        required
        // minLength: minLength(4),
        // doesNotExist(value) {
        //     return !this.$store.getters.getProductBySlug(value);
        // }
      },
      amount: {
        required
      }
    }
  },
  watch: {
    "$v.$anyError": function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    handleSubmit: function() {
      if (!this.formHasErrors) {
        axios
          .post(
            "https://e28-expenser.firebaseio.com/expenses.json",
            this.expense
          )
          .then(response => {
            console.log(response);
            // let key = response.data.name;
            // this.$store.commit('addProduct', {
            //     [key]: this.product
            // });
            this.$router.push({
                name: 'expenses',
            });
          });
      }
    }
  }
};
</script>

<style scoped>
#description {
  height: 150px;
}
</style>