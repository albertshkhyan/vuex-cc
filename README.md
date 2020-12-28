# VueX

## Now implement add post.

### When useing syncronous function.

* how change state (without actions)
<br/>
⚠ Since we will not be accessing the backend we will use the mutation in UI.
```js
 methods: {
    ...mapMutations(["CREATE_POST"]),//1
    handleAddPost(data) {
      const title = data.target.title.value;
      const body = data.target.body.value;
      const newPost = {
        title,
        body,
        id: Date.now(),
      };
      this.CREATE_POST(newPost);//2
    },
 }

```

### Add post with v-model (2 way binding)
```js
    handleAddPost(data) {
      //   const title = data.target.title.value;
      //   const body = data.target.body.value;
      //#Without name we can use 2 way binding, (v-model)
      const newPost = {
        title: this.title,
        body: this.body,
        id: Date.now(),
      };
      this.CREATE_POST(newPost);
    },
  },
```


        
 