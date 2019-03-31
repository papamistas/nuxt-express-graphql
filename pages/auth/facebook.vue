<template>
  <div>
    testeing facebook router , its working
  </div>
</template>
<script>
import passport from 'passport'
//  import config from '~/server/config/configKeys'
//  import db from '~/server/models'

export default {
  name: 'Facebook',
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

      const Strategy = require('passport-facebook').Strategy
      passport.use(
        new Strategy(
          {
            clientID: 2283537038597632,
            clientSecret: 'aa1bc4fa1e7b6e05128a80c8932951aa',
            callbackURL: 'http://localhost:7000/auth/facebook/callback'
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
      passport.authenticate('facebook')
    }
  }
}
</script>
