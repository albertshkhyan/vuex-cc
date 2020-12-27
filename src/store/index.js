import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//after register vuex in vue as plugin, we create object configuaration for vuex.
export default new Vuex.Store({
    state: {
        posts: [
            // {
            //     "userId": 1,
            //     "id": 1,
            //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            // }
        ]
    },
    actions: {
        async fetchPosts() {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=3"
            );
            const posts = await res.json();
            console.log('posts', posts);
        }
    },
    getters: {
        getAllPosts(state, getters) {//getter as firts paramter by default get state
            // console.log('getters', getters);//show list of getters - {getAllPosts: Array(0)}
            // console.log('state', state);//{__ob__: Observer}
            // console.log('state', state.posts);
            return state.posts;
        }
    },
    mutations: {},
});
