<!--HOW WE WORK WIHH DATA WHEN WE NOT HAVE VUEX-->

<template>
  <div id="app">
    <h1>Hello from vuex</h1>
    <PostForm />
    <hr />
    <h2>You have {{ countOfPosts }} posts.</h2>
    <div v-for="post in getAllPosts" class="post" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm.vue";

export default {
  name: "App",
  components: {
    PostForm,
  },
  data() {
    return {
      posts: [],
    };
  },

  // computed: {
  //   ...mapGetters(["getAllPosts"]),
  // },

  computed: mapGetters(["getAllPosts", "countOfPosts"]),

  //# How use mapActions in mounted
  // methods: {
  //   ...mapActions(["fetchPosts"]),
  // },
  methods: mapActions(["fetchPosts"]),

  //# How change state
  mounted() {
    this.fetchPosts(7); //✅pass payload to our action
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
