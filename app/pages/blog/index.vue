<template>
    <div class="container">
        <h1>我的博客</h1>

        <ul>
            <li v-for="post in posts" :key="post.slug">
                <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('blog').find()
)
</script>