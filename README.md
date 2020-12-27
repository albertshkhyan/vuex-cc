# VueX

## Now how implement pass parameters to action ?


```javascript   
  methods: mapActions(["fetchPosts"]),

  //# How change state
  mounted() {
    this.fetchPosts(4); //✅pass payload to our action
  },
```
```js
    actions: {
        // async fetchPosts(context, payload) {
        async fetchPosts(context, limit = 3) {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const posts = await res.json();
            context.commit("GET_ALL_POSTS", posts)

        }
    },
```
<hr/>

## Now how can we work with gettars ?

* Now we will implement getter which return count of posts.
```js
    getters: {
        getAllPosts(state, getters) {
            return state.posts;
        },
        postCount(state) {
            return state.posts.length;
        }
    },
```
```js
  computed: mapGetters(["getAllPosts", "postCount"]),

```

        


        
 