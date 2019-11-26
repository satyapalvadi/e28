<template>
  <div class="blocks">
    <person-responsibility v-for="resp in personResponsibilities" :key="resp.id" :resp="resp" v-on:handle-pay-now="handlePayNow($event)"></person-responsibility>
  </div>
</template>

<script>
import PersonResponsibility from "./../PersonResponsibility";

const axios = require("axios");

export default {
  name: "HomePage",

  data: function() {
    return {
      personResponsibilities: [],
      friends: []
    };
  },

  components: { PersonResponsibility },

  methods: {
    showData: function() {
      this.personResponsibilities = this.tempPersonResponsibilities;
      this.personResponsibilities.forEach(resp => {
        let name = this.findFriendName(resp.id);
        resp.personName = name;
      });
    },

    findFriendName: function(id) {
      let person = this.friends.find(friend => {
        if (friend.id == id) return friend.name;
      });

      return person.name;
    },

    handlePayNow: function(personId) {
      
      let localStorage = window.localStorage;
      localStorage.setItem(personId, JSON.stringify({"paidStatus": "true", "paidDate": new Date().toISOString().slice(0,10)}));
      this.personResponsibilities.forEach(resp => {
          if(resp.id == personId){ resp.hasToPay = 0; }
      });
    }
  },

  mounted: function() {
    axios
      .get(
        "https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/personResponsibilities"
      )
      .then(response => {
        this.tempPersonResponsibilities = response.data;
        axios
          .get(
            "https://my-json-server.typicode.com/satyapalvadi/e28-expenser-api2/persons"
          )
          .then(response => {
            this.friends = response.data;
            this.showData();
          });
      });
  }
};
</script>

<style>
</style>