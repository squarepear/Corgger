<template lang="pug">
.logout
  h1 Logging out
</template>

<script>
export default {
  setup () {
    localStorage.removeItem('jwt')
    localStorage.removeItem('userInfo')

    this.$router.push('/')
  }
}
</script>
