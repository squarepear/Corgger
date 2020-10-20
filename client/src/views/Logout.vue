<template lang="pug">
.logout
  h1 Logging out
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'

export default {
  setup() {
    onBeforeMount(() => {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userInfo')
    })

    onMounted(() => {
      this.$route.router.go('/')
    })
  },
}
</script>
