<template>
    <div class="flex">
        <div class="w-10/12 pe-5">
            <div>
                <h1 class="text-4xl font-bold">Guidebook</h1>
                <p>
                    Guidebook is a book that contains information about the mod.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Obtaining</h1>
                <p>It can accept any variant of slimeballs.</p>
                <p>It is a shapeless recipe.</p>
                <CraftingGui
                    :slot_1="'minecraft:slime_ball'"
                    :slot_2="'minecraft:book'"
                    :slot_3="''"
                    :slot_4="''"
                    :slot_5="''"
                    :slot_6="''"
                    :slot_7="''"
                    :slot_8="''"
                    :slot_9="''"
                    :output="'mod:guidebook'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Usage</h1>
                <p>
                    Right-click to open the guidebook.
                </p>
            </div>
        </div>
        <div class="w-2/12">
            <img :src="'img/guidebook.png'" class="bg-gray-500 p-3 rounded">
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