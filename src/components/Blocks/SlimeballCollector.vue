<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/slimeball_collector.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Slimeball Collector</h1>
                <p class="text-justify">
                   The Slimeball Collector will collect dropped slimeball in 16x16 area.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:iron_ingot'"
                    :slot_2="'minecraft:hopper'"
                    :slot_3="'minecraft:iron_ingot'"
                    :slot_4="'minecraft:hopper'"
                    :slot_5="'minecraft:chest'"
                    :slot_6="'minecraft:hopper'"
                    :slot_7="'minecraft:iron_ingot'"
                    :slot_8="'minecraft:hopper'"
                    :slot_9="'minecraft:iron_ingot'"
                    :output="'mod:slimeball_collector'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    The Slimeball Collector will collect dropped slimeball in 16x16 area. There is a button in the Screen to let you toggle the collection area.
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