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
      <a href="https://github.com/elalexoh" target="_blank" class="btn btn-primary">Github</a>
      <a href="https://codepen.io/Deeply" target="_blank" class="btn btn-primary">Codepen</a>
    </div>

    <!-- Contact info -->
    <div class="footer__contact">
      <a class="footer__contact--email" href="mailto: fred_dev@gmail.com">Fred_dev@gmail.com</a>
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
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    &__social-media,
    &__contact {
      display: none;
    }
  }
}
</style>