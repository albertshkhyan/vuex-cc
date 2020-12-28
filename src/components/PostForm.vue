<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <form @submit.prevent="handleAddPost">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              name="title"
              required
              type="text"
              class="form-control"
              id="title"
              placeholder="Enter title"
            />
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea
              name="body"
              required
              placeholder="Enter body"
              class="form-control"
              id="body"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Add your post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["CREATE_POST"]), //now we can use CREATE_POST in another method
    /**{
     * mapMutations - returns an object populated with functions
     *  {CREATE_POST: function() {}}
     * } */

    handleAddPost(data) {
      //   console.log("data", data);
      //   console.log("data.target", data.target);
      //   console.log("data.target.title", data.target.title.value);
      //   console.log("data.target.body", data.target.body.value);
      //   console.log("working");
      const title = data.target.title.value;
      const body = data.target.body.value;
      const newPost = {
        title,
        body,
        id: Date.now(),
      };
      console.log("newPost", newPost);
      this.CREATE_POST(newPost);
    },
  },
};
</script>


<style  scoped>
/* .title,
.body {
  min-width: 250px;
}
.title label span {
  margin-right: 15px;
}
.body label span {
  margin-right: 15px;
} */
</style>