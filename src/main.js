import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import './assets/index.css'

import App from './App.vue'
import Home from './components/Home.vue'
import MeltingRecipe from './components/RecipeType/MeltingRecipe.vue'
import SolidingRecipe from "@/components/RecipeType/SolidingRecipe.vue";
import DnaExtractingRecipe from "@/components/RecipeType/DnaExtractingRecipe.vue";
import DnaSynthesizingRecipe from "@/components/RecipeType/DnaSynthesizingRecipe.vue";
import MeltingStation from "@/components/Blocks/MeltingStation.vue";
import SolidingStation from "@/components/Blocks/SolidingStation.vue";
import EnergySlimeSpawnEgg from "@/components/Items/EnergySlimeSpawnEgg.vue";
import EnergyGenerator from "@/components/Blocks/EnergyGenerator.vue";
import Cable from "@/components/Blocks/Cable.vue";
import DnaExtractor from "@/components/Blocks/DnaExtractor.vue";
import DnaSynthesizer from "@/components/Blocks/DnaSynthesizer.vue";
import EnergyMultiplierUpgrade from "@/components/Items/EnergyMultiplierUpgrade.vue";
import Guidebook from "@/components/Items/Guidebook.vue";
import Slime from "@/components/Entities/Slime.vue";
import Config from "@/components/Config.vue";
import FluidTank from "@/components/Blocks/FluidTank.vue";
import Scientist from "@/components/Villager/Scientist.vue";
import SqueezingRecipe from "@/components/RecipeType/SqueezingRecipe.vue";
import SlimeballFragment from "@/components/Items/SlimeballFragment.vue";
import SlimeSqueezer from "@/components/Blocks/SlimeSqueezer.vue";
import Squeezer from "@/components/Items/Squeezer.vue";
import SlimeItem from "@/components/Items/SlimeItem.vue";
import SimulationChamberUpgrade1 from "@/components/Items/SimulationChamberUpgrade1.vue";
import SimulationChamberUpgrade2 from "@/components/Items/SimulationChamberUpgrade2.vue";
import SlimeSimulationChamber from "@/components/Blocks/SlimeSimulationChamber.vue";
import SlimeballCollector from "@/components/Blocks/SlimeballCollector.vue";

const routes = [
    { path: '/Home', component: Home },
    { path: '/MeltingRecipe', component: MeltingRecipe },
    { path: '/SolidingRecipe', component: SolidingRecipe },
    { path: '/DnaExtractingRecipe', component: DnaExtractingRecipe },
    { path: '/DnaSynthesizingRecipe', component: DnaSynthesizingRecipe },
    { path: '/SqueezingRecipe', component: SqueezingRecipe },
    { path: '/MeltingStation', component: MeltingStation },
    { path: '/SolidingStation', component: SolidingStation },
    { path: '/EnergySlimeSpawnEgg', component: EnergySlimeSpawnEgg },
    { path: '/EnergyGenerator', component: EnergyGenerator },
    { path: '/Cable', component: Cable },
    { path: '/DnaExtractor', component: DnaExtractor },
    { path: '/DnaSynthesizer', component: DnaSynthesizer },
    { path: '/EnergyMultiplierUpgrade', component: EnergyMultiplierUpgrade },
    { path: '/Guidebook', component: Guidebook },
    { path: '/Slime', component: Slime },
    { path: '/Config', component: Config },
    { path: '/FluidTank', component: FluidTank },
    { path: '/Scientist', component: Scientist },
    { path: '/SlimeballFragment', component: SlimeballFragment },
    { path: '/SlimeSqueezer', component: SlimeSqueezer },
    { path: '/SlimeItem', component: SlimeItem },
    { path: '/Squeezer', component: Squeezer },
    { path: '/SimulationChamberUpgrade1', component: SimulationChamberUpgrade1 },
    { path: '/SimulationChamberUpgrade2', component: SimulationChamberUpgrade2 },
    { path: '/SlimeSimulationChamber', component: SlimeSimulationChamber },
    { path: '/SlimeballCollector', component: SlimeballCollector },
    { path: '/:pathMatch(.*)*', redirect: '/Home' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app')