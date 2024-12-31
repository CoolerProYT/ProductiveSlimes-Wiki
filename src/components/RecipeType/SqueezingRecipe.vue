<template>
    <input type="text" v-model="search" class="bg-gray-50 dark:bg-gray-600 w-full p-3" placeholder="Search...">
    <div v-for="recipe in data">
        <SqueezingGui
            :input_item="recipe.input_block"
            :output_item="recipe.output_item_1"
            :output_item_2="recipe.output_item_2"
            :input_count="1"
            :output_count="1">
        </SqueezingGui>
    </div>
</template>

<script>
import * as d3 from 'd3';
import SolidingGui from "@/components/templates/SolidingGui.vue";
import SqueezingGui from "@/components/templates/SqueezingGui.vue";

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
        SqueezingGui,
        SolidingGui
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            d3.csv("data/squeezing_recipes.csv").then(melting => {
                if (this.search !== '') {
                    melting = melting.filter(recipe => recipe.output_item_1.includes(this.search.toLowerCase().replaceAll(' ', '_')) || recipe.output_item_2.includes(this.search.toLowerCase().replaceAll(' ', '_')));
                }

                this.data = melting;
            });
        }
    }
}
</script>

<style>

</style>