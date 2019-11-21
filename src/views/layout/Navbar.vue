<template>
  <nav class="navbar">
    <div class="navbar__toggle">
      <div class="navbar__toggle-btn" @click="toggleBtn" :class="{'active':showVerticalMenu}">
        <img class="navbar__toggle-img" src="@/assets/img/menu.svg" />
        <div class="navbar__toggle-menu-wrapper">
          <ul class="navbar__toggle-items">
            <li class="navbar__toggle-item">bloque1</li>
            <li class="navbar__toggle-item">bloque1</li>
            <li class="navbar__toggle-item">bloque1</li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="navbar__options">
      <router-link class="navbar__option" tag="li" exact active-class="active" to="/">Home</router-link>
      <router-link class="navbar__option" tag="li" exact active-class="active" to="/about">About</router-link>
    </ul>
    <div class="navbar__contact"></div>
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
  &__toggle-menu-wrapper {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    height: 100%;
    width: 250px;
    transition: transform 0.5s ease-in;
  }
  &__toggle-btn {
    padding-left: 1.5rem;
    width: max-content;
    &.active {
      .navbar__toggle-menu-wrapper {
        transform: translate(0%, -50%);
      }
    }
  }
  .navbar__toggle-items {
    background-color: #bada55;
    text-align: center;
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

  &__option {
    &.active {
    }
  }
}
</style>