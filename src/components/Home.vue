<template>
    <div class="md:flex flex-row-reverse">
        <div class="md:w-2/12">
            <img :src="'img/logo.png'" alt="">
        </div>
        <div class="md:w-10/12 md:pe-5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold">Productive Slime Wiki</h1>
                <p class="text-justify">
                    This is a mod that can let players to get resources from slime, this mod added many type of slime that will generate different recouces such as iron, gold and diamond.
                </p>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">CurseForge</h1>
                <a href="https://www.curseforge.com/minecraft/mc-mods/productive-slimes" class="underline text-blue-600" target="_blank">Download in CurseForge</a>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Github</h1>
                <p class="text-justify">
                    If you have found any bug in wiki or the mod, please feel free to open an issue in the repository.
                </p>
                <a href="https://github.com/CoolerProYT/ProductiveSlimes" class="underline text-blue-600" target="_blank">Visit Github Repository</a>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Current Version Support</h1>
                <ul class="list-disc ms-4">
                    <li class="font-bold text-xl">Update & Bug Fix</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li>1.21.1</li>
                        <li>1.21.3</li>
                        <li>1.21.4</li>
                        <li>1.20.1</li>
                    </ul>
                    <li class="font-bold text-xl mt-2">Bug Fix Only</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li>1.19.2</li>
                        <li>1.18.2</li>
                        <li>1.17.1</li>
                    </ul>
                    <li class="font-bold text-xl mt-2">Possible Backporting</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li>1.20.6</li>
                        <li>1.19.4</li>
                        <li>1.16.5</li>
                    </ul>
                </ul>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Change Log</h1>
                <ul class="list-disc ms-4">
                    <li class="font-bold text-xl">1.21.4</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1214">+</span></li>
                        <ul id="v140-1214-log" style="display: none">
                            <li>- Added Slime Item</li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 1</code></li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 2</code></li>
                            <li>- Added <code>Slime Simulation Chamber</code> block entity</li>
                            <li>- Added <code>Slimeball Collector</code> block entity</li>
                            <li>- Added function to pickup slime as item by sneak+right-clicking</li>
                            <li>- Added new command <code>/productiveslimes give &lt;slime_id&gt; [&lt;size&gt;]</code></li>
                            <li>- Slime can drop resource in <code>Slime Simulation Chamber</code></li>
                            <li>- Updated to NeoForge <code>21.4.41-beta</code></li>
                        </ul>

                        <li class="font-bold text-lg">v1.3.0 <span class="cursor-pointer select-none" id="v130-1214">+</span></li>
                        <ul id="v130-1214-log" style="display: none">
                            <li>- Added <code>Slimy</code> Wood Set (Log, Wood, Planks, Sapling, etc.)</li>
                            <li>- Added new block entity <code>Slime Squeezer</code></li>
                            <li>- Added new <code>Squeezing</code> recipe type</li>
                            <li>- Added Non-Block Block of <code>Slimy</code> Wood Set, <code>Slimy Stone</code>, <code>Slimy Cobblestone</code> and <code>Slimy Cobbled Deepslate</code></li>
                            <li>- Added <code>Slimeball Fragment</code> item</li>
                            <li>- Added back <code>Molten Stone Lake</code> and <code>Molten Dirt Lake</code> generation in <code>Slimy Land</code> biome</li>
                            <li>- Renamed <code>Slime Land</code> to <code>Slimy Land</code></li>
                            <li>- Replaced <code>Slime Tree</code> in <code>Slime Land</code> to <code>Slimy Tree</code></li>
                            <li>- Updated structure in <code>Slimy Village</code></li>
                            <li>- Updated <code>Slimy Stone</code> texture</li>
                            <li>- Updated <code>Slimy Deepslate</code> texture</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.1 <span class="cursor-pointer select-none" id="v121-1214">+</span></li>
                        <ul id="v121-1214-log" style="display: none">
                            <li>- Added back Jade and Terrablender</li>
                            <li>- Added REI</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.0 <span class="cursor-pointer select-none" id="v120-1214">+</span></li>
                        <ul id="v120-1214-log" style="display: none">
                            <li>- Port to 1.21.4</li>
                            <li>- Waiting for Jade and Terrablender to be updated, once they updated the plugin will be added back in next version.</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 py-3 border-t">1.21.3</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1213">+</span></li>
                        <ul id="v140-1213-log" style="display: none">
                            <li>- Added Slime Item</li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 1</code></li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 2</code></li>
                            <li>- Added <code>Slime Simulation Chamber</code> block entity</li>
                            <li>- Added <code>Slimeball Collector</code> block entity</li>
                            <li>- Added function to pickup slime as item by sneak+right-clicking</li>
                            <li>- Added new command <code>/productiveslimes give &lt;slime_id&gt; [&lt;size&gt;]</code></li>
                            <li>- Slime can drop resource in <code>Slime Simulation Chamber</code></li>
                        </ul>

                        <li class="font-bold text-lg">v1.3.0 <span class="cursor-pointer select-none" id="v130-1213">+</span></li>
                        <ul id="v130-1213-log" style="display: none">
                            <li>- Added <code>Slimy</code> Wood Set (Log, Wood, Planks, Sapling, etc.)</li>
                            <li>- Added new block entity <code>Slime Squeezer</code></li>
                            <li>- Added new <code>Squeezing</code> recipe type</li>
                            <li>- Added Non-Block Block of <code>Slimy</code> Wood Set, <code>Slimy Stone</code>, <code>Slimy Cobblestone</code> and <code>Slimy Cobbled Deepslate</code></li>
                            <li>- Added <code>Slimeball Fragment</code> item</li>
                            <li>- Added back <code>Molten Stone Lake</code> and <code>Molten Dirt Lake</code> generation in <code>Slimy Land</code> biome</li>
                            <li>- Renamed <code>Slime Land</code> to <code>Slimy Land</code></li>
                            <li>- Replaced <code>Slime Tree</code> in <code>Slime Land</code> to <code>Slimy Tree</code></li>
                            <li>- Updated structure in <code>Slimy Village</code></li>
                            <li>- Updated <code>Slimy Stone</code> texture</li>
                            <li>- Updated <code>Slimy Deepslate</code> texture</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.1 <span class="cursor-pointer select-none" id="v121-1213">+</span></li>
                        <ul id="v121-1213-log" style="display: none">
                            <li>- Added REI compat</li>
                            <li>- Added Fluid Tank crafting recipe</li>
                            <li>- Added Guidebook and Energy Multiplier Upgrade to Creative Tab</li>
                            <li>- Removed Lake Placed Feature in Slime Land to avoid crash on chunk loading</li>
                            <li>- Fixed custom variants recipe, tags not working</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.0 <span class="cursor-pointer select-none" id="v120-1213">+</span></li>
                        <ul id="v120-1213-log" style="display: none">
                            <li>- Added Fluid Tank, Slimy Grass Block, Slimy Dirt, Oak Leaves Slime, Slimy Stone, Slimy Deepslate</li>
                            <li>- Added new biome Slime Land to overworld</li>
                            <li>- Added function to let player add variant of slimes by editing json file in config folder (Visit wiki for guide)</li>
                            <li>- Added Village to Slime Land</li>
                            <li>- Added new villager profession Scientist</li>
                            <li>- Added Vanilla Slime spawn to Slime Land</li>
                            <li>- Reworked on some Block Entity Textures</li>
                            <li>- Slime will follow player if the player is holding their growth item and it still able to grow</li>
                            <li>- Vanilla Slime no longer attack player</li>
                            <li>- Iron Golem no longer attack slime</li>
                            <li>- Updated bucket texture</li>
                            <li>- Update slime block texture opacity</li>
                            <li>- Added Terrablender as dependency</li>
                            <li>- Fixed incorrect slime hitbox</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.1 <span class="cursor-pointer select-none" id="v111-1213">+</span></li>
                        <ul id="v111-1213-log" style="display: none">
                            <li>- Initial port to 1.21.3</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 py-3 border-t">1.21.1</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1211">+</span></li>
                        <ul id="v140-1211-log" style="display: none">
                            <li>- Added Slime Item</li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 1</code></li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 2</code></li>
                            <li>- Added <code>Slime Simulation Chamber</code> block entity</li>
                            <li>- Added <code>Slimeball Collector</code> block entity</li>
                            <li>- Added function to pickup slime as item by sneak+right-clicking</li>
                            <li>- Added new command <code>/productiveslimes give &lt;slime_id&gt; [&lt;size&gt;]</code></li>
                            <li>- Slime can drop resource in <code>Slime Simulation Chamber</code></li>
                        </ul>

                        <li class="font-bold text-lg">v1.3.0 <span class="cursor-pointer select-none" id="v130-1211">+</span></li>
                        <ul id="v130-1211-log" style="display: none">
                            <li>- Added <code>Slimy</code> Wood Set (Log, Wood, Planks, Sapling, etc.)</li>
                            <li>- Added new block entity <code>Slime Squeezer</code></li>
                            <li>- Added new <code>Squeezing</code> recipe type</li>
                            <li>- Added Non-Block Block of <code>Slimy</code> Wood Set, <code>Slimy Stone</code>, <code>Slimy Cobblestone</code> and <code>Slimy Cobbled Deepslate</code></li>
                            <li>- Added <code>Slimeball Fragment</code> item</li>
                            <li>- Added back <code>Molten Stone Lake</code> and <code>Molten Dirt Lake</code> generation in <code>Slimy Land</code> biome</li>
                            <li>- Renamed <code>Slime Land</code> to <code>Slimy Land</code></li>
                            <li>- Replaced <code>Slime Tree</code> in <code>Slime Land</code> to <code>Slimy Tree</code></li>
                            <li>- Updated structure in <code>Slimy Village</code></li>
                            <li>- Updated <code>Slimy Stone</code> texture</li>
                            <li>- Updated <code>Slimy Deepslate</code> texture</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.1 <span class="cursor-pointer select-none" id="v121-1211">+</span></li>
                        <ul id="v121-1211-log" style="display: none">
                            <li>- Added REI compat</li>
                            <li>- Added Guidebook and Energy Multiplier Upgrade to Creative Tab</li>
                            <li>- Removed Lake Placed Feature in Slime Land to avoid crash on chunk loading</li>
                            <li>- Fixed custom variants recipe, tags not working</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.0 <span class="cursor-pointer select-none" id="v120-1211">+</span></li>
                        <ul id="v120-1211-log" style="display: none">
                            <li>- Added Fluid Tank, Slimy Grass Block, Slimy Dirt, Oak Leaves Slime, Slimy Stone, Slimy Deepslate</li>
                            <li>- Added new biome Slime Land to overworld</li>
                            <li>- Added function to let player add variant of slimes by editing json file in config folder (Visit wiki for guide)</li>
                            <li>- Added Village to Slime Land</li>
                            <li>- Added new villager profession Scientist</li>
                            <li>- Added Vanilla Slime spawn to Slime Land</li>
                            <li>- Reworked on some Block Entity Textures</li>
                            <li>- Slime will follow player if the player is holding their growth item and it still able to grow</li>
                            <li>- Vanilla Slime no longer attack player</li>
                            <li>- Iron Golem no longer attack slime</li>
                            <li>- Updated bucket texture</li>
                            <li>- Update slime block texture opacity</li>
                            <li>- Updated to NeoForge 21.1.77</li>
                            <li>- Added Terrablender as dependency</li>
                            <li>- Fixed incorrect slime hitbox</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.2 <span class="cursor-pointer select-none" id="v112-1211">+</span></li>
                        <ul id="v112-1211-log" style="display: none">
                            <li>- Added squish animation for slime</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.1 <span class="cursor-pointer select-none" id="v111-1211">+</span></li>
                        <ul id="v111-1211-log" style="display: none">
                            <li>- Slime will drop slimeball on death now</li>
                            <li>- Added <b>dna_item</b> tag to DNA</li>
                            <li>- Added missing tag for some slimeball</li>
                            <li>- Changed 2 input slot in <b>DNA Synthesizer</b> to accept <b>dna_item</b> tag only</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.0 <span class="cursor-pointer select-none" id="v110-1211">+</span></li>
                        <ul id="v110-1211-log" style="display: none">
                            <li>- Added <b>Energy Slime</b>, <b>Slimeball</b>, and <b>Slime Block</b></li>
                            <li>- Implemented <b>FE</b> to <b>Soliding Station</b> and <b>Melting Station</b></li>
                            <li>- Added <b>Cable</b> and <b>Energy Generator</b></li>
                            <li>- Added new item <b>Energy Multiplier Upgrade</b></li>
                            <li>- Updated <b>JEI</b> to show energy required</li>
                            <li>- Removed slime transformation by right-clicking with blocks</li>
                            <li>- Introduced a new method to obtain slime variants</li>
                            <li>- New texture for <b>Soliding Station</b></li>
                            <li>- Added new Block Entity <b>DNA Extractor</b></li>
                            <li>- Added new Block Entity <b>DNA Synthesizer</b></li>
                            <li>- Added new item <b>Slime DNA</b> for all slime except <b>Energy Slime</b></li>
                            <li>- Added new Recipe Type <b>Dna Extracting</b></li>
                            <li>- Added new Recipe Type <b>Dna Synthesizing</b></li>
                            <li>- Updated <b>Guidebook</b> (For more complete information please use <b>JEI</b>)</li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.3 <span class="cursor-pointer select-none" id="v103-1211">+</span></li>
                        <ul id="v103-1211-log" style="display: none">
                            <li>- Added <b>slimeball</b> tag to all slimeball variants</li>
                            <li>- Changed vanilla recipe that uses slimeball to accept every slimeball variant</li>
                            <li>- Changed particle</li>
                            <li>- Added many new variants of slimes, check it out in <b>Guidebook</b></li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.2 <span class="cursor-pointer select-none" id="v102-1211">+</span></li>
                        <ul id="v102-1211-log" style="display: none">
                            <li>- Added <b>Slime Block</b> for all tiers of slime</li>
                            <li>- Added melting recipe for all <b>Slime Block</b> tiers</li>
                            <li>- Slime able to split on death</li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.1 <span class="cursor-pointer select-none" id="v101-1211">+</span></li>
                        <ul id="v101-1211-log" style="display: none">
                            <li>- Fixed <b>Liquid Soliding Station</b> translation</li>
                            <li>- Fixed <b>Soliding Station</b> capabilities</li>
                            <li>- Prevented slime from despawning when player is far away</li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.0 <span class="cursor-pointer select-none" id="v100-1211">+</span></li>
                        <ul id="v100-1211-log" style="display: none">
                            <li>- Initial Release</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 py-3 border-t">1.20.1</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1201">+</span></li>
                        <ul id="v140-1201-log" style="display: none">
                            <li>- Added Slime Item</li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 1</code></li>
                            <li>- Added new item <code>Simulation Chamber Speed Upgrade 2</code></li>
                            <li>- Added <code>Slime Simulation Chamber</code> block entity</li>
                            <li>- Added <code>Slimeball Collector</code> block entity</li>
                            <li>- Added function to pickup slime as item by sneak+right-clicking</li>
                            <li>- Added new command <code>/productiveslimes give &lt;slime_id&gt; [&lt;size&gt;]</code></li>
                            <li>- Slime can drop resource in <code>Slime Simulation Chamber</code></li>
                        </ul>

                        <li class="font-bold text-lg">v1.3.0 <span class="cursor-pointer select-none" id="v130-1201">+</span></li>
                        <ul id="v130-1201-log" style="display: none">
                            <li>- Added <code>Slimy</code> Wood Set (Log, Wood, Planks, Sapling, etc.)</li>
                            <li>- Added new block entity <code>Slime Squeezer</code></li>
                            <li>- Added new <code>Squeezing</code> recipe type</li>
                            <li>- Added Non-Block Block of <code>Slimy</code> Wood Set, <code>Slimy Stone</code>, <code>Slimy Cobblestone</code> and <code>Slimy Cobbled Deepslate</code></li>
                            <li>- Added <code>Slimeball Fragment</code> item</li>
                            <li>- Added back <code>Molten Stone Lake</code> and <code>Molten Dirt Lake</code> generation in <code>Slimy Land</code> biome</li>
                            <li>- Renamed <code>Slime Land</code> to <code>Slimy Land</code></li>
                            <li>- Replaced <code>Slime Tree</code> in <code>Slime Land</code> to <code>Slimy Tree</code></li>
                            <li>- Updated structure in <code>Slimy Village</code></li>
                            <li>- Updated <code>Slimy Stone</code> texture</li>
                            <li>- Updated <code>Slimy Deepslate</code> texture</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.2 <span class="cursor-pointer select-none" id="v122-1201">+</span></li>
                        <ul id="v122-1201-log" style="display: none">
                            <li>- Fixed <code>Fluid Tank</code> not saving fluid when broken.</li>
                            <li>- Fixed <code>Fluid Tank</code> not rendering fluid.</li>
                        </ul>

                        <li class="font-bold text-lg">v1.2.1 <span class="cursor-pointer select-none" id="v121-1201">+</span></li>
                        <ul id="v121-1201-log" style="display: none">
                            <li>- Backport to 1.20.1 Forge</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 py-3 border-t">1.19.2</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1192">+</span></li>
                        <ul id="v140-1192-log" style="display: none">
                            <li>- Backport to 1.19.2</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 py-3 border-t">1.18.2</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1182">+</span></li>
                        <ul id="v140-1182-log" style="display: none">
                            <li>- Backport to 1.18.2</li>
                            <li>- Removed Molten Dirt Lake and Molten Stone Lake in worldgen</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 py-3 border-t">1.17.1</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.4.0 <span class="cursor-pointer select-none" id="v140-1171">+</span></li>
                        <ul id="v140-1171-log" style="display: none">
                            <li>- Backport to 1.18.2</li>
                            <li>- Removed Molten Dirt Lake and Molten Stone Lake in worldgen</li>
                        </ul>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    mounted() {
        $('span').click(function() {
            var id = $(this).attr('id');
            $(this).text() === '+' ? $(this).text('-') : $(this).text('+');
            $('#' + id + "-log").slideToggle();
        });
    }
}
</script>

<style>

</style>