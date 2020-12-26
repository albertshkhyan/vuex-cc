<!--HOW WE WORK WIHH DATA WHEN WE NOT HAVE VUEX-->

<template>
  <div id="app">
    <div v-for="post in posts" class="post" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    const posts = await res.json();
    this.posts = posts;
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
