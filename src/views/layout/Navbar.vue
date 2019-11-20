<template>
  <nav class="navbar">
    <div class="navbar__toggle">
      <div class="navbar__toggle-btn">
        <img class="navbar__toggle-img" src="@/assets/img/menu.svg" />
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
export default {};
</script>
<style lang="scss">
.navbar {
  background-color: $primary;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  height: $navbar;
  &__toggle-btn {
    padding-left: 1.5rem;
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