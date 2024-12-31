<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/squeezer.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Squeezer</h1>
                <p class="text-justify">
                    Squeezer is use to craft <router-link to="/SlimeSqueezer" class="text-blue-600">Slime Squeezer</router-link>.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="''"
                    :slot_2="'mod:slimy_planks'"
                    :slot_3="''"
                    :slot_4="''"
                    :slot_5="'mod:slimy_planks'"
                    :slot_6="''"
                    :slot_7="'mod:slimy_planks'"
                    :slot_8="'mod:slimy_planks'"
                    :slot_9="'mod:slimy_planks'"
                    :output="'mod:squeezer'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Usage</h1>
                <p class="text-justify">
                    This item is used to craft <router-link to="/SlimeSqueezer" class="text-blue-600">Slime Squeezer</router-link>.
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