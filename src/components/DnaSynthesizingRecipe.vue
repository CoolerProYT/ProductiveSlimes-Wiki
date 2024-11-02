<template>
    <input type="text" v-model="search" class="bg-gray-700 p-3" placeholder="Search...">
    <div v-for="recipe in data">
        <DnaSynthesizingGui
            :input_item="recipe.input_item"
            :output_item="recipe.output_item"
            :input_count="recipe.input_count"
            :input_item_dna_1="recipe.input_item_dna_1"
            :input_item_dna_2="recipe.input_item_dna_2"
            :inputColor1="recipe.inputColor1"
            :inputColor2="recipe.inputColor2"
            :outputBackgroundColor="recipe.outputBackgroundColor"
            :outputHighlightColor="recipe.outputHighlightColor"
        />
    </div>
</template>

<script>
import * as d3 from 'd3';
import DnaExtractingGui from "@/components/DnaExtractingGui.vue";
import DnaSynthesizingGui from "@/components/DnaSynthesizingGui.vue";

export default {
    data() {
        return {
            data: null,
            search: ''
        }
    },
    watch: {
        search() {
            this.fetchData();
        }
    },
    components: {
        DnaSynthesizingGui,
        DnaExtractingGui

    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            d3.csv("data/dna_synthesizing_recipe.csv").then(melting => {
                if (this.search !== '') {
                    melting = melting.filter(recipe => recipe.output_item.includes(this.search.toLowerCase().replaceAll(' ', '_')));
                }
                Promise.all([
                    d3.csv("data/items.csv"), // This contains input item colors
                    d3.csv("data/spawn_egg.csv")    // This contains output item colors
                ]).then(([block, items]) => {
                    // Create a combined color map
                    const colorMap = new Map();

                    // Add colors from blocks (for input items)
                    block.forEach(b => {
                        colorMap.set(b.item_name.toLowerCase(), b.color);
                    });

                    // Add colors from items (for output items)
                    items.forEach(item => {
                        colorMap.set(item.name.toLowerCase() + 'bg', item.background_color);
                        colorMap.set(item.name.toLowerCase() + 'hl', item.highlight_color);
                    });

                    // Process melting data and add color for both input and output items
                    const processedMelting = melting.map(recipe => {
                        // Try to find a matching color for the input item
                        const inputColor1 = colorMap.get(recipe.input_item_dna_1.toLowerCase()) || '#808080'; // default gray if no color found
                        const inputColor2 = colorMap.get(recipe.input_item_dna_2.toLowerCase()) || '#808080'; // default gray if no color found

                        // Try to find a matching color for the output item
                        const outputBackgroundColor = colorMap.get(recipe.output_item.toLowerCase() + 'bg') || '#808080'; // default gray if no color found
                        const outputHighlightColor = colorMap.get(recipe.output_item.toLowerCase() + 'hl') || '#808080'; // default gray if no color found

                        return {
                            ...recipe,
                            inputColor1: inputColor1,   // Store the input item's color
                            inputColor2: inputColor2,   // Store the input item's color
                            outputBackgroundColor: outputBackgroundColor,  // Store the output item's color
                            outputHighlightColor: outputHighlightColor  // Store the output item's color
                        };
                    });

                    this.data = processedMelting;
                }).catch(error => {
                    console.error("Error loading CSV files:", error);
                });
            });
        }
    }
}
</script>

<style>

</style>