<template>
    <div class="blocks">
        <friend-detail v-for="friend in friends" :key="friend.id" :friend="friend"></friend-detail>
    </div>
</template>

<script>

import FriendDetail from "./../FriendDetail.vue";
const axios = require("axios");

export default {
        name: "FriendsPage",

    data: function(){
        return {
            friends: []
         }
    },

    components: { FriendDetail },

    props: [],

    mounted: function() {
    axios
      .get(
        "https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/persons/"
      )
      .then(response => {
        this.friends = response.data;
        console.log(this.friends);
      });
  }

    
}
</script>

<style>

</style>