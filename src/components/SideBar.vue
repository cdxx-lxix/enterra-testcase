<template>
    <fieldset class="sidebar">
        <legend class="username-container">
            Hello, Richard
        </legend>
        <div class="image-container">
            <img :src="avatar" alt="Profile Picture">
        </div>
        <hr>
        <CurrencyInfo v-for="data in mockData.data" :currency="data.attributes.currency" :available="data.attributes.available" :inplay="data.attributes['in-play']" :bonus="data.attributes.bonus" :key="data.id"/>
    </fieldset>
</template>

<script setup>
import avatar from '@/assets/user_avatar.png'
import CurrencyInfo from './CurrencyInfo.vue';

const mockData = {
  "data": [
    {
      "id": "2780206-80",
      "type": "balance",
      "attributes": {
        "currency": "USD",
        "available": 64383390,
        "in-play": 0,
        "bonus": 0
      }
    },
    {
      "id": "2780206-65",
      "type": "balance",
      "attributes": {
        "currency": "CUSTOM1",
        "available": 378230000,
        "in-play": 0,
        "bonus": 0
      }
    },
    {
      "id": "2780206-66",
      "type": "balance",
      "attributes": {
        "currency": "CUSTOM2",
        "available": 1297377,
        "in-play": 0,
        "bonus": 0
      }
    }
  ]
}
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