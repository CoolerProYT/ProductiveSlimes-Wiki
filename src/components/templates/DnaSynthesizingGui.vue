<template>
    <div class="minecraft-gui bg-[#c6c6c6] border-4 border-[#373737] border-t-[#FFFFFF] border-l-[#FFFFFF] p-2 max-w-md my-3">
        <div class="w-full bg-[#c6c6c6]">
            <div class="bg-[#C6C6C6] text-white minecraft-font text-xl md:text-2xl px-2 text-left">
                {{ output_item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
            </div>
            <div class="p-2">
                <div class="flex items-center justify-between">
                    <!-- Input Slot -->
                   <div class="flex items-center justify-between md:w-36">
                       <div class="h-48 flex flex-col justify-between">
                           <CraftingTableSlot
                               :item="input_item_dna_1"
                               :output_count="1"
                           />

                           <CraftingTableSlot
                               :item="input_item_dna_2"
                               :output_count="1"
                           />
                       </div>

                       <CraftingTableSlot
                           :item="'minecraft:' + input_item"
                           :output_count="input_count"
                       />
                   </div>

                    <div class="relative">
                        <!-- Arrow -->
                        <ProgressArrow/>

                        <div class="absolute top-12 left-4 xs:left-3 md:left-8">
                            <CraftingTableSlot
                                :item="'minecraft:egg'"
                                :output_count="1"
                            />
                        </div>
                    </div>

                    <!-- Output Slot -->
                    <CraftingTableSlot
                        :item="output_item"
                        :output_count="1"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressArrow from "@/components/templates/ProgressArrow.vue";
import CraftingTableSlot from "@/components/templates/CraftingTableSlot.vue";

export default {
    components: {CraftingTableSlot, ProgressArrow},
    props: ['input_item', 'output_item', 'input_count', 'input_item_dna_1', 'input_item_dna_2', 'inputColor1', 'inputColor2', 'outputBackgroundColor', 'outputHighlightColor'],
}
</script>

<style>
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
    z-index: 1000000 !important; /* Ensure it appears above other elements */
}
@font-face {
    font-family: 'Minecraft';
    src: url('@/assets/minecraft.otf') format('truetype');
}
.minecraft-font {
    font-family: 'Minecraft';
}
</style>