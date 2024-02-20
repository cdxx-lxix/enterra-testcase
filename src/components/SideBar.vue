<template>
    <fieldset class="sidebar">
        <legend class="username-container">
            Hello, Richard
        </legend>
        <div class="image-container">
            <img :src="avatar" alt="Profile Picture">
        </div>
        <hr>
        <CurrencyInfo v-for="data in store.balance" :currency="data.attributes.currency" :available="data.attributes.available" :inplay="data.attributes['in-play']" :bonus="data.attributes.bonus" :key="data.id"/>
    </fieldset>
</template>

<script setup>
import avatar from '@/assets/user_avatar.png'
import CurrencyInfo from './CurrencyInfo.vue';
import { useCasinoStore } from "@/stores/casino"
const store = useCasinoStore()

</script>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 2px solid #161616;
    margin-top: 1em;
    legend {
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
    }
    .image-container {
        display: flex;
        justify-content: center;
    }
    img {
        width: 50%;
        height: 100%;
    }
    hr {
        width: 100%;
        color: #1616165C;
    }
    .currency-container:last-child {
        hr {
            display: none;
        }
    }
}
</style>