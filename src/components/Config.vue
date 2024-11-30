<template>
    <div>
        <h1 class="text-2xl md:text-4xl font-bold">Config</h1>
        <p class="text-justify">
            This mod allows players to add custom variants of slimes, items, blocks, entities, and recipes by editing a JSON file located in <span class="token attr-value">config/productiveslimes/variants.json</span>.
        </p>
        <div id="json" class="my-5">
            <div class="px-3 py-2 bg-[#282c34]">
                <span>json</span>
            </div>
            <pre class="language-json"><code v-html="highlightedJsonContent"></code></pre>
        </div>
    </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-json.js';

export default {
    data() {
        return {
            configFormat: `[
  {
    "name": "spruce", // Name of the variant
    "color": "#FF674d2e", // Color of the variant (apply to slime, slime block, slimeball, dna item, spawn egg item, fluid)
    "mapColorId": 6, // Map color id of the variant (Id stated in https://minecraft.fandom.com/wiki/Map_item_format#Color_table)
    "cooldown": 1500, // Cooldown in ticks for the slimeball to drop form slime
    "growthItem": "minecraft:spruce_log", // Item that the slime can eat to grow
    "solidingOutput": "minecraft:spruce_log", // Output item for soliding station
    "solidingOutputCount": 2, // Output item count for soliding station
    "synthesizingInputItem": "minecraft:spruce_log", // Input item for dna synthesizer
    "synthesizingInputDna1": "productiveslimes:oak_slime_dna", // Input dna item for dna synthesizer (Only accept dna item)
    "synthesizingInputDna2": "productiveslimes:oak_slime_dna", // Input dna item for dna synthesizer (Only accept dna item)
    "dnaOutputChance": 0.75 // Dna output chance for DNA Extractor (0.0 - 1.0)
  }
]`
        }
    },
    computed: {
        highlightedJsonContent() {
            return Prism.highlight(
                this.configFormat,
                Prism.languages.json,
                'json'
            );
        }
    },
    mounted() {
        Prism.highlightAll();
    }
}
</script>

<style scoped>
div#json {
    background-color: #272822;
    border-radius: 0.5rem;
    overflow-x: auto;
}
code {
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
}
</style>