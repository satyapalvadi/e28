
let app = new Vue({
    el: "#app",
    data: {
        options: ['rock', 'paper', 'scissors'],
        selectedOption: null,
        winner: null,
        tieCount: 0,
        userWinCount: 0,
        systemWinCount: 0
    },

    methods: {
        handleRadio() {
            let systemOption = this.options[this.getRandomInt(3)];
            let userOption = this.selectedOption;

            console.log("User selected: " + userOption);
            console.log("Sytem selected: " + systemOption);

            let winnerOption = this.checkWinner(userOption, systemOption);
            this.winner = winnerOption == 'tie' ? 'Tie' : userOption == winnerOption ? 'User' : 'System';

            console.log("Winner: " + this.winner);

            winnerOption == 'tie' ? this.tieCount++ : userOption == winnerOption ? this.userWinCount++ : this.systemWinCount++;
        },

        checkWinner(userOption, systemOption) {
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
        },

        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },

        handleResetButton() {
            this.systemWinCount = 0;
            this.userWinCount = 0;
            this.tieCount = 0;
            this.selectedOption = null;
            this.winner = null;
        }
    }
});