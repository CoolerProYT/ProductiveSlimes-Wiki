<template>
    <div class="dark:bg-gray-700 p-3 shadow shadow-gray-950 rounded fixed w-[13%]">
        <h1 class="font-bold text-2xl">Navigation</h1>
        <ul>
            <li>
                <NavLink path="/Home" text="Home" class="font-bold" />
            </li>

            <p id="blockToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': blocks.includes($route.path),'dark:text-gray-100 dark:hover:text-gray-400': !blocks.includes($route.path)}">Blocks</p>
            <ul id="block" :style="{display: blocks.includes($route.path) ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/MeltingStation" text="Melting Station" />
                </li>
                <li>
                    <NavLink path="/SolidingStation" text="Soliding Station" />
                </li>
                <li>
                    <NavLink path="/EnergyGenerator" text="Energy Generator" />
                </li>
                <li>
                    <NavLink path="/Cable" text="Cable" />
                </li>
                <li>
                    <NavLink path="/DnaExtractor" text="DNA Extractor" />
                </li>
                <li>
                    <NavLink path="/DnaSynthesizer" text="DNA Synthesizer" />
                </li>
            </ul>

            <p id="itemToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': items.includes($route.path),'dark:text-gray-100 dark:hover:text-gray-400': !items.includes($route.path)}">Items</p>
            <ul id="item" :style="{display: items.includes($route.path) ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/EnergySlimeSpawnEgg" text="Energy Slime Spawn Egg" />
                </li>
                <li>
                    <NavLink path="/EnergyMultiplierUpgrade" text="Energy Multiplier Upgrade" />
                </li>
                <li>
                    <NavLink path="/Guidebook" text="Guidebook" />
                </li>
            </ul>

            <p id="recipeToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': $route.path.endsWith('Recipe'),'dark:text-gray-100 dark:hover:text-gray-400': !$route.path.endsWith('Recipe')}">Recipe Types</p>
            <ul id="recipe" :style="{display: $route.path.endsWith('Recipe') ? 'block' : 'none'}" class="ms-2">
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
        </ul>
    </div>
</template>

<script>
import NavLink from "@/components/templates/NavLink.vue";
import $ from "jquery";

export default {
    components: {
        NavLink
    },
    data() {
        return {
            blocks: ['/MeltingStation', '/SolidingStation', '/EnergyGenerator', '/Cable', '/DnaExtractor', '/DnaSynthesizer'],
            items: ['/EnergySlimeSpawnEgg', '/EnergyMultiplierUpgrade', '/Guidebook']
        };
    },
    mounted() {
        $("#recipeToggle").click(function() {
            $("#recipe").slideToggle();
        });
        $("#blockToggle").click(function() {
            $("#block").slideToggle();
        });
        $("#itemToggle").click(function() {
            $("#item").slideToggle();
        });
    }
}
</script>

<style>

</style>