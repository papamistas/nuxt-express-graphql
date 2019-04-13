<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Inbox</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>check_circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list v-if="casas2" two-line>
          <template v-for="(item, index) in casas2">
            <v-list-tile :key="index" avatar ripple>
              <v-list-tile-content>
                <router-link
                  :to="{
                    name: 'casa',
                    params: {
                      codCasa: item.cod_casa,
                      seoTitle: item.seoTitle,
                      casa: item
                    }
                  }"
                >
                  {{ item.cod_casa }}
                </router-link>

                <v-list-tile-sub-title class="text--primary">{{
                  item.titulo
                }}</v-list-tile-sub-title>
                <v-list-tile-sub-title class="text--primary"
                  >{{ item.designacao }}
                </v-list-tile-sub-title>
                <v-list-tile-sub-title class="text--primary"
                  >{{ item.seo_title }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <template v-for="per in item.periodos">
                  <v-list-tile-action-text :key="per.codCasa">{{
                    per.inicio
                  }}</v-list-tile-action-text>
                </template>
                <v-icon color="grey lighten-1">star_border</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < casas.length"
              :key="`divider-${index}`"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  props: {
    casas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      casas2: this.casas,
      codCasa: null,
      seoTitle: null
    }
  }
}
</script>
