<template>
  <main id="app" class="main-container" :style="cssVars">
    <navbar />
    <div class="container">
      <vue-page-transition name="fade-in-right">
        <router-view :setColorTheme="setColorTheme" />
      </vue-page-transition>
    </div>
    <customFooter />
  </main>
</template>
<script>
import Navbar from "@/views/layout/Navbar.vue";
import Footer from "@/views/layout/Footer.vue";

export default {
  data() {
    return {
      themeColor: "white"
    };
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.themeColor
      };
    }
  },
  components: {
    navbar: Navbar,
    customFooter: Footer
  },
  methods: {
    setColorTheme(color) {
      if (color != "") {
        this.themeColor = color;
      }
    }
  }
};
</script><style lang="scss">
.main-container {
  background-color: $primary;
  transition: background-color 0.5s ease;
}
.container {
  min-height: calc(100vh - (#{$footer} + #{$navbar}));
  width: 75%;
  //border: 1px solid tomato;
  margin: 0 auto;
  height: 100%;
}
</style>