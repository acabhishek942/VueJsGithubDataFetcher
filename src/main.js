import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import VueRouter from 'vue-router';
Vue.use(VueAxios, axios)

Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8000/rest-auth/github/', // Your API domain
  
  providers: {
    github: {
      clientId: 'c97d48f31c11090f8eb8',
      redirectUri: 'http://127.0.0.1:8000/accounts/github/login/callback' // Your client app URL
    }
  }
})

const router = new VueRouter();
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
