<template>
  <div class="blocks">
    <friend-detail v-for="friend in friends" :key="friend.id" :friend="friend"></friend-detail>
  </div>
</template>

<script>
import FriendDetail from "./../FriendDetail.vue";

export default {
  name: "FriendsPage",

  data: function() {
    return {};
  },

  components: { FriendDetail },

  computed: {
    friends: function() {
      return this.$store.state.friends;
    }
  },

  props: [],

  mounted: function() {
    //this.$store.dispatch("getFriends");
  }
};
</script>

<style>
</style>