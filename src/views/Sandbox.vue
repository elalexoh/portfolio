<template>
  <section class="sandbox">
    <article class="sandbox__block" id="sandbox_description">
      <h1>Welcome to sandbox</h1>
    </article>
    <article class="sandbox__block" id="sandbox_me">
      <h2>This is an sandbox sub title</h2>
    </article>
    <article class="sandbox__block" id="sandbox_extra">
      <h2>This is an about sub title</h2>
    </article>
  </section>
</template>
<script>
import { bus } from "@/main.js";
export default {
  props: ["setColorTheme"],
  data() {
    return {
      themeColor: "white",
      menuOptions: [
        { title: "About", link: "sandbox_description" },
        { title: "Welcome", link: "sandbox_me" },
        { title: "Extra", link: "sandbox_extra" }
      ]
    };
  },
  mounted() {
    this.setColorTheme(this.themeColor);
    bus.setMenuOptions(this.menuOptions, this.themeColor);
  }
};
</script>
<style lang="scss">
.sandbox {
  &__block {
    min-height: 100vh;
    display: grid;
  }
}
</style>
