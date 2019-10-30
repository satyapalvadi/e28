<template>
  <div id="app">
    <h1>Rock-paper-scissors</h1>
    <input-component :options="options" @winner-selected="winnerSelected($event)"></input-component>
    <section id="output" v-cloak v-if="winner" class="resultSection">
      <results-component
        :winner="winner"
        @handle-reset-button="handleResetButton"
        :tie-count="tieCount"
        :user-win-count="userWinCount"
        :system-win-count="systemWinCount"
      ></results-component>
    </section>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import ResultsComponent from "./components/ResultsComponent.vue";

export default {
  name: "app",
  components: {
    InputComponent,
    ResultsComponent
  },
  data: function() {
    return {
      options: ["rock", "paper", "scissors"],
      winner: null,
      tieCount: 0,
      userWinCount: 0,
      systemWinCount: 0
    };
  },
  methods: {
    winnerSelected: function(winnerOption) {
      this.winner = winnerOption;
      winnerOption == "Tie"
        ? this.tieCount++
        : winnerOption == "User"
        ? this.userWinCount++
        : this.systemWinCount++;
    },

    handleResetButton: function() {
      this.systemWinCount = 0;
      this.userWinCount = 0;
      this.tieCount = 0;
      this.winner = null;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
