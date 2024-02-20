<template>
    <div class="currency-container">
        <h4>{{ available }} <span>{{ currency }}</span></h4>
        <p>In-play: <span>{{ inplay }}</span></p>
        <p>Bonus: <span>{{ bonus }}</span></p>
        <hr>
    </div>
    
</template>

<script setup>
const props = defineProps([
    'currency',
    'available',
    'inplay',
    'bonus'
])
</script>

<style scoped>
.currency-container {
    h4, p {
        margin: 5px 0;
    }
    p {
        text-transform: uppercase;
        text-align: left;
        span {
            text-align: center;
            font-weight: 800;
        }
    }
}
</style>