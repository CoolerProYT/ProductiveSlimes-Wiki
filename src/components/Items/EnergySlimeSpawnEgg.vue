<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/Energy_Slime_Spawn_Egg.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded w-full md:w-auto">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Energy Slime Spawn Egg</h1>
                <p class="text-justify">
                    Energy Slime Spawn Egg is an item added by the mod. It is used to spawn Energy Slime.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:redstone'"
                    :slot_2="'minecraft:slime_ball'"
                    :slot_3="'minecraft:redstone'"
                    :slot_4="'minecraft:slime_ball'"
                    :slot_5="'minecraft:egg'"
                    :slot_6="'minecraft:slime_ball'"
                    :slot_7="'minecraft:redstone'"
                    :slot_8="'minecraft:slime_ball'"
                    :slot_9="'minecraft:redstone'"
                    :output="'mod:energy_slime_spawn_egg'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    Right-clicking on the ground with Energy Slime Spawn Egg will spawn Energy Slime.
                </p>
                <p class="text-justify">
                    Energy Slime will <b>drop energy slimeballs every 2000 ticks</b>.
                </p>
                <p class="mt-3">
                    Slime ball drop amount is affected by size of Energy Slime.
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