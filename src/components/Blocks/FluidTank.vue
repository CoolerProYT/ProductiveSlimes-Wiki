<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/fluid_tank.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Fluid Tank</h1>
                <p class="text-justify">
                    Fluid Tank is a block that can store fluid.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <p>
                    <span class="text-red-500">Recipe unavailable in 1.2.0 (Will be fixed in 1.2.1)</span>
                </p>
                <CraftingGui
                    :slot_1="''"
                    :slot_2="''"
                    :slot_3="''"
                    :slot_4="''"
                    :slot_5="''"
                    :slot_6="''"
                    :slot_7="''"
                    :slot_8="''"
                    :slot_9="''"
                    :output="'mod:fluid_tank'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    Fluid Tank can store fluid. Right-click the Fluid Tank with a bucket to fill the tank with fluid. Right-click the Fluid Tank with an empty bucket to empty the tank.
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