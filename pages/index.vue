<template>
  <div>
    <a href="/auth/facebook">Login with Facebook</a>
    <a href="/auth/google">Login with google</a>

    <button v-on:click="signinFb">login FB</button>
    <form action="/auth/login" method="post">
      <div>
        <label>Username:</label>
        <input type="text" name="username"/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password"/>
      </div>
      <div>
        <input type="submit" value="Log In"/>
      </div>
    </form>
    <div v-if="this.$store.casas">
      <Results v-bind:casas="this.$store.casas"></Results>
    </div>
    <Signin></Signin>
    <hr>
    <hr>
    <Signup></Signup>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AdvancedSearch />
    <Search />
    <h3>Example 1</h3>
    <v-btn color="success" @click="getLanguage">Success</v-btn>

    <div v-if="casas">
      <Results :casas="this.casas"></Results>

      <div>
        <div id="results">
          <div v-for="casa in casas">
            <span>
              {{ casa.cod_casa }}
            </span>
            <span>
              {{ casa.designacao }}
            </span>
            <span>
              {{ casa.destino_complex }}
            </span>

            <div v-for="periodo in casa.periodos">
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
            <div v-for="feedback in casa.feedbacks">
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

import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch'
import Results from '../components/Results'

export default {
  name: 'App',
  components: {
    Results,
    AdvancedSearch,
    Search
  },

  data() {
    return {
      casas: this.$store.casas
    }
  },
  /* created() {
        this.rand = Math.round(Math.random() * 1000)
        this.getLanguage()
    }, */

  methods: {
    async getLanguage() {
      alert('blabla')
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
        this.$store.casas = this.casas
      } catch (e) {
        console.log('err', e)
      }
    },
    signinFb: function (event) {
      alert('fb')
      this.$http
        .get('/auth/facebook',{ crossdomain: true })
        .then(response => (this.info = response))
    }
  }
}
</script>
