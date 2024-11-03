<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/melting_station.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Melting Station</h1>
                <p class="text-justify">
                    The melting station is a machine that can melt slime blocks into liquid form. Bucket is required for each melting process.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:deepslate'"
                    :slot_2="'minecraft:deepslate'"
                    :slot_3="'minecraft:deepslate'"
                    :slot_4="'minecraft:deepslate'"
                    :slot_5="'minecraft:lava_bucket'"
                    :slot_6="'minecraft:deepslate'"
                    :slot_7="'minecraft:deepslate'"
                    :slot_8="'minecraft:deepslate'"
                    :slot_9="'minecraft:deepslate'"
                    :output="'mod:melting_station'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    This machine can melt slime blocks into liquid form. Bucket is required for each melting process.
                </p>
                <p class="text-justify">
                    For recipes, please refer to the <router-link to="/MeltingRecipe" class="text-blue-600">Melting Recipe</router-link> page.
                </p>
                <p class="mt-3 text-red-500">
                    Note: This machine also require energy (200FE) to operate.
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