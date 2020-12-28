# VueX

## Now implement add post.

### When useing syncronous function.

* how change state (without actions)
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
      console.log("newPost", newPost);
      this.CREATE_POST(newPost);//2
    },
 }

```


        
 