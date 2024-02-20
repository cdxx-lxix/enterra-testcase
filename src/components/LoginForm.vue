<template>
    <section>
        <form method="POST">
            <fieldset>
                <legend><label for="login">Login</label></legend>
                <input type="text" id="login" name="login" placeholder="Wasya" required v-model="loginValue">
            </fieldset>
            <fieldset>
                <legend><label for="password">Password</label></legend>
                <input type="password" id="password" name="password" placeholder="*********" required v-model="passwordValue">
            </fieldset>
            <button type="submit" @click.prevent="store.loginUser(loginValue, passwordValue)">Log in</button>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCasinoStore } from "@/stores/casino"
const store = useCasinoStore()
const loginValue = ref(null)
const passwordValue = ref(null)
</script>

<style>
section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        padding: 2em 15px;
        border: 1px solid #1E1E24;
        display: flex;
        flex-direction: column;
        align-items: center;

        fieldset{
            margin: 0;
        }

        input {
            padding: 5px 10px 5px 10px;
            outline: none;
        }

        input:focus {
            background-color: #F9CB40AA;
        }

        button {
            width: 100%;
            margin: 5px 0;
            padding: 7px 0;
            border: none;
            text-transform: uppercase;
            font-weight: bold;
        }
        button:hover{
            background-color: #F9CB40;
            cursor: pointer;
        }
    }
}
</style>