<template>
  <footer class="footer">
    <!-- Copyright -->
    <div class="footer__copyright">
      <p class="footer__copyright--text">
        <span>@ 2019</span>
        <a class="accent" href>Deeply_Weird</a>
        <span>All rights reserved</span>
      </p>
    </div>

    <!-- Menu Social Media -->
    <div class="footer__social-media">
      <a href class="btn btn-primary">Github</a>
      <a href class="btn btn-primary">Codepen</a>
    </div>

    <!-- Contact info -->
    <div class="footer__contact">
      <p class="footer__contact--email">email@email.com</p>
      <!-- <p class="footer__contact--phne">+99 999-9999</p> -->
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  width: 75%;
  margin: 0 auto;
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
  &__contact--email {
    padding: 0.5rem 0;
  }
  &__copyright {
    justify-content: center;
    &--text {
      padding: 0.5rem 0;
    }
    .accent {
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>