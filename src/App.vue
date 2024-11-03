<template>
    <NavBar />

    <div class="px-4 lg:px-0 lg:w-10/12 mx-auto py-6 md:flex justify-between">
        <!-- Sidebar with sticky positioning -->
        <div class="md:w-3/12 xl:w-2/12 px-2 md:px-0 sticky top-20 md:top-0 md:relative h-fit z-50">
            <SideBar />
        </div>
        <!-- Main content with overflow control -->
        <div class="md:w-9/12 xl:w-10/12 mx-2 md:mx-0 md:ms-2 py-5 px-2 md:px-8 bg-gray-100 dark:bg-gray-700 rounded shadow dark:shadow-gray-950 overflow-y-auto max-h-[80vh] md:max-h-none">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
    components: {
        NavBar,
        SideBar
    },
    data() {
        return {
            theme: localStorage.getItem('theme') || 'light',
        };
    },
    mounted() {
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }
};
</script>

<style>

</style>
