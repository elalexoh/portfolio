<template>
  <section class="about">
    <article class="about__block" id="about_description">
      <div class="bodega">
        <div class="bodega__presentation">
          <h1 class="bodega__title">Bodega de <span>Sonido</span></h1>
          <p class="bodega__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium eveniet magnam explicabo ab delectus quidem, amet accusantium obcaecati illo exercitationem deleniti magni quas laborum. Eligendi molestias consequatur voluptates nulla?
          </p>
        </div>
        <div class="bodega__hero">
          <div class="bodega__img"></div>
          <div class="bodega__card">
            <h2 class="bodega__card-title">20% de descuento en música grunge</h2>
          </div>
        </div>
      </div>
    </article>
    <article class="about__block" id="me">
      <h2>This is an about sub title</h2>
    </article>
    <article class="about__block" id="about_extra">
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
        { title: "About", link: "about_description" },
        { title: "Welcome", link: "me" },
        { title: "Extra", link: "about_extra" },
      ]
    };
  },
  mounted() {
    this.setColorTheme(this.themeColor);
    bus.setMenuOptions(this.menuOptions,this.themeColor);
  }
};
</script>
<style lang="scss">
  .about{
    &__block{
      min-height: 100vh;
      display: grid;
    }
  }
  .bodega{
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 20pt;
    box-shadow: 0 0 20px 8px rgba($color: #000000, $alpha: 0.03);
    border-radius: 1rem;
    &__presentation{
      display: flex;
      flex-direction: column;
      margin: auto;
      text-align: center;
    }
    &__title{
      margin-bottom: 3rem;
      
    }
    &__description{
      text-align: justify;
      font-size: .8rem;
      width: 50%;
      margin: auto;
    }
    &__hero{
      background-color: #111;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
</style>
