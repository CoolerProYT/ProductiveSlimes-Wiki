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
                    <li>1.21.3</li>
                    <li>1.21.1</li>
                </ul>
            </div>

            <div class="mt-5">
                <h1 class="text-xl md:text-3xl font-bold">Change Log</h1>
                <ul class="list-disc ms-4">
                    <li class="font-bold text-xl">1.21.3</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.1.2 (Upcoming Update) ?</li>
                        <ul>
                            <li>- Added back JEI (Waiting for JEI to port 1.21.3)</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.1</li>
                        <ul>
                            <li>- Initial port to 1.21.3</li>
                        </ul>
                    </ul>

                    <li class="font-bold text-xl mt-3 border-t">1.21.1</li>
                    <ul class="ps-3" style="list-style-type: square">
                        <li class="font-bold text-lg">v1.1.2</li>
                        <ul>
                            <li>- Added squish animation for slime</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.1</li>
                        <ul>
                            <li>- Slime will drop slimeball on death now</li>
                            <li>- Added <b>dna_item</b> tag to DNA</li>
                            <li>- Added missing tag for some slimeball</li>
                            <li>- Changed 2 input slot in <b>DNA Synthesizer</b> to accept <b>dna_item</b> tag only</li>
                        </ul>

                        <li class="font-bold text-lg">v1.1.0</li>
                        <ul>
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

                        <li class="font-bold text-lg">v1.0.3</li>
                        <ul>
                            <li>- Added <b>slimeball</b> tag to all slimeball variants</li>
                            <li>- Changed vanilla recipe that uses slimeball to accept every slimeball variant</li>
                            <li>- Changed particle</li>
                            <li>- Added many new variants of slimes, check it out in <b>Guidebook</b></li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.2</li>
                        <ul>
                            <li>- Added <b>Slime Block</b> for all tiers of slime</li>
                            <li>- Added melting recipe for all <b>Slime Block</b> tiers</li>
                            <li>- Slime able to split on death</li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.1</li>
                        <ul>
                            <li>- Fixed <b>Liquid Soliding Station</b> translation</li>
                            <li>- Fixed <b>Soliding Station</b> capabilities</li>
                            <li>- Prevented slime from despawning when player is far away</li>
                        </ul>

                        <li class="font-bold text-lg">v1.0.0</li>
                        <ul>
                            <li>- Initial Release</li>
                        </ul>

                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>