<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/template_slime.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Slime item</h1>
                <p class="text-justify">
                    Slime Item is an item version of Slime which can let you to put it in to <router-link to="/SlimeSimulationChamber" class="text-blue-600">Slime Simulation Chamber</router-link>
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <p>Shift+Right-Click any slimes (Except Vanilla Slime) to obtain an <code>Slime Item</code>.</p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    Simulate the slime resources dropping in the <router-link to="/SlimeSimulationChamber" class="text-blue-600">Slime Simulation Chamber</router-link>.
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