<template>
  <article id="projects" class="projects">
    <!-- Project section title -->
    <section class="projects__title--wrapper">
      <h2 class="projects__title">Projects</h2>
    </section>
    <!-- Projects Tags -->
    <section class="projects__wrapper-tag">
      <div class="projects__tag pointer" @click="toggleModal()">
        <h3>spa's</h3>
      </div>
      <div class="projects__tag pointer" @click="toggleModal()">
        <h3>Landing Page's</h3>
      </div>
      <div class="projects__tag pointer" @click="toggleModal()">
        <h3>e-commerce's</h3>
      </div>
      <div class="projects__tag pointer" @click="toggleModal()">
        <h3>blog's</h3>
      </div>
    </section>
    <!-- modal for each project -->
    <section class="project modal" :class="(projectModal)? 'active' : 'hidden'">
      <!-- carousel -->
      <section class>
        <h2 class="project__title beta">carousel</h2>
      </section>
      <!-- project description -->
      <section class="project__info">
        <h2>Project Title</h2>
        <div class="project__description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga numquam optio omnis ab voluptates magnam veniam alias vero praesentium, magni accusantium quisquam nisi sunt, dignissimos sapiente consectetur enim voluptate facilis.</p>
        </div>
        <ul class="project__techs">
          <li class="project__techs-tech">Bootstrap</li>
          <li class="project__techs-tech">Wordpress</li>
          <li class="project__techs-tech">Woocommerce</li>
          <li class="project__techs-tech">VueJS</li>
          <li class="project__techs-tech">Jquery</li>
        </ul>
      </section>
      <div class="close pointer" @click="toggleModal()"></div>
    </section>
    <!-- <masonry/> -->
  </article>
</template>
<script>
export default {
  data() {
    return {
      projectModal: false
    };
  },
  methods: {
    toggleModal() {
      this.projectModal = !this.projectModal;
    }
  }
};
</script>
<style lang="scss">
.projects {
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  &__wrapper-tag {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 75%;
    flex: 0 1 65%;
    margin: 0 auto;
    background-color: $grey_3;
  }
  &__tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20pt;
    text-transform: capitalize;
  }
  .project {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $grey_3;
    z-index: 1000;
    display: grid;
    grid-template-columns: 40% 60%;
    justify-content: center;
    align-items: center;
    left: 0;
    transition: all 1s cubic-bezier(0.17, 0.67, 0.45, 1.25);
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 75%;
      background: teal;
    }
    &__description {
      width: 75%;
      margin: 0 auto;
    }
    &__techs {
      display: flex;
      justify-content: space-around;
    }
    &.show {
      left: 0;
    }
    &.hidden {
      left: 100vw;
    }
    .close {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 1rem;
      right: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &::after,
      &::before {
        content: "";
        height: 100%;
        width: 20%;
        position: absolute;
        background-color: $secondary;
      }
      &::after {
        transform: rotate(-40deg);
      }
      &::before {
        transform: rotate(40deg);
      }
    }
  }
}
@media (max-width: 991px) {
  .projects {
    flex-direction: column;
    justify-content: space-around;
    &__title--wrapper {
      // padding: 1.5rem 0;
    }
    &__wrapper-tag {
      width: 75%;
    }
    .project {
      grid-template-columns: 1fr;
    }
  }
}
@media (max-width: 768px) {
  .about-me {
    &__title,
    &__description {
      grid-column: -3 / -1;
    }
    &__img,
    &__skills {
      display: none;
    }
  }
  .contact {
    &__info-wrapp {
      display: none;
    }
    &-form,
    &__title {
      grid-column: -3 / -1;
      text-align: center;
    }
  }
}
@media (max-width: 576px) {
  .projects {
    &__wrapper-tag {
      grid-template-columns: 1fr;
      width: 80%;
    }
    &__tag {
      font-size: 17pt;
    }
  }
}
@media (max-width: 414px) {
  .projects {
    &__tag {
      font-size: 15pt;
    }
  }
}
</style>