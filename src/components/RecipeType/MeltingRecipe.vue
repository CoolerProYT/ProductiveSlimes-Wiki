<template>
    <input type="text" v-model="search" class="bg-gray-50 dark:bg-gray-600 w-full p-3" placeholder="Search...">
    <div v-for="recipe in data">
        <MeltingGui
            :input_item="recipe.input_item"
            :output_item="recipe.output_item"
            :input_count="recipe.input_count"
            :inputColor="recipe.inputColor"
            :output_count="recipe.output_count">
        </MeltingGui>
    </div>
</template>

<script>
import * as d3 from 'd3';
import MeltingGui from "@/components/templates/MeltingGui.vue";

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
        MeltingGui
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            d3.csv("data/melting_recipe.csv").then(melting => {
                if (this.search !== '') {
                    melting = melting.filter(recipe => recipe.output_item.includes(this.search.toLowerCase().replaceAll(' ', '_')));
                }
                Promise.all([
                    d3.csv("data/blocks.csv"),
                    d3.csv("data/items.csv")
                ]).then(([block, items]) => {
                    // Create a combined color map
                    const colorMap = new Map();

                    // Add colors from blocks
                    block.forEach(b => {
                        colorMap.set(b.block_name.toLowerCase(), b.color);
                    });

                    // Add colors from items (if not already in colorMap)
                    items.forEach(item => {
                        if (!colorMap.has(item.item_name.toLowerCase())) {
                            colorMap.set(item.item_name.toLowerCase(), item.color);
                        }
                    });

                    // Process melting data and add color
                    const processedMelting = melting.map(recipe => {
                        // Try to find a matching color for the input item
                        const inputColor = colorMap.get(recipe.input_item.toLowerCase()) || '#808080'; // default gray if no color found

                        return {
                            ...recipe,
                            inputColor: inputColor
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