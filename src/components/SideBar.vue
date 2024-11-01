<template>
    <div class="bg-gray-700 p-3 shadow shadow-gray-950">
        <h1 class="font-bold text-2xl">Navigation</h1>
        <ul>
            <li>
                <NavLink path="/Home" text="Home" />
            </li>
        </ul>
    </div>
</template>

<script>
import NavLink from "@/components/NavLink.vue";

export default {
    components: {
        NavLink
    }
}
</script>

<style>

</style>