<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/slime_simulation_chamber.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Slime Simulation Chamber</h1>
                <p class="text-justify">
                    The Slime Simulation Chamber is a machine that simulate slime resource dropping. Instead of letting slime jumping around and randomly drop resource, you can use this machine to simulate the slime resource dropping.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:glass_pane'"
                    :slot_2="'minecraft:glass_pane'"
                    :slot_3="'minecraft:glass_pane'"
                    :slot_4="'minecraft:glass_pane'"
                    :slot_5="'minecraft:slime_ball'"
                    :slot_6="'minecraft:glass_pane'"
                    :slot_7="'mod:slimy_grass_block'"
                    :slot_8="'mod:slimy_grass_block'"
                    :slot_9="'mod:slimy_grass_block'"
                    :output="'mod:slime_simulation_chamber'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    It is used to simulate slime resource dropping. Input <router-link to="/SlimeItem" class="text-blue-600">Slime Item</router-link> to the machine and it will simulate the slime resource dropping.
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