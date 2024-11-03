<template>
    <div class="minecraft-gui bg-[#c6c6c6] border-4 border-[#373737] border-t-[#FFFFFF] border-l-[#FFFFFF] p-2 max-w-md my-3">
        <div class="w-full bg-[#c6c6c6]">
            <div class="bg-[#C6C6C6] text-white minecraft-font text-xl md:text-2xl px-2 text-left">
                {{ output_item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
            </div>
            <div class="p-2">
                <div class="flex items-center justify-between">
                    <!-- Input Slots -->
                    <div class="grid grid-cols-2 gap-2 md:mr-4">
                        <CraftingTableSlot
                            :item="'minecraft:bucket'"
                            :output_count="1"
                        />
                        <CraftingTableSlot
                            :item="input_item"
                            :output_count="input_count"
                        />
                    </div>

                    <!-- Arrow -->
                    <ProgressArrow />

                    <!-- Output Slot -->
                    <CraftingTableSlot
                        :item="output_item"
                        :output_count="output_count"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CraftingTableSlot from "@/components/templates/CraftingTableSlot.vue";
import ProgressArrow from "@/components/templates/ProgressArrow.vue";

export default {
    components: {CraftingTableSlot, ProgressArrow},
    props: ['input_item', 'output_item', 'input_count', 'inputColor', 'output_count']
}
</script>

<style>

</style>