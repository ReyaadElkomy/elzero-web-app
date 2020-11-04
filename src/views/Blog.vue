<template>
    <div class="blog">
        <h1>{{ pageName }}</h1>

        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <!--  -->
                        <BlogPosts 
                            v-for="post in posts" 
                            :key="post.id"
                            :views="post.views" 
                            :date="post.date"
                            :title="post.title"
                            :content="post.content"
                            :auther="post.auther"
                            :category="post.category"
                             />
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="sidebar">
                        <!--  -->
                        <SidebarWedgets />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import SidebarWedgets from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/blog_posts.json"

export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDescription: "This is Blog page with Vue.js", 
            posts: JsonPosts
        };
    },
    name: "Blog",
    components: {
        BlogPosts, 
        SidebarWedgets
    }
};
</script>

<style scoped>

</style>
