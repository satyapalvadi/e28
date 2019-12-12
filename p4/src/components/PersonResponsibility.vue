<template>
<div class="block">
    <!-- <div> Id: {{ resp.id }} </div> -->
    <div data-test="name" class="line-item"> <span class="sub-hdg">Name: </span> {{ resp.personName }} </div>
    <div data-test="spent" class="line-item"> <span class="sub-hdg">Spent: </span> {{ '$' + resp.outOfPocket }} </div>
    <div data-test="expenses" class="line-item"> <span class="sub-hdg">Expenses: </span> {{ '$' + resp.shareOfExpenses }} </div>
    <div data-test="receiveMoney" class="line-item receive-money" v-if="resp.receive > 0"> <span class="sub-hdg"> Will Receive: </span> {{ '$' + resp.receive }} </div>
    <div data-test="paidStatus" class="line-item pay-money" v-if="!paidStatus">
        <div v-if="resp.hasToPay > 0"> <span class="sub-hdg"> Has to Pay: </span> {{ '$' + resp.hasToPay }} </div>
        <button class="pay-button" v-if="resp.hasToPay > 0" @click="$emit('handle-pay-now', resp.id)">Pay In Full</button>
        <div class="paid-clicked" v-if="resp.showPaidText">Paid!!!!</div>
    </div>
    
    <div data-test="paidMoneyDate" class="receive-money" v-if="paidStatus && paidDate != ''">
        <span class="sub-hdg">Paid on: </span> {{ paidDate }}
    </div>
    <br>
</div>
    
</template>

<script>
export default {
    name:"PersonResponsibility",

    components: {},
    
    props:["resp"],

    methods: {
        
    },

    data:function(){
        return {
            paidStatus: false,
            paidDate:'',
        }
    },

    mounted: function(){
        let vm = this;
        
        let _paid = JSON.parse(window.localStorage.getItem(vm.resp.id));
        if(_paid != null){
            vm.paidStatus = _paid.paidStatus;
            vm.paidDate = _paid.paidDate;
            console.log('status:' + vm.paidStatus);
        }
    }
}
</script>

<style>
</style>