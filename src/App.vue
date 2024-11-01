<template>
    <NavBar />

    <div class="w-10/12 mx-auto py-6 flex">
        <div class="w-2/12">
            <SideBar />
        </div>
        <div class="w-10/12 py-3 px-8">
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
