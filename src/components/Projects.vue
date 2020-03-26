<template>
  <article id="projects" class="projects">
    <!-- Project section title -->
    <section class="projects__title--wrapper">
      <h2 class="projects__title">proyectos</h2>
    </section>

    <!-- Projects Tags -->
    <section class="projects__wrapper-tag">
      <div
        class="projects__tag pointer"
        @click="activeModal(project)"
        v-for="(project, i) in projects"
        :key="i"
      >
        <h3>{{project.label}}</h3>
      </div>
    </section>

    <!-- modal for each project -->
    <section
      class="project modal hidden"
      :class="camelCase(project.label)"
      v-for="(project, i) in projects"
      :key="i"
    >
      <!-- project images -->
      <section class="project__carousel">
        <img
          v-for="(item, index) in project.resources[0].content"
          :key="index"
          :src="item.source"
          class="project__img"
        >
      </section>
      <!-- project description -->
      <section class="project__info">
        <h2 class="project__title">
          <a
            :href="project.resources[0].link"
            target="_blank"
            rel="noopener noreferrer"
          >{{ project.resources[0].title }}</a>
        </h2>
        <div class="project__description">
          <p>{{ project.resources[0].description }}</p>
        </div>
        <ul class="project__techs">
          <li
            v-for="(tech, i) in project.resources[0].techs"
            :key="i"
            class="project__tech"
          >{{ tech.title }}</li>
        </ul>
      </section>
      <div class="close pointer" @click="activeModal(project)"></div>
    </section>

    <!-- <masonry/> -->
  </article>
</template>
<script>
// import carousel from "vue-owl-carousel2";
export default {
  data() {
    return {
      projectModal: false,
      projects: [
        {
          label: "spa",
          resources: [
            {
              title: "The Lux Properties",
              link: "http://dev.theluxproperties.com/",
              description:
                "Este es un proyecto del area inmobiliaria, diseñado para ser amigable con el usuario e intuitivo, cuenta con pagina de aterrisaje y un sistema administrativo para la gestion interna de las propiedades.",
              techs: [
                { title: "Javascript" },
                { title: "Bootstrap" },
                { title: "VueJs" },
                { title: "NuxtJs" }
              ],
              content: [
                {
                  title: "Inicio",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                }
                // {
                //   title: "Home page",
                //   source: require("@/assets/img/proyects/lux/theluxproperties (2).png")
                // },
                // {
                //   title: "Home page",
                //   source: require("@/assets/img/proyects/lux/theluxproperties (3).png")
                // },
                // {
                //   title: "Home page",
                //   source: require("@/assets/img/proyects/lux/theluxproperties (4).png")
                // },
                // {
                //   title: "Home page",
                //   source: require("@/assets/img/proyects/lux/theluxproperties (5).png")
                // },
                // {
                //   title: "Contact page",
                //   source: require("@/assets/img/proyects/lux/theluxproperties (6).png")
                // }
              ]
            }
          ]
        },
        {
          label: "landing page",
          resources: [
            {
              title: "Compass vital health",
              link: "http://compass.orugadesarrollo.com/",
              description:
                "Desarrollada en Wordpress, Compass Vital Health fue diseñada para una empresa dedicada a vender suplementos alimenticios, y servicios de coaching, enfocada a un público juvenil y contemporaneo.",
              techs: [
                { title: "Wordpress" },
                { title: "Bootstrap" },
                { title: "Javascript" },
                { title: "Jquery" },
                { title: "Sage8" }
              ],
              content: [
                {
                  title: "Inicio",
                  source: require("@/assets/img/proyects/compass/compass.jpg")
                }
              ]
            }
          ]
        },
        {
          label: "blog",
          resources: [
            {
              title: "Behrens",
              link: "http://behrens.orugadesarrollo.com/",
              description:
                "Behrens es una empresa con más de 115 años de compromiso con la salud del pueblo venezolano, esta pagina fue diseñada para atender a una empresa conservadora pero al mismo tiempo a la vanguardia.",
              techs: [
                { title: "Wordpress" },
                { title: "Bootstrap" },
                { title: "Jquery" },
                { title: "Sage8" }
              ],
              content: [
                {
                  title: "Inicio",
                  source: require("@/assets/img/proyects/behrens/behrens (1).jpg")
                }
                // {
                //   title: "Blog",
                //   source: require("@/assets/img/proyects/behrens/behrens (2).png")
                // },
                // {
                //   title: "Interna de blog",
                //   source: require("@/assets/img/proyects/behrens/behrens (3).jpg")
                // },
                // {
                //   title: "Interna",
                //   source: require("@/assets/img/proyects/behrens/behrens (4).png")
                // },
                // {
                //   title: "Interna",
                //   source: require("@/assets/img/proyects/behrens/behrens (5).png")
                // },
                // {
                //   title: "Interna",
                //   source: require("@/assets/img/proyects/behrens/behrens (6).jpg")
                // },
                // {
                //   title: "Interna",
                //   source: require("@/assets/img/proyects/behrens/behrens (7).jpg")
                // },
                // {
                //   title: "Interna",
                //   source: require("@/assets/img/proyects/behrens/behrens (8).jpg")
                // }
              ]
            }
          ]
        },
        {
          label: "eCommerce",
          resources: [
            {
              title: "Pick & Fly",
              link: "http://pickandflyve.com/",
              description:
                "E-commerce para prestigiosa empresa Venezolana, donde puedes hacer compras antes de un vuelo, para luego retirar en el aeropuerto Satelite de Maiquetía.",
              techs: [
                { title: "Wordpress" },
                { title: "Woocommerce" },
                { title: "Bootstrap" },
                { title: "Jquery" },
                { title: "Javascript" },
                { title: "Sage9" }
              ],
              content: [
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/pickandfly/pickandfly (1).jpg")
                }
                // {
                //   title: "Home page",
                //   source: require("@/assets/img/proyects/pickandfly/pickandfly (2).png")
                // },
                // {
                //   title: "Home page",
                //   source: require("@/assets/img/proyects/pickandfly/pickandfly (3).png")
                // }
              ]
            }
          ]
        }
      ],
      selectedProject: {}
    };
  },
  watch: {
    // selectedProject: selectedProject => {
    //   console.log(selectedProject);
    // }
  },
  methods: {
    activeModal(project) {
      const modal = document.querySelector(
        `.project.modal.${this.camelCase(project.label)}`
      );
      modal.classList.toggle("hidden");
    },
    camelCase(str) {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
          return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
    },
    toggleModal(project) {
      this.projectModal = !this.projectModal;
      console.info(project.label);

      if (project) {
        this.setProject(project);
      }
    },
    setProject(project) {
      this.selectedProject = project;
    },
    getContent(project, content) {
      return JSON.stringify(this.selectedProject) === "{}"
        ? "hey"
        : this.selectedProject.resources[0][content];
    }
  },
  components: {
    // carousel
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
    transition: background-color 0.25s ease;
    &:hover {
      background-color: $accent;
      h3 {
        color: $white;
      }
    }
  }
  .project {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $grey_3;
    z-index: 1000;
    display: grid;
    grid-template-columns: 45% 55%;
    justify-content: center;
    align-items: center;
    left: 0;
    transition: all 1s cubic-bezier(0.17, 0.67, 0.45, 1.25);
    &.spa {
      .project__carousel {
        display: flex;
        align-items: center;
      }
    }
    &__carousel {
      // display: flex;
      // align-items: center;
      height: 100%;
      overflow-y: auto;
    }
    &__img {
      max-width: 100%;
    }
    &__title {
      padding: 0 1.5rem;
      a {
        transition: color 0.5s ease;
      }
      &:hover a {
        color: $accent;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 auto;
      height: 75%;
      width: 80%;
    }
    &__description {
      width: 75%;
      margin: 0 auto;
    }
    &__techs {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &__tech {
      flex: 0 1 25%;
      margin-bottom: 1rem;
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
        transition: background-color 0.5s ease;
      }
      &::after {
        transform: rotate(-40deg);
      }
      &::before {
        transform: rotate(40deg);
      }
      &:hover {
        &::after,
        &::before {
          background-color: $accent;
        }
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
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 1.5rem;
      &__info {
        height: 100%;
      }
      &__carousel {
        max-height: 50vh;
        overflow-y: auto;
      }
      &__img {
        max-width: 100%;
      }
      &__carousel {
        order: 2;
      }
      &__info {
        order: 1;
      }
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
    .project {
      &__tech {
        flex: 0 1 33%;
        font-size: 11pt;
      }
      &__title {
        font-size: 20pt;
      }
    }
  }
}
@media (max-width: 414px) {
  .projects {
    &__tag {
      font-size: 15pt;
    }
    .project {
      grid-template-rows: 1fr;
      &__carousel {
        max-height: 100vh;
      }
      &__info {
        display: none;
      }
      .close {
        &::after,
        &::before {
          background-color: $primary;
        }
      }
    }
  }
}
</style>