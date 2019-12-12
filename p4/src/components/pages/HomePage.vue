<template>
  <div class="blocks">
    <person-responsibility
      v-for="resp in personResponsibilities"
      :key="resp.id"
      :resp="resp"
      v-on:handle-pay-now="handlePayNow($event)"
    ></person-responsibility>
  </div>
</template>

<script>
import PersonResponsibility from "./../PersonResponsibility";

export default {
  name: "HomePage",

  data: function() {
    return {};
  },

  components: { PersonResponsibility },

  methods: {
    //function to get person names from a different state variable
    showData: function() {
      if (this.personResponsibilities != null) {
        this.personResponsibilities.forEach(resp => {
          let name = this.findFriendName(resp.id);
          resp.personName = name;
        });
      }
    },

    findFriendName: function(id) {
      let person = this.friends.find(friend => {
        if (friend.id == id) return friend.name;
      });

      return person.name;
    },

    handlePayNow: function(personId) {
      let localStorage = window.localStorage;
      localStorage.setItem(
        personId,
        JSON.stringify({
          paidStatus: "true",
          paidDate: new Date().toISOString().slice(0, 10)
        })
      );
      this.personResponsibilities.forEach(resp => {
        if (resp.id == personId) {
          resp.hasToPay = 0;
          resp.showPaidText = true;
        }
      });
    }
  },

  computed: {
    friends: function() {
      return this.$store.state.friends;
    },

    personResponsibilities: function() {
      return this.$store.state.personResponsibilities;
    }
  },

  mounted: function() {
    //Make all required API call to get data from the homepage
    this.$store.dispatch("setData");
  },

  watch: {
    //watching a state variable to massage data from 2 different api calls
    personResponsibilities: function(newValue /*, oldValue*/) {
      if (newValue != null) {
        this.showData();
      }
    }
  }
};
</script>

<style>
</style>