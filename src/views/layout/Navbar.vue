<template>
  <nav class="navbar">
    <div class="navbar__toggle">
      <div
        class="navbar__toggle-btn pointer"
        @click="toggleBtn"
        :class="{'active':showVerticalMenu}"
      >
        <img class="navbar__toggle-img" src="@/assets/img/menu.svg">
      </div>
      <div class="navbar__toggle-menu-wrapper" :class="{'active':showVerticalMenu}">
        <span class="navbar__toggle-close pointer" @click="toggleBtn"></span>
        <ul class="navbar__toggle-items">
          <li class="navbar__toggle-item" v-for="(menuItem, index) in menuItems" :key="index">
            <a :href="'#'+menuItem.link">{{menuItem.title}}</a>
            <!-- <router-link
              class
              tag="a"
              exact
              active-class="active"
              :to="`#${menuItem.link}`"
            >{{menuItem.title}}</router-link>-->
          </li>
        </ul>
      </div>
    </div>
    <ul class="navbar__options">
      <router-link class="navbar__option" tag="li" exact active-class="active" to="/">Home</router-link>
      <router-link
        class="navbar__option beta"
        tag="li"
        exact
        active-class="active"
        to="/sandbox/"
      >Sandbox</router-link>
    </ul>
    <div class="navbar__contact"></div>
    <a href="#app" class="navbar__up-btn">
      <i class="fas fa-chevron-up"></i>
    </a>
    <div class="navbar__dots">
      <a
        class="navbar__dots--dot"
        :href="'#'+menuItem.link"
        v-for="(menuItem, index) in menuItems"
        :key="index"
        @click="toggleDotActive"
      >
        <!-- <div class="navbar__dots--dot-tooltip">{{ menuItem.title }}</div> -->
      </a>
    </div>
  </nav>
</template>
<script>
import { bus } from "@/main.js";
export default {
  data() {
    return {
      showVerticalMenu: false,
      menuItems: [],
      themeColor: ""
    };
  },
  methods: {
    toggleBtn: function() {
      this.showVerticalMenu = !this.showVerticalMenu;
    },
    toggleDotActive(e) {
      const element = e.target;
      const classElement = element.className;
      const elements = document.querySelectorAll(`.${classElement}`);
      elements.forEach(element => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    }
  },
  created() {
    bus.$on("updateMenuOptions", (menu, themeColor) => {
      this.themeColor = themeColor;
      this.menuItems = menu;
    });
  }
};
</script>
<style lang="scss">
.navbar {
  background-color: $primary;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  height: $navbar;
  &__toggle-img {
    padding-left: 1.5rem;
  }
  &__toggle-close {
    display: block;
    text-align: center;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      height: 30px;
      width: 5px;
      background-color: white;
      display: block;
      transform: rotate(0deg);
      transition: transform 0.5s ease;
    }
  }
  &__toggle-menu-wrapper {
    position: fixed;
    top: 50%;
    left: 0;
    height: 100%;
    width: 11.5%;
    transition: transform 0.5s ease-in;
    transform: translate(-100%, -50%);
    background-color: var(--bg-color);
    &.active {
      transform: translate(0%, -50%);
      .navbar__toggle-close::after {
        transform: rotate(90deg);
      }
    }
    &::after {
      content: "";
      height: 100%;
      width: 5px;
      background-color: $secondary;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  &__toggle-items {
    text-align: center;
  }
  &__toggle-item {
    margin-bottom: 1.5rem;
    &:first-child {
      margin-top: 1.5rem;
    }
  }
  &__toggle-img {
    width: 35px;
    height: auto;
    filter: invert(1);
    opacity: 0.5;
  }
  &__options {
    font-size: 18pt;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__option--sandbox {
    // position: relative;
    // &::after {
    //   content: "Beta";
    //   height: max-content;
    //   background-color: tomato;
    //   color: white;
    //   font-size: 10pt;
    //   position: absolute;
    //   padding: 0.2rem;
    //   top: 100%;
    //   transform: translateY(-50%);
    // }
  }
  &__option.active {
    color: $accent;
  }
  &__up-btn {
    background-color: $grey_3;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  &__dots {
    position: fixed;
    // background-color: tomato;
    height: 100%;
    width: 100px;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &--dot {
      height: 25px;
      width: 25px;
      background: $grey_3;
      border-radius: 50%;
      margin: 1rem 0;
      transition: background-color 0.5s 0.25s ease;
      position: relative;
      &.active {
        background-color: $accent;
      }
      &-tooltip {
        position: absolute;
        right: calc(100% + 25px);
        width: max-content;
        background-color: $primary;
        padding: 1rem 2rem;
        top: 50%;
        transform: translateY(-50%);

        // border: 3px solid $secondary;
        &::after {
          content: "";
          position: absolute;
          height: 30%;
          width: 15px;
          top: 50%;
          right: 0;
          transform: translateX(100%) translateY(-50%);
          background-color: $secondary;
          clip-path: polygon(100% 50%, 0 0, 0 98%);
        }
      }
    }
  }
}
</style>