<template>
  <main class="main-container">
    <navbar />
    <div class="container">
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </div>
    <customFooter />
  </main>
</template><script>
import Navbar from "@/views/layout/Navbar.vue";
import Footer from "@/views/layout/Footer.vue";

export default {
  components: {
    navbar: Navbar,
    customFooter: Footer
  }
};
</script><style lang="scss">
.main-container {
  background-color: $primary;
}
.container {
  min-height: calc(100vh - (#{$footer} + #{$navbar}));
  width: 75%;
  //border: 1px solid tomato;
  margin: 0 auto;
  height: 100%;
}
</style>