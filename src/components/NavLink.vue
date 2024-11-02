<template>
    <router-link
        :to="path"
        class="py-3"
        :class="{'text-blue-600': $route.path.startsWith(path),'text-gray-100 hover:text-gray-400': !$route.path.startsWith(path)}">
        {{ text }}
    </router-link>
</template>

<script>
export default {
    props: ['path', 'text']
}
</script>

<style>

</style>