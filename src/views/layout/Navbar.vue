<template>
  <nav class="navbar">
    <div class="navbar__toggle">
      <div
        class="navbar__toggle-btn pointer"
        @click="toggleBtn"
        :class="{'active':showVerticalMenu}"
      >
        <img class="navbar__toggle-img" src="@/assets/img/menu.svg" />
      </div>
      <div class="navbar__toggle-menu-wrapper" :class="{'active':showVerticalMenu}">
        <span class="navbar__toggle-close pointer" @click="toggleBtn"></span>
        <ul class="navbar__toggle-items">
          <li class="navbar__toggle-item">
            <a href="#featured">Hello!</a>
          </li>
          <li class="navbar__toggle-item">
            <a href="#about-me">About Me</a>
          </li>
          <li class="navbar__toggle-item">
            <a href="#blog">New in Blog</a>
          </li>
          <li class="navbar__toggle-item">
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="navbar__options">
      <router-link class="navbar__option" tag="li" exact active-class="active" to="/">Home</router-link>
      <router-link class="navbar__option" tag="li" exact active-class="active" to="/about">About</router-link>
    </ul>
    <div class="navbar__contact"></div>
    <a href="#app" class="navbar__up-btn">
      <i class="fas fa-chevron-up"></i>
    </a>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showVerticalMenu: false
    };
  },
  methods: {
    toggleBtn: function() {
      this.showVerticalMenu = !this.showVerticalMenu;
    }
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
    background-color: $grey_3;
    &.active {
      transform: translate(0%, -50%);
      .navbar__toggle-close::after {
        transform: rotate(90deg);
      }
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
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  }
}
</style>