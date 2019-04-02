<template>
  <div class="Results">
    <Result :casas="casasRes"></Result>
  </div>
</template>

<script>
import Result from './Result'
export default {
  components: { Result },

  props: {
    casas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      casasRes: this.casas
    }
  },
  created: function() {}
}
</script>
