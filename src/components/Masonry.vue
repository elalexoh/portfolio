<template>
  <section class="masonry__container">
    <div class="masonry__wrapper">
      <div
        class="masonry__item bg-img"
        :style="`background-image:url(${proyect.thumbnail})`"
        v-for="proyect in proyects"
        :key="proyect.id"
      >
        <div class="masonry__item--info position-absolute">
          <h2 class="masonry__item--info-title">
            <a :href="proyect.link" :target="(proyect.link)? '_blank' : ''">{{ proyect.name }}</a>
          </h2>
          <!-- <h2 class="masonry__item--tech-icon">{{ proyect.techs }}</h2> -->
        </div>
      </div>
    </div>
    <a href="https://facebook.com" target="_blank" class="btn masonry__btn">see more</a>
  </section>
</template>
<script>
export default {
  data() {
    return {
      proyects: [
        {
          id: 1,
          name: "Laboratorios Behrens",
          techs: "Wordpress",
          link: "https://behrens.orugadesarrollo.com",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 2,
          name: "Compass Vital Health",
          techs: "Wordpress",
          link: "http://compass.orugadesarrollo.com/home",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 3,
          name: "Food Solution",
          techs: "Wordpress",
          link: "http://foodsolution.orugadesarrollo.com/",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 4,
          name: "Pick & Fly",
          techs: "Wordpress",
          link: "http://pickandfly.orugadesarrollo.com/",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 5,
          name: "Traki offline",
          techs: "Wordpress",
          link: "",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 6,
          name: "Tquimicos",
          techs: "NuxtJs",
          link: "https://www.tquimicosca.com/",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 7,
          name: "The lux Properties",
          techs: "NuxtJs",
          link: "dev.theluxproperties.com/",
          thumbnail: "http://placehold.it/250/"
        },
        {
          id: 8,
          name: "IronTrop",
          techs: "NuxtJs",
          link: "",
          thumbnail: "http://placehold.it/250/"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.masonry {
  // semiglobals styles in home.vue
  .masonry__container {
    width: 100%;
  }
  &__wrapper {
    height: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  &__item {
    position: relative;
    border: 1px solid #000; //borrame
    &--info {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-100%);
      transition: transform 1s ease;
      &-title {
        width: 70%;
        font-size: 18pt;
      }
      &::before {
        content: "";
        height: 100%;
        width: 100%;
        background-color: $primary;
        mix-blend-mode: multiply;
        opacity: 0.5;
        position: absolute;
        z-index: -1;
        clip-path: circle(0% at 50% 50%);
        transition: clip-path 1s 0.3s ease, height 2s 0.3s ease;
      }
    }
    &:hover &--info {
      transform: translateY(0);
      &::before {
        clip-path: circle(100% at 50% 50%);
      }
    }
    &--icon {
      width: 100px;
    }
    // &::after {
    //   content: "";
    //   background-color: $primary;
    //   height: 100%;
    //   width: 100%;
    //   position: absolute;
    //   left: 0;
    //   clip-path: circle(0% at 50% 50%);
    //   transition: clip-path 1s ease, height 2s ease;
    //   mix-blend-mode: multiply;
    //   opacity: 0.5;
    // }
    // &:hover::after {
    //   clip-path: circle(100% at 50% 50%);
    //   //height: 0px;
    // }
  }
  &__btn {
    display: inline-block;
    margin-top: 3rem;
  }
}
</style>