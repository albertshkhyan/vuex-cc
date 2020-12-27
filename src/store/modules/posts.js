export default {
    state: {
        posts: []
    },
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
    getters: {
        getAllPosts(state, getters) {
            return state.posts;
        },
        countOfPosts(state) {
            return state.posts.length;
        }
    },
    mutations: {
        GET_ALL_POSTS(state, payload) {
            state.posts = payload;

        }
    },
}