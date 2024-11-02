<template>
    <div class="bg-gray-700 p-3 shadow shadow-gray-950">
        <h1 class="font-bold text-2xl">Navigation</h1>
        <ul>
            <li>
                <NavLink path="/Home" text="Home" />
            </li>
            <li>
                <NavLink path="/MeltingRecipe" text="Melting Recipe" />
            </li>
            <li>
                <NavLink path="/SolidingRecipe" text="Soliding Recipe" />
            </li>
            <li>
                <NavLink path="/DnaExtractingRecipe" text="DNA Extracting Recipe" />
            </li>
            <li>
                <NavLink path="/DnaSynthesizingRecipe" text="DNA Synthesizing Recipe" />
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