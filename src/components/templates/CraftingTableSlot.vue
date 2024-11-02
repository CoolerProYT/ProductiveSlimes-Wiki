<template>
    <div class="relative w-16 h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
        <div class="bucket-container relative">
            <img v-if="item.startsWith('minecraft:')"
                 :src="'https://minecraft-api.vercel.app/images/items/' + item.replaceAll('minecraft:','') + '.png'"
                 class="w-full h-full object-contain"
            >
            <img v-else-if="item.includes('_slimeball')"
                 :src="'img/template_slimeball.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('_slime_block')"
                 :src="'img/template_slime_block.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('_slime_dna')"
                 :src="'img/template_dna.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item.includes('_slime_spawn_egg')"
                 :src="'img/template_spawn_egg_bg.png'"
                 class="w-full h-full object-contain">
            <img v-else-if="item !== ''"
                 :src="'img/' + item.replaceAll('mod:', '') + '.png'"
                 class="w-full h-full object-contain">

            <img v-if="item.includes('_slime_spawn_egg')"
                 :src="'img/template_spawn_egg_hl.png'"
                 class="w-full h-full object-contain top-0 absolute">

            <!-- Tint -->
            <div v-if="item.includes('_slimeball')" class="absolute inset-0 tint-slimeball" :style="{backgroundColor: color}"></div>
            <div v-if="item.includes('_slime_block')" class="absolute inset-0 tint-slimeblock" :style="{backgroundColor: color}"></div>
            <div v-if="item.includes('_slime_dna')" class="absolute inset-0 tint-dna" :style="{backgroundColor: color}"></div>

            <div v-if="item.includes('_slime_spawn_egg')" class="absolute inset-0 tint-egg-bg" :style="{backgroundColor: bg}"></div>
            <div v-if="item.includes('_slime_spawn_egg')" class="absolute inset-0 tint-egg-hl" :style="{backgroundColor: hl}"></div>

            <!-- Output Count -->
            <div v-if="output_count != null" class="absolute inset-x-10 inset-y-7">
                <p class="text-4xl minecraft-font">{{ output_count }}</p>
            </div>

            <!-- Tooltip -->
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
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
    mounted() {
        if (this.item.includes('_slimeball') || this.item.includes('_slime_dna')) {
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
    },
}
</script>

<style>
.tint-slimeball{
    mask: url("@/assets/img/template_slimeball.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mix-blend-mode: multiply;
}
.tint-slimeblock{
    mask: url("@/assets/img/template_slime_block.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mix-blend-mode: multiply;
}
.tint-dna{
    mask: url("@/assets/img/template_dna.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mix-blend-mode: multiply;
}
.tint-egg-bg{
    mask: url("@/assets/img/template_spawn_egg_bg.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mix-blend-mode: multiply;
}
.tint-egg-hl{
    mask: url("@/assets/img/template_spawn_egg_hl.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mix-blend-mode: multiply;
}
.tooltip {
    position: absolute;
    bottom: 100%; /* Position above the element */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0.5rem; /* Space between the tooltip and element */
    background-color: #4A5568; /* Dark gray */
    color: white;
    font-size: 0.75rem; /* Smaller font size */
    padding: 0.25rem 0.5rem; /* Padding */
    border-radius: 0.25rem; /* Rounded corners */
    white-space: nowrap; /* Prevent text wrapping */
    z-index: 10; /* Ensure it appears above other elements */
}
</style>