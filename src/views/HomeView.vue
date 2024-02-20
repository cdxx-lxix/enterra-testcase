<template>
  <main>
    <SideBar />
    <GameSection />
  </main>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
import GameSection from '@/components/GameSection.vue';
</script>

<style>
main {
  width: 100%;
  display: flex;
  .sidebar {
    width: 15%;
  }
  .gamesection {
    width: 85%;
  }
}

</style>