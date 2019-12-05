<template>
  <div id="about" class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { bus } from "@/main.js";
export default {
  props: ["setColorTheme"],
  data() {
    return {
      themeColor: "white",
      menuOptions: [{ title: "About", link: "about" }]
    };
  },
  mounted() {
    this.setColorTheme(this.themeColor);
    bus.setMenuOptions(this.menuOptions);
  }
};
</script>
