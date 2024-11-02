<template>
    <div class="minecraft-gui bg-[#c6c6c6] border-4 border-[#373737] border-t-[#FFFFFF] border-l-[#FFFFFF] p-2 max-w-md my-3">
        <div class="w-full bg-[#c6c6c6]">
            <div class="bg-[#C6C6C6] text-white minecraft-font text-2xl px-2 text-left">
                {{ output_item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
            </div>
            <div class="p-2">
                <div class="flex items-center justify-between">
                    <!-- Input Slot -->
                    <div class="relative w-16 h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
                        <div class="bucket-container relative">
                            <img :src="'img/empty_bucket.png'" alt="Bucket" class="w-full h-full object-contain bucket">
                            <img :src="'img/bucket_fluid.png'" alt="Bucket" class="w-full h-full object-contain bucket absolute top-1">
                            <div class="absolute inset-0 tint-fluid top-1" :style="{backgroundColor: inputColor}"></div>
                            <div class="absolute inset-x-10 inset-y-7">
                                <p class="text-4xl minecraft-font">{{ input_count }}</p>
                            </div>
                            <!-- Tooltip -->
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                <p>{{ input_item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Arrow -->
                    <div class="mr-4 relative">
                        <svg width="135" height="35" viewBox="0 0 135 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="10" width="110" height="5" fill="#ffffff"/>
                            <rect x="120" y="5" width="5" height="5" fill="#ffffff"/>
                            <rect x="125" y="10" width="5" height="5" fill="#ffffff"/>
                            <rect x="130" y="15" width="5" height="5" fill="#ffffff"/>
                            <rect x="115" y="15" width="15" height="10" fill="#8b8b8b"/>
                            <rect x="115" y="30" width="5" height="5" fill="#383838"/>
                            <rect x="0" y="10" width="5" height="5" fill="#8b8b8b"/>
                            <rect x="5" y="20" width="110" height="5" fill="#383838"/>
                            <rect x="115" y="25" width="5" height="5" fill="#383838"/>
                            <rect y="15" width="5" height="10" fill="#383838"/>
                            <rect x="115" width="5" height="15" fill="#383838"/>
                            <rect x="120" y="10" width="5" height="20" fill="#8b8b8b"/>
                            <rect x="5" y="15" width="125" height="5" fill="#8b8b8b"/>
                        </svg>

                        <div
                            class="absolute top-0 left-0 h-full overflow-hidden"
                            :style="{ width: progressWidth + 'px', zIndex: 1 }"
                        >
                            <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="10" width="110" height="5" fill="#ffffff"/>
                                <rect x="120" y="5" width="5" height="5" fill="#ffffff"/>
                                <rect x="125" y="10" width="5" height="5" fill="#ffffff"/>
                                <rect x="130" y="15" width="5" height="5" fill="#ffffff"/>
                                <rect x="115" y="15" width="15" height="10" fill="#ffffff"/>
                                <rect x="115" y="35" width="5" height="5" fill="#8c8c8c"/>
                                <rect x="120" y="30" width="5" height="5" fill="#8c8c8c"/>
                                <rect x="125" y="25" width="5" height="5" fill="#8c8c8c"/>
                                <rect x="130" y="20" width="5" height="5" fill="#8c8c8c"/>
                                <rect x="0" y="10" width="5" height="5" fill="#ffffff"/>
                                <rect x="5" y="25" width="110" height="5" fill="#8c8c8c"/>
                                <rect x="115" y="25" width="5" height="10" fill="#ffffff"/>
                                <rect y="15" width="5" height="10" fill="#ffffff"/>
                                <rect x="115" width="5" height="15" fill="#ffffff"/>
                                <rect x="120" y="10" width="5" height="20" fill="#ffffff"/>
                                <rect x="5" y="15" width="125" height="10" fill="#ffffff"/>
                            </svg>

                        </div>
                    </div>

                    <!-- Output Slots -->
                    <div class="grid grid-cols-2 gap-2 mr-4">
                        <div class="relative w-16 h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
                            <img
                                :src="output_item === 'mud' ? 'img/mud.webp' : 'https://minecraft-api.vercel.app/images/items/' + output_item + '.png'"
                                class="w-full h-full object-contain"
                            >
                            <div class="absolute inset-x-10 inset-y-7">
                                <p class="text-4xl minecraft-font">{{ output_count }}</p>
                            </div>
                            <!-- Tooltip -->
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                <p>{{ output_item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
                            </div>
                        </div>
                        <div class="relative w-16 h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] flex items-center justify-center group">
                            <img :src="'img/empty_bucket.png'" alt="Empty Bucket" class="w-full h-full object-contain">
                            <div class="absolute inset-x-10 inset-y-7">
                                <p class="text-4xl minecraft-font">1</p>
                            </div>
                            <!-- Tooltip -->
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                Bucket
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    props: ['input_item', 'output_item', 'input_count', 'inputColor', 'output_count'],
    data() {
        return {
            progressWidth: 0
        }
    },
    mounted() {
        this.animateProgress();
    },
    methods: {
        animateProgress() {
            setInterval(() => {
                this.progressWidth = this.progressWidth >= 135 ? 0 : this.progressWidth + 5;
            }, 500);
        }
    }
}
</script>

<style>
.tint-fluid {
    mask: url("@/assets/img/bucket_fluid.png");
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
@font-face {
    font-family: 'Minecraft';
    src: url('@/assets/minecraft.otf') format('truetype');
}
.minecraft-font {
    font-family: 'Minecraft';
}
</style>