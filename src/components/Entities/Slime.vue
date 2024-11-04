<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/template_slime.png'" class="bg-gray-50 dark:bg-gray-500 p-3 rounded">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div class="my-5">
                <h1 class="text-2xl md:text-4xl font-bold">Slimes</h1>
                <p class="text-justify">
                    There are many variants of slimes in this mod, they all have different slimeball drops with amount based on their size.
                    Use growth item to make them bigger, maximum size is 4.
                </p>
            </div>

            <table class="border">
                <thead>
                <tr class="border">
                    <th class="border px-5">Slime</th>
                    <th class="border px-5">Cooldown (Ticks)</th>
                    <th class="border px-5">Growth Item</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="s in slime" :key="s.id">
                    <td class="flex items-center border px-5">
                        <div class="relative w-16 h-16">
                            <img class="w-full h-full object-contain" :src="'img/template_slime.png'">
                            <div class="absolute inset-0 tint-slime" :style="{backgroundColor: s.color}"></div>
                        </div>
                        <span class="ps-3 whitespace-nowrap">{{ s.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</span>
                    </td>
                    <td class="text-center border px-5">{{ s.cooldown }}</td>
                    <td class="flex border px-5 items-center">
                        <div class="relative w-16 h-16">
                            <img v-if="s.growth_item !== 'mud' && s.growth_item !== 'energy_slime_block'" :src="'https://minecraft-api.vercel.app/images/items/' + s.growth_item +'.png'"
                                 class="w-full h-full object-contain"
                            >
                            <img v-else-if="s.growth_item === 'energy_slime_block'" :src="'img/template_slime_block.png'"
                                 class="w-full h-full object-contain"
                            >
                            <img v-else :src="'img/mud.webp'"
                                 class="w-full h-full object-contain"
                            >
                            <div v-if="s.growth_item === 'energy_slime_block'" class="absolute inset-0 tint-slime" :style="{backgroundColor: s.color}"></div>
                        </div>
                        <span class="ps-3 whitespace-nowrap">
                            {{ s.growth_item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    data(){
        return {
            slime: null
        }
    },
    mounted() {
        d3.csv('data/entity.csv').then(data => {
            this.slime = data;
        })
    }
}
</script>

<style>

</style>