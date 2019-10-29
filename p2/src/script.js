import Vue from "vue";
import InputComponent from "./components/InputComponent.vue";
import ResultsComponent from "./components/ResultsComponent.vue";

let app = new Vue({
    el: '#app',
    data: {
        options: ['rock', 'paper', 'scissors'],
        winner: null,
        tieCount: 0,
        userWinCount: 0,
        systemWinCount: 0
    },
    
    components: { 
        'input-component': InputComponent,
        'results-component': ResultsComponent
    },

    methods:{
        winnerSelected: function(winnerOption){
            console.log('winner in the main app: ' + winnerOption);
            this.winner = winnerOption;
            winnerOption == 'Tie' ? this.tieCount++ : winnerOption == 'User' ? this.userWinCount++ : this.systemWinCount++;
            console.log('Tie count:' + this.tieCount);
            console.log('User count:' + this.userWinCount);
            console.log('System count:' + this.systemWinCount);
        },

        handleResetButton: function(){
            this.systemWinCount = 0;
            this.userWinCount = 0;
            this.tieCount = 0;
            this.winner = null;
        }
    }
})