<template>
    <div>
        <h1>BLOG LIST</h1>
        <v-text-field label="Search..." v-model="search"></v-text-field>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center">No</th>
                        <th class="text-center">Title</th>
                        <th class="text-center">Body</th>
                        <th colspan="2" class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, key) in filteredPosts" :key="post.id" @click="show(post.id)">
                        <td>{{ key + 1 }}</td>
                        <td v-rainbow>{{ post.title|toCapitalizeFirstWord }}</td>
                        <td>{{ post.body }}</td>
                        <td width="5%" class="text-center"><v-btn tile small color="warning">Edit</v-btn></td>
                        <td width="5%" class="text-center"><v-btn tile small light color="red"><span style="color: white;">Delete</span></v-btn></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<style scoped>
    table thead tr th {
        font-size: 14px;
        /* text-align: center; */
    }
</style>

<script>
export default {

    name: 'Blogs',

    mounted: function() {
        this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.posts = response.data
        })
    },

    computed: {
        filteredPosts: function() {
            return this.posts.filter(post => {
                return post.title.match(this.search.toLowerCase()) || post.body.match(this.search)
            })
        }
    },

    data: function() {
        return {
            posts: [],
            search: ''
        }
    },

    methods: {
        show: function(id) {
            alert(id);
        }
    }
    
}
</script>