<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/slimeball_fragment.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Slimeball Fragment</h1>
                <p class="text-justify">
                    Slimeball Fragment is an item that can be crafted from a slimeball. It can be used to craft a slimeball.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <p class="text-justify">It can accept vanilla slimeball only.</p>
                <p class="text-justify">It is a shapeless recipe.</p>
                <CraftingGui
                    :slot_1="'minecraft:slime_ball'"
                    :slot_2="''"
                    :slot_3="''"
                    :slot_4="''"
                    :slot_5="''"
                    :slot_6="''"
                    :slot_7="''"
                    :slot_8="''"
                    :slot_9="''"
                    :output="'mod:slimeball_fragment'"
                    :output_count="4"
                />
                <p class="text-justify">Other than crafting from a slimeball, it also obtainable by <router-link to="/SqueezingRecipe" class="text-blue-600">Squeezing Recipe</router-link>.</p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">It is a shaped recipe.</p>
                <CraftingGui
                    :slot_1="'mod:slimeball_fragment'"
                    :slot_2="'mod:slimeball_fragment'"
                    :slot_3="''"
                    :slot_4="'mod:slimeball_fragment'"
                    :slot_5="'mod:slimeball_fragment'"
                    :slot_6="''"
                    :slot_7="''"
                    :slot_8="''"
                    :slot_9="''"
                    :output="'minecraft:slime_ball'"
                    :output_count="1"
                />
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