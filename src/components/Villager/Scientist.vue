<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/scientist.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Scientist</h1>
                <p class="text-justify">
                    The scientist is a new profession that added in the mod. The block of the scientist is the DNA Extractor. There is a chance to spawn in Slimy Land Biome Village.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Trading</h1>
                <table class="w-full my-5">
                    <thead>
                    <tr class="bg-gray-50 dark:bg-gray-500">
                        <th class="border border-gray-200">Level</th>
                        <th class="border border-gray-200">Item Wanted (Default Quantity)</th>
                        <th class="border border-gray-200">Price Multiplier</th>
                        <th class="border border-gray-200">Item Given</th>
                        <th class="border border-gray-200">Trades until disabled</th>
                        <th class="border border-gray-200">Experience</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <td class="border border-gray-200" rowspan="4">Novice</td>
                        <VillagerTrade
                            :tier="'Novice'"
                            :itemCost="'mod:dirt_slimeball'"
                            :cost-count="10"
                            :resultItem="'minecraft:emerald'"
                            :resultCount="1"
                            :maxUse="8"
                            :xp="2"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Novice'"
                            :itemCost="'mod:stone_slimeball'"
                            :cost-count="10"
                            :resultItem="'minecraft:emerald'"
                            :resultCount="1"
                            :maxUse="8"
                            :xp="2"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Novice'"
                            :itemCost="'slimeball'"
                            :cost-count="20"
                            :resultItem="'minecraft:emerald'"
                            :resultCount="1"
                            :maxUse="8"
                            :xp="2"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Novice'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="1"
                            :resultItem="'mod:copper_slimeball'"
                            :resultCount="4"
                            :maxUse="8"
                            :xp="1"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <td class="border border-gray-200" rowspan="3">Apprentice</td>
                        <VillagerTrade
                            :tier="'Apprentice'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="1"
                            :resultItem="'mod:energy_slimeball'"
                            :resultCount="4"
                            :maxUse="4"
                            :xp="10"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Apprentice'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="1"
                            :resultItem="'mod:iron_slimeball'"
                            :resultCount="4"
                            :maxUse="4"
                            :xp="10"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Apprentice'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="1"
                            :resultItem="'mod:stone_slimeball'"
                            :resultCount="6"
                            :maxUse="4"
                            :xp="10"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <td class="border border-gray-200" rowspan="3">Journeyman</td>
                        <VillagerTrade
                            :tier="'Journeyman'"
                            :itemCost="'mod:molten_dirt_bucket'"
                            :cost-count="16"
                            :resultItem="'minecraft:emerald'"
                            :resultCount="1"
                            :maxUse="4"
                            :xp="15"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Journeyman'"
                            :itemCost="'mod:molten_stone_bucket'"
                            :cost-count="12"
                            :resultItem="'minecraft:emerald'"
                            :resultCount="1"
                            :maxUse="4"
                            :xp="15"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Journeyman'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="20"
                            :resultItem="'mod:energy_slime_spawn_egg'"
                            :resultCount="1"
                            :maxUse="4"
                            :xp="15"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <td class="border border-gray-200" rowspan="3">Expert</td>
                        <VillagerTrade
                            :tier="'Expert'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="32"
                            :resultItem="'mod:iron_slime_dna'"
                            :resultCount="1"
                            :maxUse="4"
                            :xp="20"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Expert'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="28"
                            :resultItem="'mod:gold_slime_dna'"
                            :resultCount="1"
                            :maxUse="4"
                            :xp="20"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Expert'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="48"
                            :resultItem="'mod:diamond_slime_dna'"
                            :resultCount="1"
                            :maxUse="4"
                            :xp="20"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <td class="border border-gray-200" rowspan="5">Master</td>
                        <VillagerTrade
                            :tier="'Master'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="64"
                            :resultItem="'mod:diamond_slime_spawn_egg'"
                            :resultCount="1"
                            :maxUse="2"
                            :xp="30"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Master'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="40"
                            :resultItem="'mod:gold_slime_spawn_egg'"
                            :resultCount="1"
                            :maxUse="2"
                            :xp="30"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Master'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="48"
                            :resultItem="'mod:iron_slime_spawn_egg'"
                            :resultCount="1"
                            :maxUse="2"
                            :xp="30"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Master'"
                            :itemCost="'minecraft:emerald'"
                            :cost-count="32"
                            :resultItem="'mod:copper_slime_spawn_egg'"
                            :resultCount="1"
                            :maxUse="2"
                            :xp="30"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    <tr class="text-center bg-gray-50 dark:bg-gray-500">
                        <VillagerTrade
                            :tier="'Master'"
                            :itemCost="'mod:dirt_slime_spawn_egg'"
                            :cost-count="1"
                            :resultItem="'minecraft:emerald'"
                            :resultCount="12"
                            :maxUse="2"
                            :xp="30"
                            :priceMultiplier="0.05"
                        />
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import VillagerTrade from "@/components/templates/VillagerTrade.vue";

export default defineComponent({
    components: {VillagerTrade}
})
</script>


<style>

</style>
