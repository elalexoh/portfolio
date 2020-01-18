<template>
  <section class="home">
    <!-- featured content -->
    <article id="featured" class="featured">
      <h1 class="featured__title uppercase">Hello Everyone</h1>
      <div
        class="featured__description"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fugit dignissimos dolores nesciunt consequatur expedita illo incidunt in, vero aliquam. Nam doloremque beatae quas vel aliquid nisi molestias sit saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fugit dignissimos dolores</div>
    </article>
    <!-- Masonry -->
    <masonry />
    <!-- About me -->
    <article id="about-me" class="about-me">
      <h2 class="about-me__title">About me</h2>
      <p
        class="about-me__description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus dolorum beatae, adipisci at nesciunt! Incidunt totam, dolores esse, magnam illum nostrum nesciunt fugit rerum architecto in voluptatem, eligendi earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos, perferendis natus, vero non odit quam unde, obcaecati sed deleniti veritatis facere! Sequi facere ipsa voluptates voluptatem architecto vitae iure!</p>
      <img src="http://placehold.it/250/" class="about-me__img" alt />
      <div class="about-me__skills skills">
        <h3 class="skills__title uppercase">skills</h3>
        <div class="skills__skill">
          <h4 class="skills__skill-title">Vue</h4>
          <span class="skills__skill-percent">70%</span>
          <div class="skills__skill-bar"></div>
        </div>
        <div class="skills__skill">
          <h4 class="skills__skill-title">Javascript</h4>
          <span class="skills__skill-percent">70%</span>
          <div class="skills__skill-bar"></div>
        </div>
        <div class="skills__skill">
          <h4 class="skills__skill-title">Nuxt</h4>
          <span class="skills__skill-percent">70%</span>
          <div class="skills__skill-bar"></div>
        </div>
      </div>
    </article>
    <!-- Blog -->
    <article id="blog" class="blog">
      <h2 class="blog__title">
        New
        <br />in blog
      </h2>
      <a src="#" class="blog__action btn">view all posts</a>
      <div class="post">
        <img class="post__img" src="http://placehold.it/560x320" alt />
        <div class="post__title">Vue it's amazing!</div>
        <div
          class="post__excerpt"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sequi temporibus cumque. Ullam ipsa saepe, omnis aliquid error commodi velit reiciendis officiis nam nemo voluptates deserunt quas pariatur modi quos?Ullam ipsa saepe, omnis aliquid error commodi velit reiciendis officiis nam nemo voluptates deserunt quas pariatur modi quos?</div>
        <div class="post__date">Jan 23, 2019</div>
      </div>
    </article>
    <!-- Contact -->
    <article id="contact" class="contact">
      <h2 class="contact__title">Contacts</h2>
      <div class="contact__info-wrapp">
        <p class="contact__info">have a question, offers on cooperation?</p>
        <p class="contact__info">feel free to contact me!</p>
        <p class="contact__info">Venezuela</p>
        <a class="contact__anchor contact__anchor--email" href="#">email@email.com</a>
        <a class="contact__anchor contact__anchor--phone" href="#">+99 999-9999</a>
      </div>
      <div class="contact-form">
        <input class="contact-form__input" placeholder="Name" type="text" name="name" id />
        <input class="contact-form__input" placeholder="Email" type="email" name="email" id />
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
import Masonry from "@/components/Masonry";
export default {
  props: ["setColorTheme"],
  data() {
    return {
      themeColor: "rgb(32, 32, 32)",
      menuOptions: [
        { title: "Welcome", link: "featured" },
        { title: "About Me", link: "about-me" },
        { title: "New in Blog", link: "blog" },
        { title: "Contacts", link: "contact" }
      ]
    };
  },
  mounted() {
    this.setColorTheme(this.themeColor);
    bus.setMenuOptions(this.menuOptions);
  },
  components: {
    masonry: Masonry
  }
};
</script>
<style lang="scss">
.home {
  background-color: $primary;
}
.featured {
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  &__title {
    width: min-content;
  }
  &__description {
    font-size: 11pt;
    width: 75%;
    letter-spacing: 0.5px;
    line-height: 1.5;
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
  &__description,
  .skills {
    width: 75%;
  }
  .skills {
    align-self: flex-start;
    &__title {
      padding-bottom: 1.5rem;
    }
    &__skill {
      display: grid;
      grid-template-areas:
        "title percent"
        "bar bar";
      gap: 0.8rem;
      margin-bottom: 1rem;
      &-title {
      }
      &-percent {
        justify-self: end;
      }
      &-bar {
        grid-area: bar;
        height: 5px;
        background-color: $grey_3;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 70%;
          background: $grey_2;
        }
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
    &__date {
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
  &__info,
  &__anchor {
    padding-bottom: 1.25rem;
  }
  &__info-wrapp {
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
      &::placeholder {
      }
    }
    &__input--textarea {
      height: auto;
      margin-bottom: 0;
      padding-top: 1.5rem;
    }
  }
}
</style>
