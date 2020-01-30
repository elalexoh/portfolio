<template>
  <article id="projects" class="projects">
    <!-- Project section title -->
    <section class="projects__title--wrapper">
      <h2 class="projects__title">Projects</h2>
    </section>

    <!-- Projects Tags -->
    <section class="projects__wrapper-tag">
      <div
        class="projects__tag pointer"
        @click="toggleModal(project)"
        v-for="(project, i) in projects"
        :key="i"
      >
        <h3>{{project.label}}</h3>
      </div>
    </section>

    <!-- modal for each project -->
    <section class="project modal" :class="(projectModal)? 'active' : 'hidden'">
      <!-- carousel -->
      <section v-if="JSON.stringify(this.selectedProject) !== '{}'">
        <carousel :items="1" :autoplay="true" :nav="false">
          <h2
            v-for="(item, index) in selectedProject.resources[0].content"
            :key="index"
          >{{item.title}}</h2>
        </carousel>
      </section>
      <!-- project description -->
      <section class="project__info">
        <h2 class="project__title">{{getContent(this.selectedProject, 'title')}}</h2>
        <div class="project__description">
          <p>{{getContent(this.selectedProject, 'description')}}</p>
        </div>
        <ul class="project__techs">
          <li
            v-for="(tech, i) in getContent(this.selectedProject, 'techs')"
            :key="i"
          >{{ tech.title }}</li>
        </ul>
      </section>
      <div class="close pointer" @click="toggleModal()"></div>
    </section>

    <!-- <masonry/> -->
  </article>
</template>
<script>
import carousel from "vue-owl-carousel2";
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
              description: "Proyecto de propiedades",
              techs: [
                { title: "NuxtJs" },
                { title: "Boostrap" },
                { title: "Javascript" }
              ],
              content: [
                {
                  title: "Home page1",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Contact page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                }
              ]
            }
          ]
        },
        {
          label: "landing page",
          resources: [
            {
              title: "Compass vital health",
              description: "Proyecto de propiedades",
              techs: [
                { title: "Wordpress" },
                { title: "Boostrap" },
                { title: "Javascript" },
                { title: "Jquery" },
                { title: "Sage8" }
              ],
              content: [
                {
                  title: "Home page2",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Contact page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
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
              description: "Proyecto de propiedades",
              techs: [
                { title: "Wordpress" },
                { title: "Boostrap" },
                { title: "Jquery" },
                { title: "Sage8" }
              ],
              content: [
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Contact page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                }
              ]
            }
          ]
        },
        {
          label: "eCommerce",
          resources: [
            {
              title: "Pick & Fly",
              description: "Proyecto de propiedades",
              techs: [
                { title: "Wordpress" },
                { title: "Woocommerce" },
                { title: "Boostrap" },
                { title: "Jquery" },
                { title: "Javascript" },
                { title: "Sage9" }
              ],
              content: [
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Home page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                },
                {
                  title: "Contact page",
                  source: require("@/assets/img/proyects/lux/theluxproperties (1).png")
                }
              ]
            }
          ]
        }
      ],
      selectedProject: {},
      images: [
        "https://placeimg.com/200/200/any?1",
        "https://placeimg.com/200/200/any?2",
        "https://placeimg.com/200/200/any?3",
        "https://placeimg.com/200/200/any?4"
      ]
    };
  },
  watch: {
    selectedProject: selectedProject => {
      console.log(selectedProject);
    }
  },
  methods: {
    toggleModal(project) {
      this.projectModal = !this.projectModal;
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
    carousel
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
    &__title {
      padding: 0 1.5rem;
    }
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