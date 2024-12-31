<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/slime_squeezer.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Slime Squeezer</h1>
                <p class="text-justify">
                    The Slime Squeezer is a machine that turn <code>Slimy Blocks</code> into vanilla Blocks and a <router-link to="/SlimeballFragment" class="text-blue-600">Slimeball Fragment</router-link>
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <p>Note: <code>Slimy Stone</code> only obtainable above v1.4.1. On v1.4.0 there is no way to obtain <code>Slimy Stone</code>, it is a bug.</p>
                <CraftingGui
                    :slot_1="'mod:slimy_stone'"
                    :slot_2="'mod:squeezer'"
                    :slot_3="'mod:slimy_stone'"
                    :slot_4="'mod:energy_slimeball'"
                    :slot_5="''"
                    :slot_6="''"
                    :slot_7="'mod:slimy_stone'"
                    :slot_8="'mod:slimy_stone'"
                    :slot_9="'mod:slimy_stone'"
                    :output="'mod:slime_squeezer'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    Squeeze blocks into vanilla blocks and a <router-link to="/SlimeballFragment" class="text-blue-600">Slimeball Fragment</router-link>.
                </p>
                <p class="text-justify">
                    For recipes, please refer to the <router-link to="/SqueezingRecipe" class="text-blue-600">Squeezing Recipe</router-link> page.
                </p>
                <p class="mt-3 text-red-500 text-justify">
                    Note: This machine also require energy (300FE) to operate.
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