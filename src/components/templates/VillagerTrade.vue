<template>
    <td class="border border-gray-200">
        <CraftingTableSlot class="mx-auto" :item="itemCost" :output_count="costCount" />
    </td>
    <td class="border border-gray-200">{{ priceMultiplier }}</td>
    <td class="border border-gray-200">
        <CraftingTableSlot class="mx-auto" :item="resultItem" :output_count="resultCount" />
    </td>
    <td class="border border-gray-200">{{ maxUse }} Trades</td>
    <td class="border border-gray-200">{{ xp }}</td>
</template>

<script>
import CraftingTableSlot from "@/components/templates/CraftingTableSlot.vue";

export default {
    components: {CraftingTableSlot},
    props: ['tier', 'itemCost', 'costCount', 'resultItem', 'resultCount', 'maxUse', 'xp', 'priceMultiplier']
}
</script>

<style>

</style>