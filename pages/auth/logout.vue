<template>
  <div>
    logout
  </div>
</template>
<script>
// import passport from 'passport'
//  import config from '~/server/config/configKeys'
//  import db from '~/server/models'

export default {
  name: 'Logout',
  created: function() {
    this.touchStart()
  },
  methods: {
    touchStart(e) {
      this.$auth.logout()
    }
  }
}
</script>
