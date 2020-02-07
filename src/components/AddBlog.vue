<template>
    <v-form>
        <v-text-field v-model="post.userId" label="User ID" required hint="Add User ID"></v-text-field>
        <v-text-field v-model="post.title" label="Title" required hint="Add Post Title" :counter="30"></v-text-field>
        <v-textarea v-model="post.content" label="Content" required hint="Add Post Content"></v-textarea>
        <v-btn type="button" v-on:click="addPost" tile color="primary">Submit</v-btn>
    </v-form>
</template>

<script>
export default {
    name: 'addBlog'
}
</script>