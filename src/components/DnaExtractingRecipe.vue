<template>
    <input type="text" v-model="search" class="bg-gray-700 p-3" placeholder="Search...">
    <div v-for="recipe in data">
        <DnaExtractingGui
            :input_item="recipe.input_item"
            :output_item="recipe.output_item"
            :inputColor="recipe.inputColor"
            :output_count="recipe.output_count"
            :output_chance="recipe.output_chance"
            :output_color="recipe.outputColor"
        />
    </div>
</template>

<script>
import * as d3 from 'd3';
import DnaExtractingGui from "@/components/DnaExtractingGui.vue";

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
        DnaExtractingGui

    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            d3.csv("data/dna_extracting_recipe.csv").then(melting => {
                if (this.search !== '') {
                    melting = melting.filter(recipe => recipe.output_item.includes(this.search.toLowerCase().replaceAll(' ', '_')));
                }
                Promise.all([
                    d3.csv("data/items.csv"), // This contains input item colors
                    d3.csv("data/items.csv")    // This contains output item colors
                ]).then(([block, items]) => {
                    // Create a combined color map
                    const colorMap = new Map();

                    // Add colors from blocks (for input items)
                    block.forEach(b => {
                        colorMap.set(b.item_name.toLowerCase(), b.color);
                    });

                    // Add colors from items (for output items)
                    items.forEach(item => {
                        colorMap.set(item.item_name.toLowerCase(), item.color);
                    });

                    // Process melting data and add color for both input and output items
                    const processedMelting = melting.map(recipe => {
                        // Try to find a matching color for the input item
                        const inputColor = colorMap.get(recipe.input_item.toLowerCase()) || '#808080'; // default gray if no color found

                        // Try to find a matching color for the output item
                        const outputColor = colorMap.get(recipe.output_item.toLowerCase()) || '#808080'; // default gray if no color found

                        return {
                            ...recipe,
                            inputColor: inputColor,   // Store the input item's color
                            outputColor: outputColor   // Store the output item's color
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