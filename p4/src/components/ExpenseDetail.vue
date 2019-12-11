<template>
    <div class="block">
        <div class="line-item"><span class="sub-hdg">Description: </span> {{expense.description}}</div>
        <div class="line-item"><span class="sub-hdg">Date: </span>{{expense.date}}</div>
        <div class="line-item"><span class="sub-hdg">Amount: </span>${{expense.amount}}</div>
        <div class="line-item"><span class="sub-hdg">Paid by: </span> {{expense.paidBy}}</div>
        <div class="line-item" v-for="splitter in expense.splitters" :key="splitter.pid">
            <div><span class="sub-hdg">{{ splitter.pid }}'s share: </span> ${{ (splitter.split * expense.amount)/100 }} </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    name: "ExpenseDetail",
    data: function(){
        return { 

        }

    },

    props:["expense"]


}
</script>