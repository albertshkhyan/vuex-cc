<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <form @submit.prevent="handleAddPost">
          <div class="form-group">
            <label for="title">Title</label>
            <!--give or set value -> v-model="title" -->
            <input
              v-model="title"
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
              v-model="body"
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
  data() {
    return {
      //   title: "hello",//set value with v-model="title"
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["CREATE_POST"]), //now we can use CREATE_POST in another method
    /**{
     * mapMutations - returns an object populated with functions
     *  {CREATE_POST: function() {}}
     * } */
    //# For work with 2 way binding we must create thate field whcih given v-model in data.

    handleAddPost(data) {
      //   const title = data.target.title.value;
      //   const body = data.target.body.value;
      //#Without name we can use 2 way binding, (v-model)
      const newPost = {
        title: this.title,
        body: this.body,
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