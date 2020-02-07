<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

       <h3>B E L A J A R</h3>
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col class="mb-12">
            <v-card class="mx-auto" outlined>
              <!-- <v-card-title>Add Post</v-card-title> -->
              <v-container>
                <!-- <v-form>
                  <v-text-field v-model="post.userId" label="User ID" required hint="Add User ID"></v-text-field>
                  <v-text-field v-model="post.title" label="Title" required hint="Add Post Title" :counter="30"></v-text-field>
                  <v-textarea v-model="post.content" label="Content" required hint="Add Post Content"></v-textarea>
                  <v-btn type="button" v-on:click="addPost" tile color="primary">Submit</v-btn>
                </v-form>
                <br/> -->
                <app-blogs></app-blogs>

              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Blogs from './components/Blogs'

export default {
  name: 'App',

  components: {
    'app-blogs': Blogs
  },

  data: () => ({
    post: {
      userId: '',
      title: '',
      content: ''
    }
  }),

  methods: {
    addPost: function() {
      this.axios.post('https://jsonplaceholder.typicode.com/posts',{
        userId: this.post.userId,
        title: this.post.title,
        blog: this.post.blog
      })
      .then((response) => {
        console.log(response)
      })
    }
  }

};
</script>
