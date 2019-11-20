<template>
  <section class="home">
    <!-- featured content -->
    <article class="featured">
      <h1 class="featured__title">Hello Everyone</h1>
      <div
        class="featured__description"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fugit dignissimos dolores nesciunt consequatur expedita illo incidunt in, vero aliquam. Nam doloremque beatae quas vel aliquid nisi molestias sit saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fugit dignissimos dolores</div>
    </article>
    <!-- Masonry -->
    <article class="masonry">
      <div class="masonry__wrapper">
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
        <div class="masonry__block bg-img" style="background-image:url('http://placehold.it/250/')"></div>
      </div>
      <a href="#" class="btn masonry__btn">submit more</a>
    </article>
    <!-- About me -->
    <article class="about-me">
      <div class="about-me__info">
        <h2 class="about-me__title">About me</h2>
        <p
          class="about-me__parapraph"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias laudantium blanditiis quas sapiente magnam facilis, numquam cupiditate dicta aperiam ipsa itaque culpa, inventore explicabo, fugiat non beatae laboriosam nisi!</p>
      </div>
      <div class="about-me__skills">
        <img src="http://placehold.it/250/" alt />
        <div class="skills">
          <h3 class="skills__title">Skills</h3>
          <div class="skill">
            <h4 class="skill__title">habilidad</h4>
            <span class="skill__percent"></span>
            <div class="skill__range"></div>
          </div>
        </div>
      </div>
    </article>
    <!-- Blog -->
    <article class="blog">
      <h2 class="blog__title">New in blog</h2>
      <div class="blog__action">view all posts</div>
      <div class="post">
        <div class="post__img"></div>
        <div class="post__title">Vue it's amazing!</div>
        <div
          class="post__excerpt"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sequi temporibus cumque. Ullam ipsa saepe, omnis aliquid error commodi velit reiciendis officiis nam nemo voluptates deserunt quas pariatur modi quos?</div>
      </div>
    </article>
    <!-- Contact -->
    <article class="contact">
      <h2 class="contact__title">Contacts</h2>
    </article>
  </section>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss">
.featured {
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  &__title {
    text-transform: uppercase;
    width: min-content;
  }
  &__description {
    font-size: 11pt;
    width: 75%;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
}
.masonry {
  text-align: center;
  margin-bottom: 3rem;
  &__wrapper {
    height: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  &__block {
  }
  &__btn {
    display: inline-block;
    margin-top: 3rem;
  }
}
.about-me {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "info info"
    "skills skills";
  &__info,
  &__skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }
  &__info {
    grid-area: info;
  }
  &__skills {
    grid-area: skills;
  }
  &__title {
    text-transform: uppercase;
  }
  &__parapraph {
    width: 75%;
    margin: 0 auto;
  }
}
.blog {
}
.contact {
}
</style>
