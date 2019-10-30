<template>
  <section>
    <div class="winner">Winner: {{ winner }}</div>
    <div class="count">
      <span>User Win Count: {{ userWinCount }}</span>
    </div>
    <div class="count">
      <span>System Win Count: {{ systemWinCount }}</span>
    </div>
    <div class="count">
      <span>Tie Count:{{ tieCount }}</span>
    </div>
    <div>
      <button id="resetButton" @click="handleResetButton">Reset Game</button>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["winner", "userWinCount", "systemWinCount", "tieCount"],
  methods:{
    handleResetButton() {
        this.$emit('handle-reset-button');
    }
  }
};
</script>

<style>
.resultSection{
    padding-top: 30px;
}
   
.count{
    padding: 10px;
}

[v-cloak]{
    display: none;
}

.winner{
    color: green;
    font-weight: bold;
    font-size: 2rem;
}
</style>