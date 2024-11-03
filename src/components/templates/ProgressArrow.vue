<template>
    <div class="mr-4 relative">
        <svg :width="width" height="35" viewBox="0 0 135 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg :width="width" :height="height" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            progressWidth: 0,
            width: 0,
            height: 0
        }
    },
    mounted() {
        this.width = window.innerWidth >= 768 ? 135 : 70;
        this.height = window.innerWidth >= 768 ? 40 : 37.5;
        $(window).resize(() => {
            this.width = window.innerWidth >= 768 ? 135 : 70;
            this.height = window.innerWidth >= 768 ? 40 : 37.5;
        });
        this.animateProgress();
    },
    methods: {
        animateProgress() {
            setInterval(() => {
                let width = window.innerWidth;
                if (width < 768)
                    this.progressWidth = this.progressWidth >= 70 ? 0 : this.progressWidth + 5;
                else
                    this.progressWidth = this.progressWidth >= 100 ? 0 : this.progressWidth + 5;
            }, 500);
        }
    }
}
</script>

<style>

</style>