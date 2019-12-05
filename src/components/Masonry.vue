<template>
  <article id="masonry" class="masonry">
    <div class="masonry__wrapper">
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      <div class="masonry__item bg-img" style="background-image:url('http://placehold.it/250/')"></div>
    </div>
    <a href="#" class="btn masonry__btn">submit more</a>
  </article>
</template>
<script>
export default {};
</script>
<style lang="scss">
.masonry {
  text-align: center;
  margin-bottom: 3rem;
  &__wrapper {
    height: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  &__item {
    position: relative;
    &::after {
      content: "";
      background-color: $primary;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      clip-path: circle(0% at 50% 50%);
      transition: clip-path 1s ease, height 2s ease;
      mix-blend-mode: multiply;
      opacity: 0.5;
    }
    &:hover::after {
      clip-path: circle(100% at 50% 50%);
      //height: 0px;
    }
  }
  &__btn {
    display: inline-block;
    margin-top: 3rem;
  }
}
</style>