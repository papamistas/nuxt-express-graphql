<template v-if="codCasa">
  <div class="Casa">
    CASA scrollspy???
    <span>{{ codCasa }}</span>

    <CasaImages></CasaImages>
    <span>{{ casa.seoTitle }}</span>
    <CasaDocs></CasaDocs>
  </div>
</template>

<script>
import CasaImages from './CasaImages'
import CasaDocs from './CasaDocs'
export default {
  name: 'Casa',
  components: {
    CasaImages,
    CasaDocs
  },

  props: ['codCasa', 'seoTitle', 'casa']
}
</script>
