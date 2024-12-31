<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/slime_nest_speed_upgrade_1.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Simulation Chamber Speed Upgrade 1</h1>
                <p class="text-justify">
                    Simulation Chamber Speed Upgrade 1 is an upgrade for the <router-link to="/SlimeSimulationChamber" class="text-blue-600">Slime Simulation Chamber</router-link> which can increase the speed of the simulation process.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:redstone_block'"
                    :slot_2="'mod:iron_slime_block'"
                    :slot_3="'minecraft:redstone_block'"
                    :slot_4="'mod:iron_slime_block'"
                    :slot_5="'minecraft:iron_ingot'"
                    :slot_6="'mod:iron_slime_block'"
                    :slot_7="'minecraft:redstone_block'"
                    :slot_8="'mod:iron_slime_block'"
                    :slot_9="'minecraft:redstone_block'"
                    :output="'mod:slime_nest_speed_upgrade_1'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    Use the upgrade in the <router-link to="/SlimeSimulationChamber" class="text-blue-600">Slime Simulation Chamber</router-link> to increase the speed of the simulation process.
                </p>
                <p class="text-justify">
                    It increase the process by 1.5x.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import CraftingGui from "@/components/templates/CraftingGui.vue";

export default defineComponent({
    components: {CraftingGui}
})
</script>

<style>

</style>