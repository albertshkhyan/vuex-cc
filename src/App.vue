<!--HOW WE WORK WIHH DATA WHEN WE NOT HAVE VUEX-->

<template>
  <div id="app">
    <h1>Hello from vuex</h1>
    <div v-for="post in getAllPosts" class="post" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      posts: [],
    };
  },
  // async mounted() {//componentDidMount === mounted
  //   const res = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=3"
  //   );
  //   const posts = await res.json();
  //   this.posts = posts;
  // },

  //#for access getteres from store we must use computed property
  //#Variant 1
  // computed: {
  //   //#in here we must specify name of that getter wchich exist in store
  //   getAllPosts() {
  //     //👈 getAllPosts
  //     // console.log("this.$store", this.$store); //Store {commit, dispatch, getters, _actions ...}
  //     // return this.$store.posts;

  //     //1 old variant
  //     return this.$store.getters.getAllPosts; //👈 getAllPosts - old variant
  //     //2 modern variant - get getter with helper funstion of vuex
  //     // return mapGetters(["getAllPosts"]); //mapGetters: mapper parameter must be either an Array or an Object
  //   },
  // },
  //#Variant 2 - with mapGetters
  computed: {
    ...mapGetters(["getAllPosts"]), //mapGetters return object {type: [string], Function}
  },

  //# How use mapActions in mounted
  methods: {
    ...mapActions(["fetchPosts"]),
  },

  //# How change state
  mounted() {
    console.log("this.$store -----", this.$store);
    // this.$store.dispatch("fetchPosts"); //old variant, 1 arg - type of action, 2 arg - payload
    // return mapActions(["fetchPosts"]);//❌
    this.fetchPosts(); //✅
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.post {
  margin: 20px auto;

  width: 30%;
  border: 1px solid #000;
}
</style>
