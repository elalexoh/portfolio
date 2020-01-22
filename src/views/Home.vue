<template>
  <section class="home">
    <!-- featured content -->
    <article id="featured" class="welcome">
      <section class="featured">
        <!-- info -->
        <div class="featured__info">
          <h1 class="featured__title uppercase">
            Hello
            <span class="accent">Everyone</span>
          </h1>
        </div>
        <!-- image -->
        <div class="featured__wrapper">
          <img class="featured__wrapper--img" src="@/assets/img/deeply.png" alt="hero">
        </div>
      </section>
    </article>

    <!-- projects -->
    <article id="projects" class="projects">
      <!-- Project section title -->
      <section>
        <h2 class="projects__title">Projects</h2>
      </section>
      <!-- Projects Tags -->
      <section class="projects__wrapper-tag">
        <div class="projects__tag pointer" @click="toggleModal()">
          <h3>spa's</h3>
        </div>
        <div class="projects__tag pointer">
          <h3>Landing Page's</h3>
        </div>
        <div class="projects__tag pointer">
          <h3>e-commerce's</h3>
        </div>
        <div class="projects__tag pointer">
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

    <!-- About me -->
    <article id="about-me" class="about-me">
      <!-- title -->
      <h2 class="about-me__title">
        About
        <span class="accent">me</span>
      </h2>
      <!-- image -->
      <img class="img-fluid about-me__img" src="@/assets/img/about-me.png" alt="hero">
      <!-- description -->
      <p
        class="about-me__description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus dolorum beatae, adipisci at nesciunt! Incidunt totam, dolores esse, magnam illum nostrum nesciunt fugit rerum architecto in voluptatem, eligendi earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos, perferendis natus, vero non odit quam unde, obcaecati sed deleniti veritatis facere! Sequi facere ipsa voluptates voluptatem architecto vitae iure!</p>
      <!-- skills -->
      <div class="about-me__skills skills">
        <h3 class="skills__title uppercase">skills</h3>
        <div class="skills__skill" v-for="skill in skills" :key="skill.id">
          <h4 class="skills__skill-title">{{ skill.title }}</h4>
          <span class="skills__skill-percent">{{ skill.range }}</span>
          <div class="skills__skill-bar">
            <div class="skills__skill--active-bar" :style="`width: ${setSkillBar(skill.range)};`"></div>
          </div>
        </div>
      </div>
    </article>

    <!-- Blog -->
    <!-- <article id="blog" class="blog">
      <h2 class="blog__title">
        New
        <br>in blog
      </h2>
      <a href="#" class="blog__action btn">view all posts</a>
      <div class="post">
        <img class="post__img" src="http://placehold.it/560x320" alt>
        <div class="post__title">Vue it's amazing!</div>
        <div
          class="post__excerpt"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sequi temporibus cumque. Ullam ipsa saepe, omnis aliquid error commodi velit reiciendis officiis nam nemo voluptates deserunt quas pariatur modi quos?Ullam ipsa saepe, omnis aliquid error commodi velit reiciendis officiis nam nemo voluptates deserunt quas pariatur modi quos?</div>
        <div class="post__date">Jan 23, 2019</div>
      </div>
    </article>-->

    <!-- Contact -->
    <article id="contact" class="contact">
      <h2 class="contact__title beta">Contacts</h2>
      <div class="contact__info-wrapp">
        <p class="contact__info">have a question, offers on cooperation?</p>
        <p class="contact__info">feel free to contact me!</p>
        <p class="contact__info">Venezuela</p>
        <a
          class="contact__anchor contact__anchor--email"
          href="mailto: fred_dev@gmail.com"
        >Fred_dev@gmail.com</a>
        <a class="contact__anchor contact__anchor--phone" href="#">+58 424-178-5377</a>
      </div>
      <div class="contact-form">
        <input class="contact-form__input" placeholder="Name" type="text" name="name" id>
        <input class="contact-form__input" placeholder="Email" type="email" name="email" id>
        <textarea
          class="contact-form__input contact-form__input--textarea"
          name="message"
          id
          rows="5"
          placeholder="Something to say?"
        ></textarea>
      </div>
    </article>
  </section>
</template>

<script>
import { bus } from "@/main.js";
// import Masonry from "@/components/Masonry";

export default {
  props: ["setColorTheme"],
  data() {
    return {
      themeColor: "rgb(32, 32, 32)",
      menuOptions: [
        { id: 1, title: "Welcome", link: "app", active: true },
        { id: 2, title: "Projects", link: "projects", active: false },
        { id: 3, title: "About Me", link: "about-me", active: false },
        // { id: 1, title: "New in Blog", link: "blog", active: false},
        { id: 4, title: "Contacts", link: "contact", active: false }
      ],
      skills: [
        { id: 1, title: "Front-End", range: "90%" },
        { id: 2, title: "Back-End", range: "70%" }
      ],
      projectModal: false
    };
  },
  mounted() {
    this.setColorTheme(this.themeColor);
    bus.setMenuOptions(this.menuOptions, this.themeColor);
  },
  components: {
    // masonry: Masonry
  },
  methods: {
    setSkillBar(percent) {
      return percent;
    },
    toggleModal() {
      this.projectModal = !this.projectModal;
    }
  }
};
</script>

<style lang="scss">
.home {
  background-color: $primary;
}
.welcome {
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .featured {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    &__wrapper {
      position: relative;
      &--img {
        height: calc(100vh - 250px);
        position: relative;
        z-index: 100;
      }
      &::after {
        content: "";
        height: 200px;
        left: 0;
        // top: 50%;
        // transform: translateY(-50%);
        width: 100%;
        position: ab solute;
        background-color: $secondary;
        border-radius: 50%;
      }
    }
    &__title {
      width: min-content;
    }
    &__subtitle {
      width: max-content;
      transform: rotate(90deg);
      text-align: center;
    }
    &__description {
      font-size: 11pt;
      width: 75%;
      letter-spacing: 0.5px;
      line-height: 1.5;
    }
  }
}
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
.about-me {
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  align-content: center;
  min-height: 100vh;
  &__img {
    width: 50%;
  }
  &__description,
  .skills {
    width: 75%;
  }
  .skills {
    align-self: center;
    &__title {
      padding-bottom: 1.5rem;
      font-size: 20pt;
    }
    &__skill {
      display: grid;
      grid-template-areas:
        "title percent"
        "bar bar";
      gap: 0.8rem;
      margin-bottom: 2rem;
      &-percent {
        justify-self: end;
        transition: color 0.5s ease;
      }
      &-bar {
        grid-area: bar;
        height: 5px;
        background-color: $grey_3;
        position: relative;
      }
      &--active-bar {
        position: absolute;
        height: 100%;
        background: $grey_2;
        transition: background-color 0.5s ease;
      }
      &:hover .skills__skill--active-bar {
        background-color: $accent;
      }
      &:hover .skills__skill-percent {
        color: $accent;
      }
    }
  }
  &__description {
    padding: 3rem 0;
  }
}
.blog {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "post title"
    "post action";
  justify-items: center;
  align-items: center;
  min-height: 100vh;
  &__title {
    grid-area: title;
  }
  &__action {
    grid-area: action;
  }
  .post {
    grid-area: post;
    display: flex;
    flex-direction: column;
    &__img {
      text-align: center;
    }
    &__title,
    &__date {
      margin: 1rem 0;
    }
    &__title {
      font-size: 18pt;
    }
    &__excerpt {
      line-height: 1.2;
      letter-spacing: 0.5px;
    }
  }
}
.contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content max-content;
  align-content: center;
  min-height: calc(100vh - #{$footer});
  grid-template-areas:
    "title title"
    "information form";
  &__title {
    grid-area: title;
    padding: 2rem 0;
  }
  .beta::after {
    transform: translateY(-150%); //fixed
  }
  &__info,
  &__anchor {
    padding-bottom: 1.25rem;
  }
  &__anchor {
    display: block;
    transition: color 0.5s ease-in;
    &:hover {
      color: white;
    }
  }
  &-form {
    display: flex;
    flex-direction: column;
    &__input {
      border: 0;
      height: 50px;
      background-color: $grey_3;
      width: 80%;
      margin: 0 auto 1.5rem auto;
      padding: 0 1.5rem;
      font-size: 11pt;
    }
    &__input--textarea {
      height: auto;
      margin-bottom: 0;
      padding-top: 1.5rem;
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
  .welcome {
    .featured {
      grid-template-columns: 1fr;
      &__wrapper {
        text-align: center;
      }
      &__info {
        display: none;
      }
    }
  }
}
@media (max-width: 414px) {
  .contact {
    &-form {
      width: 75%;
      margin: 0 auto;
    }
  }
}
</style>
