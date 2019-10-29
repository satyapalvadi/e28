<template>
        <section id="input" class="option">
            <p> Select an option: </p>
            <span class="option" v-for="option in options" v-bind:key="option">
                <input type="radio" :id=option :value=option name="options" @change="handleRadio" v-model="selectedOption">
                <label :for=option>{{ option.charAt(0).toUpperCase() + option.slice(1) }}</label>
            </span>    
        </section>
</template>

<script>
export default {
    data: function(){
            return {
                winner: null,
                selectedOption: null
            }
    },
    props:['options'],

    name: "input-component",
    
    methods:{
        handleRadio: function(){
            let systemOption = this.options[this.getRandomInt(3)];
            let userOption = this.selectedOption;

            console.log("User selected: " + userOption);
            console.log("Sytem selected: " + systemOption);

            let winnerOption = this.checkWinner(userOption, systemOption);
            this.winner = winnerOption == 'tie' ? 'Tie' : userOption == winnerOption ? 'User' : 'System';

            console.log("Winner: " + this.winner);
            this.$emit('winner-selected', this.winner);
        },

        getRandomInt: function(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },

        checkWinner: function(userOption, systemOption) {
                if (userOption == 'rock' && systemOption == 'scissors') {
                    return userOption;
                }
                else if (userOption == 'scissors' && systemOption == 'rock') {
                    return systemOption;
                }
                else if (userOption == 'paper' && systemOption == 'rock') {
                    return userOption;
                }
                else if (userOption == 'rock' && systemOption == 'paper') {
                    return systemOption;
                }
                else if (userOption == 'scissors' && systemOption == 'paper') {
                    return userOption;
                }
                else if (userOption == 'paper' && systemOption == 'scissors') {
                    return systemOption;
                }
                else {
                    return 'tie';
                }
        }
    }
};
</script>

<style scoped>

.option{
    padding-right: 10px;
    font-size: 20px;
}

</style>