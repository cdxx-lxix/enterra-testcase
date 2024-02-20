<template>
    <fieldset class="gamesection" v-if="games">
        <legend>Games [{{ games.length }}]</legend>
        <GameCard v-for="game in games.slice(0,  30)" :key="game.id" :gameimage="game.attributes.image" :gamename="game.attributes.title" :gameid="game.id" />
    </fieldset>
    <fieldset class="gamesection" v-else>
        <legend>Loading...</legend>
        <div>Please, wait a moment</div>
    </fieldset>
</template>

<script setup>
import GameCard from './GameCard.vue';
import { ref, onMounted } from 'vue';

const games = ref(null)

onMounted(async () => {
    const response = await fetch(
        'https://poker.evenbetpoker.com/api/web/v2/casino/games?clientId=default',
        {
            method: 'GET'
        }
    );
    const data = await response.json();
    games.value = data.data;
})
</script>

<style>
.gamesection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
    margin-top: 1em;
    border: 2px solid #161616;
    legend {
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
    }
}
</style>
