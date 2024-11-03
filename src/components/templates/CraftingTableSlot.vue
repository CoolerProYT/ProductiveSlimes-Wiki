<template>
    <div class="relative  w-10 h-10 xs:h-12 xs:w-12 md:w-16 md:h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
        <div class="bucket-container relative">
            <img v-if="item.startsWith('minecraft:')"
                 :src="item.includes('mud') ? 'img/mud.webp' : 'https://minecraft-api.vercel.app/images/items/' + item.replaceAll('minecraft:','') + '.png'"
                 class="w-full h-full object-contain"
            >
            <img v-else-if="item === 'slimeball'"
                    :src="'https://minecraft-api.vercel.app/images/items/slime_ball.png'"
                    class="w-full h-full object-contain"
            >
            <img v-else-if="item.includes('_slimeball')"
                 :src="'img/template_slimeball.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('_slime_block')"
                 :src="'img/template_slime_block.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('slime_dna')"
                 :src="'img/template_dna.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('_slime_spawn_egg')"
                 :src="'img/template_spawn_egg_bg.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('_bucket') && item.includes('molten_')"
                 :src="'img/empty_bucket.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item !== ''"
                 :src="'img/' + item.replaceAll('mod:', '') + '.png'"
                 class="w-full h-full object-contain">

            <img v-if="item.includes('_bucket') && item.includes('molten_')"
                 :src="'img/bucket_fluid.png'"
                 class="w-full h-full object-contain bucket absolute top-1">
            <img v-if="item.includes('_slime_spawn_egg')"
                 :src="'img/template_spawn_egg_hl.png'"
                 class="w-full h-full object-contain top-0 absolute">

            <!-- Tint -->
            <div v-if="item.includes('_slimeball')" class="absolute inset-0 tint-slimeball" :style="{backgroundColor: color}"></div>
            <div v-if="item.includes('_slime_block')" class="absolute inset-0 tint-slimeblock" :style="{backgroundColor: color}"></div>
            <div v-if="item.includes('slime_dna')" class="absolute inset-0 tint-dna" :style="{backgroundColor: color}"></div>

            <div v-if="item.includes('_slime_spawn_egg')" class="absolute inset-0 tint-egg-bg" :style="{backgroundColor: bg}"></div>
            <div v-if="item.includes('_slime_spawn_egg')" class="absolute inset-0 tint-egg-hl" :style="{backgroundColor: hl}"></div>

            <div v-if="item.includes('_bucket') && item.includes('molten_')" class="absolute inset-0 tint-fluid top-1" :style="{backgroundColor: color}"></div>
            <div v-if="item.includes('_bucket') && item.includes('molten_')" class="absolute inset-x-6 inset-y-3 xs:inset-x-8 xs:inset-y-5 md:inset-x-10 md:inset-y-7">
                <p class="text-xl xs:text-2xl md:text-4xl minecraft-font">{{ output_count }}</p>
            </div>

            <!-- Output Count -->
            <div v-if="output_count != null" class="absolute inset-x-6 inset-y-3 xs:inset-x-8 xs:inset-y-5 md:inset-x-10 md:inset-y-7">
                <p class="text-xl xs:text-2xl md:text-4xl minecraft-font">{{ output_count }}</p>
            </div>

            <!-- Tooltip -->
            <div v-if="item !== ''" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                <p>{{ item.replaceAll('minecraft:', '').replaceAll('mod:', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    props: ['item', 'output_count'],
    data() {
        return {
            color: '#FFFFFF',
            bg: '#FFFFFF',
            hl: '#FFFFFF'
        }
    },
    watch: {
        item() {
            this.getColor();
        }
    },
    mounted() {
        this.getColor();
    },
    methods: {
        getColor() {
            if (this.item.includes('_slimeball') || this.item.includes('slime_dna')) {
                d3.csv("data/items.csv").then(data => {
                    const item = data.find(item => item.item_name === this.item.replaceAll('mod:', ''));
                    this.color = item.color;
                });
            }

            if (this.item.includes('_slime_block')) {
                d3.csv("data/blocks.csv").then(data => {
                    const item = data.find(item => item.block_name === this.item.replaceAll('mod:', ''));
                    this.color = item.color;
                });
            }

            if (this.item.includes('_slime_spawn_egg')) {
                d3.csv("data/spawn_egg.csv").then(data => {
                    const item = data.find(item => item.name === this.item.replaceAll('mod:', ''));
                    this.bg = item.background_color;
                    this.hl = item.highlight_color;
                });
            }

            if (this.item.includes('_bucket') && this.item.includes('molten_')) {
                d3.csv("data/bucket.csv").then(data => {
                    const item = data.find(item => item.molten_bucket_item === this.item.replaceAll('mod:', ''));
                    this.color = item.color_code;
                });
            }
        }
    }
}
</script>

<style>

</style>