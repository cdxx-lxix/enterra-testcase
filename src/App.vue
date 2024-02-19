<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
*,
html {
  box-sizing: border-box;
  header {
    margin: 10px 0;
    nav {
      a {
        padding: 10px 20px;
        background-color: #F9CB4088;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        color: #161616
      }
      a:hover {
        background-color: #F9CB40;
      }
    }
  }

  body {
    background-color: #F4f4f6;
    padding: 0;
    margin: 0;
  }
}
</style>
