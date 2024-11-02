<template>
    <div class="flex">
        <div class="w-10/12 pe-5">
            <div>
                <h1 class="text-4xl font-bold">DNA Synthesizer</h1>
                <p>
                    DNA Synthesizer is a machine that can synthesize DNA from DNA Extractor to create slime spawn eggs.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:iron_ingot'"
                    :slot_2="'minecraft:iron_ingot'"
                    :slot_3="'minecraft:iron_ingot'"
                    :slot_4="'minecraft:glass'"
                    :slot_5="'minecraft:glass'"
                    :slot_6="'minecraft:glass'"
                    :slot_7="'minecraft:iron_ingot'"
                    :slot_8="'mod:energy_slimeball'"
                    :slot_9="'minecraft:iron_ingot'"
                    :output="'mod:dna_synthesizer'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Usage</h1>
                <p>
                    DNA Synthesizer is used to synthesize DNA from DNA Extractor to create slime spawn eggs.
                </p>
                <p>
                    For recipes, please refer to the <router-link to="/DnaSynthesizingRecipe" class="text-blue-600">DNA Synthesizing Recipe</router-link> page.
                </p>
                <p class="mt-3 text-red-500">
                    Note: This machine also require energy(600FE) to operate.
                </p>
            </div>
        </div>
        <div class="w-2/12">
            <img :src="'img/dna_synthesizer.png'" class="bg-gray-500 p-3 rounded">
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