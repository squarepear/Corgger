<template lang="pug">
.profile
  .header
    img.icon(:src='`https://robohash.org/${userInfo.id}.png`')
    .info
      h1.displayname {{ userInfo.displayname }}
      p.username {{ userInfo.username }}
        span.tag \#{{ userInfo.tag }}
</template>

<script>
import { reactive } from 'vue'
import { getSelfInfo, getUserInfo } from '../utils/api'

export default {
  async mounted () {
    if (!localStorage.getItem('jwt')) { return this.$router.push('/logout') }

    try {
      this.userInfo = reactive(await ((!this.username) ? getSelfInfo() : getUserInfo(this.username, this.tag)))

      localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
    } catch (err) {
      console.error(err)
    }
  },

  data () {
    return {
      userInfo: []
    }
  },

  props: {
    username: String,
    tag: String
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 12em;
  display: flex;
  flex-direction: row;
  align: center;
  justify-content: center;

  .icon {
    width: 8em;
    height: 8em;

    border: 4px solid black;
    border-radius: 2em;
  }

  .info {
    margin-left: 4em;
  }
}
</style>
