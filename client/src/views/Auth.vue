<template lang="pug">
.auth
  .signin(v-if='signin')
    h1 Signin
    input#username(type="text", name="username", v-model='username')
    input#tag(type="number", name="tag", v-model='tag')
    input#password(type="password", name="password", v-model='password')
  .signup(v-else)
    h1 Signup
    input#username(type="text", name="username", v-model='username')
    input#tag(type="number", name="tag", v-model='tag')
    input#password(type="password", name="password", v-model='password')
  button.hover(@click='submit') Submit
  span.hover(v-text='`Switch to ${signin ? "Signup" : "Signin"}`', @click='switch')
</template>

<script>
import { signinUser, signupUser } from '../utils/api'

export default {
  data () {
    return {
      signin: false,
      username: '',
      tag: '',
      password: ''
    }
  },
  methods: {
    submit () {
      if (this.signin) signinUser(this.username.toLowerCase(), this.tag, this.password)
      else signupUser(this.username, this.username.toLowerCase(), this.tag, this.password)
    },
    switch () {
      this.signin = !this.signin
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  text-align: center;

  .hover:hover {
    cursor: pointer;
  }
}
</style>
