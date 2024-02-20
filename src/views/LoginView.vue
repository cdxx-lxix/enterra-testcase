<template>
  <main>
    <h2>Log In</h2>
    <LoginForm />
  </main>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
</script>

<style scoped>
main {
  flex-direction: column;
  h2{
    text-align: center;
    width: 100%;
    margin: 0 0 1rem 0;
  }
  h2 {
    color: #1E1E24;
    font-size: 5em;
  }
}
</style>
