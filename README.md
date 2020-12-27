# VueX

## ⚫ Initial setup

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

## ⚫ part 2

* When we set up a store we can implement 4 types of fields here.
    * **actions** - in an object
    * **mutations** - this object contains functions that will directly modify store.
    * **state** - here we define the initial data.
    * **getters** - allow to transform data and get it from the store.
        * ⚠*but besides these 4 fields there is one more field called:*
            * **modules** - we can  <span style="background: yellow; color: black;">**decompose** (*dividing the whole into parts.*)</span> the logic in the vuex store.
    ```javascript
    export default new Vuex.Store({
        actions: {},
        mutations: {},
        state: {},
        getters: {},

        modules: {

        }


    });

    ```

    * **modules** -  modules are ordinary javascript files which the object exports.
        * For each entity (сущности), we can create a separate module and carry out the logic by decomposing(dividing the whole into parts) it.
        ![decompositon logic with modules](https://i.imgur.com/LgwEp2M.png)
        * Further(далее) in order to (для того чтобы) register this module.
        <br/>
        ![decompositon logic with modules](https://i.imgur.com/UtG03YI.png)
        <br/>
        Why need modules ?
        ![Explain modules](https://i.imgur.com/ooGYasm.png)
        <br/>
        How use modules ?
        ![Explain modules 2](https://i.imgur.com/qSrTTyg.png)
        * *data* in components not needed. In order to receive getters, we refer to the <span style="background: yellow; color: black;">computed</span> property.
        <br/>
        ⚠ computed will react to any change in getter.
        <br/>
        ![How get datas from components](https://i.imgur.com/eblDg3M.png)
        <br/>
        * Now in our component has a field **allPosts**
        ### 1. How get getters from store. Old variant
        ![How get data from tempalate](https://i.imgur.com/m6yXbvC.png)
        ### 2. Useing helpers functions of vuex. Modern variant.
        ![How get data from tempalate](https://i.imgur.com/nUpfW3m.png)


## Actions
* In order to work with the backend we must use **action**
<br/>
[What is action in vuex and how use it ? (image)](https://i.imgur.com/BzoZCtR.png)
![What is action in vuex and how use it ?](https://i.imgur.com/BzoZCtR.png)

## Mutations
 * We need to change the state. To do this we must use mutations. <br/>
    Muatations designed to change the state.

    ```javascript
    export default {
         mustations: {
             updatePosts() {//1 parameter always state, 2 what we will transfer to it
             

             }
        }
    }
    ```




        


        
