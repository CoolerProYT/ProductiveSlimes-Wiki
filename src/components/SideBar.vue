<template>
    <div class="bg-gray-100 dark:bg-gray-700 p-3 shadow dark:shadow-gray-950 md:fixed rounded w-full md:w-[23%] lg:w-[19%] xl:w-[13%] mb-5 md:mb-0">
        <h1 class="font-bold text-2xl">Navigation <span class="md:hidden navToggle">&#11167;</span><span class="md:hidden navToggle hidden">&#11165;</span></h1>
        <ul id="nav">
            <li>
                <NavLink path="/Home" text="Home" class="font-bold" />
            </li>

            <p id="blockToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': blocks.includes($route.path),'dark:text-gray-100 dark:hover:text-gray-400': !blocks.includes($route.path)}">Blocks</p>
            <ul id="block" :style="{display: blocks.includes($route.path) ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/Cable" text="Cable" />
                </li>
                <li>
                    <NavLink path="/DnaExtractor" text="DNA Extractor" />
                </li>
                <li>
                    <NavLink path="/DnaSynthesizer" text="DNA Synthesizer" />
                </li>
                <li>
                    <NavLink path="/EnergyGenerator" text="Energy Generator" />
                </li>
                <li>
                    <NavLink path="/FluidTank" text="Fluid Tank" />
                </li>
                <li>
                    <NavLink path="/MeltingStation" text="Melting Station" />
                </li>
                <li>
                    <NavLink path="/SolidingStation" text="Soliding Station" />
                </li>
            </ul>

            <li>
                <NavLink path="/Config" text="Config" class="font-bold" />
            </li>

            <p id="entityToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': items.includes($route.path),'dark:text-gray-100 dark:hover:text-gray-400': !items.includes($route.path)}">Entities</p>
            <ul id="entity" :style="{display: items.includes($route.path) ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/Slime" text="Slimes" />
                </li>
            </ul>

            <p id="itemToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': items.includes($route.path),'dark:text-gray-100 dark:hover:text-gray-400': !items.includes($route.path)}">Items</p>
            <ul id="item" :style="{display: items.includes($route.path) ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/EnergyMultiplierUpgrade" text="Energy Multiplier Upgrade" />
                </li>
                <li>
                    <NavLink path="/EnergySlimeSpawnEgg" text="Energy Slime Spawn Egg" />
                </li>
                <li>
                    <NavLink path="/Guidebook" text="Guidebook" />
                </li>
            </ul>

            <p id="recipeToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': $route.path.endsWith('Recipe'),'dark:text-gray-100 dark:hover:text-gray-400': !$route.path.endsWith('Recipe')}">Recipe Types</p>
            <ul id="recipe" :style="{display: $route.path.endsWith('Recipe') ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/DnaExtractingRecipe" text="DNA Extracting Recipe" />
                </li>
                <li>
                    <NavLink path="/DnaSynthesizingRecipe" text="DNA Synthesizing Recipe" />
                </li>
                <li>
                    <NavLink path="/MeltingRecipe" text="Melting Recipe" />
                </li>
                <li>
                    <NavLink path="/SolidingRecipe" text="Soliding Recipe" />
                </li>
            </ul>

            <p id="villagerToggle" class="cursor-pointer font-bold"
               :class="{'text-blue-600': villagers.includes($route.path),'dark:text-gray-100 dark:hover:text-gray-400': !villagers.includes($route.path)}">Villagers</p>
            <ul id="villager" :style="{display: villagers.includes($route.path) ? 'block' : 'none'}" class="ms-2">
                <li>
                    <NavLink path="/Scientist" text="Scientist" />
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
            items: ['/EnergySlimeSpawnEgg', '/EnergyMultiplierUpgrade', '/Guidebook'],
            villagers: ['/Scientist'],
            size: 0
        };
    },
    mounted() {
        this.size = window.innerWidth;
        $(window).resize(() => {
            if (this.size !== window.innerWidth) {
                this.size = window.innerWidth;
                if (this.size >= 768) {
                    $("#nav").show();
                }
                else {
                    $("#nav").hide();
                    if ($(".navToggle")[0].classList.contains("hidden")) {
                        $(".navToggle").toggleClass("hidden");
                    }
                }
            }
        });

        if (this.size < 768) {
            $("#nav").hide();
        }

        $(".navToggle").click(function() {
            $("#nav").slideToggle();
            $(".navToggle").toggleClass("hidden");
        });
        $("#recipeToggle").click(function() {
            $("#recipe").slideToggle();
        });
        $("#blockToggle").click(function() {
            $("#block").slideToggle();
        });
        $("#itemToggle").click(function() {
            $("#item").slideToggle();
        });
        $("#entityToggle").click(function() {
            $("#entity").slideToggle();
        });
        $("#villagerToggle").click(function() {
            $("#villager").slideToggle();
        });
    }
}
</script>

<style>

</style>