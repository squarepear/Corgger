<template lang="pug">
nav
  ul
    li
      router-link(to='/')
        fa-icon(:icon='["fas", "paw"]', size='2x')
  ul
    li Search
  ul
    li
      fa-icon(:icon='["fas", "user"]', size='2x')
</template>

<script>
import { routes } from '../router'

export default {
  setup() {
    return {
      routes,
    }
  },
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 6vh;
  background-color: #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav > ul {
  list-style-type: none;
  flex-shrink: 1;

  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
</style>
