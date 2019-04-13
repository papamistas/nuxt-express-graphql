<template>
  <div>
    testeing google router , its working
  </div>
</template>
<script>
import passport from 'passport'
//  import config from '~/server/config/configKeys'
//  import db from '~/server/models'

export default {
  name: 'Google',
  created: function() {
    this.touchStart()
  },
  methods: {
    touchStart(e) {
      passport.initialize()
      passport.session()
      passport.serializeUser(function(user, cb) {
        cb(null, user)
      })

      passport.deserializeUser(function(obj, cb) {
        cb(null, obj)
      })

      const Strategy = require('passport-google-oauth20').Strategy
      passport.use(
        new Strategy(
          {
            clientID:
              '150235012843-eibaqvkld98i32jl8heif2l4krervj5d.apps.googleusercontent.com',
            clientSecret: '_aSDv_nJGwqzH2YFdlmkzFgs',
            callbackURL: 'http://localhost:7000/callback'
          },
          function(accessToken, refreshToken, profile, cb) {
            // In this example, the user's Facebook profile is supplied as the user
            // record.  In a production-quality application, the Facebook profile should
            // be associated with a user record in the application's database, which
            // allows for account linking and authentication with other identity
            // providers.
          }
        )
      )
      passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
      })
    }
  }
}
</script>
