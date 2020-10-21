<template lang="pug">
Nav
router-view.router
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
.router {
}
</style>
