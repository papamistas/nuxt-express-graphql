


<template>
    <div>
        <input type="text"/>
        <button @click="getLanguage">Search</button>
    </div>

</template>
<script>
    export default {
        name:  "Search",
        data () {
            return {
                example1: ''
            }
        },
        methods: {
            getLanguage() {
                alert('search');

            }
        }

    }


</script>

<style scoped>

</style>