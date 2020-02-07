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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, key) in filteredPosts" :key="post.id">
                        <td>{{ key + 1 }}</td>
                        <td v-rainbow>{{ post.title|toCapitalizeFirstWord }}</td>
                        <td>{{ post.body }}</td>
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
                return post.title.match(this.search) || post.body.match(this.search)
            })
        }
    },

    data: function() {
        return {
            posts: [],
            search: ''
        }
    }
    
}
</script>