<template>
    <div class="flex">
        <div class="w-10/12 pe-5">
            <div>
                <h1 class="text-4xl font-bold">Soliding Station</h1>
                <p>
                    The soliding station is a machine that can solidify liquid into minecraft items. It requires energy to operate.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:deepslate'"
                    :slot_2="'minecraft:deepslate'"
                    :slot_3="'minecraft:deepslate'"
                    :slot_4="'minecraft:deepslate'"
                    :slot_5="'minecraft:water_bucket'"
                    :slot_6="'minecraft:deepslate'"
                    :slot_7="'minecraft:deepslate'"
                    :slot_8="'minecraft:deepslate'"
                    :slot_9="'minecraft:deepslate'"
                    :output="'mod:soliding_station'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Usage</h1>
                <p>
                    This machine can solidify liquid into minecraft items. It requires energy to operate.
                </p>
                <p>
                    For recipes, please refer to the <router-link to="/SolidingRecipe" class="text-blue-600">Soliding Recipe</router-link> page.
                </p>
                <p class="mt-3 text-red-500">
                    Note: This machine also require energy(200FE) to operate.
                </p>
            </div>
        </div>
        <div class="w-2/12">
            <img :src="'img/soliding_station.png'" class="bg-gray-500 p-3 rounded">
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