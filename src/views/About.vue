<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  props: ["setColorTheme"],
  data() {
    return {
      themeColor: "teal"
    };
  },
  mounted() {
    this.setColorTheme(this.themeColor);
  }
};
</script>
