<template lang="pug">
.profile
  .header
    img.icon(:src='`https://robohash.org/${userInfo._id}.png`')
    h1 {{ userInfo.displayname }}
    h3 {{ userInfo.username }}\#{{ userInfo.tag }}
</template>

<script>
const userInfo = JSON.parse(localStorage.getItem('userInfo'))

export default {
  data () {
    return {
      userInfo
    }
  }
}
</script>
