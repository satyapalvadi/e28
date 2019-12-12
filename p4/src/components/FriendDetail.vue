<template>
    <div class="block">
        <div data-test="name" class="line-item"><span class="sub-hdg">Name: </span> {{ friend.name}} </div>
        <div class="line-item"><span class="sub-hdg">Phone: </span> {{friend.phone}} </div>
        <div class="line-item"><span class="sub-hdg">Email: </span> {{friend.email}} </div>
    </div>
</template>

<script>
export default {
    name: "FriendDetail",
    data: function(){
        return {

        }
    },
    components:{},
    props:[ "friend" ],

    
}
</script>

<style>

</style>