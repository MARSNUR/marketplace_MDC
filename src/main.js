import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/js/bootstrap-select.min.js'
import './assets/js/bootstrap-slider.min.js'
import './assets/js/magnific-popup.min.js'
import './assets/js/clipboard.min.js'
import './assets/js/counterup.min.js'
// import './assets/js/mmenu.min.js'
import './assets/js/simplebar.min.js'
import './assets/js/slick.min.js'
import './assets/js/snackbar.js'
import './assets/css/style.css';



createApp(App)
   .use(store) 
   .use(router) 
   .mount('#app')
