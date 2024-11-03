<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/dna_extractor.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">DNA Extractor</h1>
                <p class="text-justify">
                    DNA Extractor is a machine that can extract DNA from slimeballs.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:iron_ingot'"
                    :slot_2="'minecraft:iron_ingot'"
                    :slot_3="'minecraft:iron_ingot'"
                    :slot_4="'minecraft:iron_ingot'"
                    :slot_5="'minecraft:glass'"
                    :slot_6="'minecraft:iron_ingot'"
                    :slot_7="'minecraft:iron_ingot'"
                    :slot_8="'mod:energy_slimeball'"
                    :slot_9="'minecraft:iron_ingot'"
                    :output="'mod:dna_extractor'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    DNA Extractor can extract DNA from slimeballs.
                </p>
                <p class="text-justify">
                    For recipes, please refer to the <router-link to="/DnaExtractingRecipe" class="text-blue-600">DNA Extracting Recipe</router-link> page.
                </p>
                <p class="mt-3 text-red-500">
                    Note: This machine also require energy (400FE) to operate.
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