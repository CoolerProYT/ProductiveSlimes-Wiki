<template>
    <div class="flex">
        <div class="w-10/12 pe-5">
            <div>
                <h1 class="text-4xl font-bold">Cable</h1>
                <p>
                    Cable is a block that can transfer energy from energy generator to other blocks that cab receive energy.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="''"
                    :slot_2="'minecraft:redstone'"
                    :slot_3="''"
                    :slot_4="'minecraft:redstone'"
                    :slot_5="'minecraft:copper_ingot'"
                    :slot_6="'minecraft:redstone'"
                    :slot_7="''"
                    :slot_8="'minecraft:redstone'"
                    :slot_9="''"
                    :output="'mod:cable'"
                    :output_count="8"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Usage</h1>
                <p>
                    Cable can transfer energy from energy generator to other blocks that can receive energy.
                </p>
            </div>
        </div>
        <div class="w-2/12">
            <img :src="'img/cable.png'" class="bg-gray-500 p-3 rounded">
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