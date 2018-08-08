<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <search-users></search-users>
  </div>
</template>

<script>
import SearchUsers from './components/SearchUsers.vue';
export default {
  components : {
    'SearchUsers' : SearchUsers
  },
  data () {
    return {
      title: 'Github Vue'
    }
  },
  methods: {
    greeting: function(){
      return "Hello there";
    }
  }
}
</script>

<style>
</style>
