# VueX

## Initial setup

* After instal vuex, we must register it in Vue as simple plugin.
```javascript
//store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//register ad plugin
```
* then we need to form the ***store*** object.
```javascript
//store/index.js
export default new Vuex.Store({
    //after register vuex in vue as plugin, we create object configuaration for vuex.
})
```
<hr/>

* After thate we must register vuex object in our application.
```javascript
//main.js
import Vue from 'vue'
import App from './App.vue'
import store from "./store"

Vue.config.productionTip = false

new Vue({
  store,//register in app our store object
  render: h => h(App),
}).$mount('#app')

```

### Now finshed registration process of Vuex.