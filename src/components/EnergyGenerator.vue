<template>
    <div class="flex">
        <div class="w-10/12 pe-5">
            <div>
                <h1 class="text-4xl font-bold">Energy Generator</h1>
                <p>
                    Energy Generator is a machine that can generate energy from energy slimeball.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:redstone'"
                    :slot_2="'mod:energy_slimeball'"
                    :slot_3="'minecraft:redstone'"
                    :slot_4="'mod:energy_slimeball'"
                    :slot_5="'minecraft:copper_block'"
                    :slot_6="'mod:energy_slimeball'"
                    :slot_7="'minecraft:redstone'"
                    :slot_8="'mod:energy_slimeball'"
                    :slot_9="'minecraft:redstone'"
                    :output="'mod:energy_generator'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Usage</h1>
                <p>
                    Energy Generator can generate energy from energy slimeball or energy slime block.
                </p>
                <p>
                    Energy multiplier upgrade can increase the energy output.
                </p>
            </div>
        </div>
        <div class="w-2/12">
            <img :src="'img/energy_generator.png'" class="bg-gray-500 p-3 rounded">
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