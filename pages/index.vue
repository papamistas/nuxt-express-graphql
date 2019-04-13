<template>
  <div>
    <div v-if="!this.$auth.loggedIn">
      <a href="/auth/facebook">Login with Facebook</a>
      <a href="/auth/google">Login with google</a>
    </div>
    <button @:click="signinFb">login FB</button>
    <form action="/auth/login" method="post">
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
    <div v-if="casas">
      <Results :casas="casas"></Results>
    </div>

    <Search />
    <h3>Example 1</h3>
    <v-btn color="success" @click="getLanguage">Success</v-btn>

    <div v-if="casas">
      <Results :casas="casas"></Results>

      <div>
        <div id="results">
          <div v-for="casa in casas" :key="casa">
            <span>
              {{ casa.cod_casa }}
            </span>
            <span>
              {{ casa.designacao }}
            </span>
            <span>
              {{ casa.destino_complex }}
            </span>

            <div v-for="periodo in casa.periodos" :key="periodo">
              <span>
                {{ periodo.inicio }}
              </span>
              <span>
                {{ periodo.fim }}
              </span>
              <span>
                {{ periodo.precoSemana }}
              </span>
            </div>
            <div v-for="feedback in casa.feedbacks" :key="feedback">
              <span>
                {{ feedback.inicio }}
              </span>
              <span>
                {{ feedback.fim }}
              </span>
              <span>
                {{ feedback.precoSemana }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />
  </div>
</template>
<script>
import axios from 'axios'
import Search from '../components/Search'

import Results from '../components/Results'

export default {
  auth: false,
  name: 'App',
  components: {
    Results,
    Search
  },
  data: function() {
    return {
      casas: []
    }
  },
  created() {
    // this.getLanguage()
    const consola = require('consola')

    consola.info(this.$auth.loggedIn)
  },

  methods: {
    async getLanguage() {
      try {
        const res = await axios.post('http://localhost:7000/graphql', {
          query: `{
    casas {
      cod_casa
      designacao
      destino
      destino_complex
      titulo
          seoTitle
        periodos {
          id
          inicio
          fim
          precoSemana
        }
        feedbacks {
          comment
          valor_voto

        }

  }
}`
        })
        this.casas = res.data.data.casas
        // Results.$forceUpdate();
        this.store.state.casas = this.casas
      } catch (e) {}
    },
    signinFb: function(event) {
      alert('fb')
      axios
        .get('/auth/facebook', { crossdomain: true })
        .then(response => (this.info = response))
    }
  }
}
</script>
