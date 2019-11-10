<template>
  <div id="app">
    <img alt="Zip Foods logo" src="./images/zipfoods-logo.png" width="220px" height="100px" />

    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{ name: link }">{{ link }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      links: ["home", "products", "categories"]
    };
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
