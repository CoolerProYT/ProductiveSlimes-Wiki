<template>
    <div class="flex">
        <div class="w-10/12 pe-5">
            <div>
                <h1 class="text-4xl font-bold">Energy Multiplier Upgrade</h1>
                <p>
                    Energy Multiplier Upgrade is an item that can be used to increase the energy multiplier of the energy generator.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Obtaining</h1>
                <CraftingGui
                    :slot_1="'minecraft:iron_ingot'"
                    :slot_2="'mod:energy_slimeball'"
                    :slot_3="'minecraft:iron_ingot'"
                    :slot_4="'mod:energy_slimeball'"
                    :slot_5="'minecraft:blue_wool'"
                    :slot_6="'mod:energy_slimeball'"
                    :slot_7="'minecraft:iron_ingot'"
                    :slot_8="'mod:energy_slimeball'"
                    :slot_9="'minecraft:iron_ingot'"
                    :output="'mod:energy_multiplier_upgrade'"
                    :output_count="1"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-3xl font-bold">Usage</h1>
                <p>
                    Energy Multiplier Upgrade can be used to increase the energy multiplier of the <router-link to="/EnergyGenerator" class="text-blue-600">Energy Generator</router-link>.
                    An Energy Generator can have a maximum of 4 Energy Multiplier Upgrades.
                </p>
                <table class="mt-3">
                    <thead>
                    <tr>
                        <th class="border border-gray-400 px-2 py-1">Energy Multiplier Upgrade Count</th>
                        <th class="border border-gray-400 px-2 py-1">Multiplier (per tick)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="border border-gray-400 px-2 py-1">0</td>
                        <td class="border border-gray-400 px-2 py-1">x1</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-2 py-1">1</td>
                        <td class="border border-gray-400 px-2 py-1">x5</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-2 py-1">2</td>
                        <td class="border border-gray-400 px-2 py-1">x10</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-2 py-1">3</td>
                        <td class="border border-gray-400 px-2 py-1">x20</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-400 px-2 py-1">4</td>
                        <td class="border border-gray-400 px-2 py-1">x40</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="w-2/12">
            <img :src="'img/energy_multiplier_upgrade.png'" class="bg-gray-500 p-3 rounded">
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