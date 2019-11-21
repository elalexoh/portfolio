<template>
  <footer class="footer">
    <!-- Copyright -->
    <div class="footer__copyright">
      @ 2019
      <span class="weird">Deeply_Weird</span> All rights reserved
    </div>

    <!-- Menu Social Media -->
    <div class="footer__social-media">
      <a href class="btn btn-primary">Gmail</a>
      <a href class="btn btn-primary">Github</a>
      <a href class="btn btn-primary">Codepen</a>
    </div>

    <!-- Contact info -->
    <div class="footer__contact">
      <p class="footer__contact--email">email@email.com</p>
      <p class="footer__contact--phne">+99 999-9999</p>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  height: $footer;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  align-content: center;
  &__social-media,
  &__contact,
  &__copyright {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__copyright {
    justify-content: center;
    .weird {
      padding: 0 0.5rem;
    }
  }
}
</style>