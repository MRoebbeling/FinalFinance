import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0,
        AccountInfo: null,
        AccountPosition: []
      }
    },
    mutations: {
      setTheState (state, payload) {
        state.AccountInfo = payload;
        return "Pisser";
      },
      addAccounPosition (state, payload) {
        state.AccountPosition.push(payload)
      }
    }
  })
  
const app = createApp(App)
// Install the store instance as a plugin
app.use(store)
app.mount('#app')
 
//createApp(App).mount('#app')
