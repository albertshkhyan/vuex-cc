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
        async fetchPosts(context, payload) {
            console.log('context of action', context);
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=3"
            );
            const posts = await res.json();
            // console.log('posts', posts);
            //# for change state we must use mutations, for call mustations we use commit
            //## for call GET_ALL_POSTS MUTATION we use commit from store object
            //### 1 argument - type of mutation (mutation function name) - 2. payload
            context.commit("GET_ALL_POSTS", posts)//run mutation

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
    mutations: {
        //#⚠ One important rule to remember is that mutation handlers must be synchronous.
        GET_ALL_POSTS(state, payload) {//{ [type: string]: Function }
            console.log('payload', payload);
            //# For chnage state we must use state paramter: state.someValue = newValue;
            //payload === posts from server
            state.posts = payload;

        }
    },
});
