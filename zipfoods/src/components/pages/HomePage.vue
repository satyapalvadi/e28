<template>
    <div>
        <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>
        <show-featured :category='featuredCategory'></show-featured>
    </div>
</template>

<script>

import ShowFeatured from "./../ShowFeatured.vue";


export default {
    name:"ShowHome",
    props:[],
    data: function(){
        return{
            featuredCategory: "snacks"
        }
    },
    components:{
        ShowFeatured
    }
    
}
</script>

<style scoped>

</style>