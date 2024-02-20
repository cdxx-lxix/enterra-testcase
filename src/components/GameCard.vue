<template>
    <figure>
        <img :src="gameimage" alt="Game image">
        <figcaption>
            <section class="adaptive-glass">
                <h3>{{ gamename }}</h3>
                <button @click="handlePlayRequest(gameid)">Play demo</button>
            </section>
        </figcaption>
    </figure>
</template>

<script setup>
defineProps([
    'gameimage',
    'gamename',
    'gameid'
])
const handlePlayRequest = async(id) => {
    const data =  {
        clientId: "default", 
        gameId: id
    }
    const response = await fetch(
        `https://poker.evenbetpoker.com/api/web/v2/casino/games/${id}/session-demo?clientId=default`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    const dataResponse = await response.json();
    window.open(dataResponse.data[0].attributes["launch-options"]["game-url"])
}
</script>

<style>
figure {
    display: flex;
    flex-direction: column;
    border-radius: 0.75ch;
    overflow: hidden;
    margin: 0;
    padding: 5px;
    height: 20em;
    border: 2px solid #1E1E245C;
    button {
        border-radius: 0 0 1ch 1ch;
        background-color: #F9CB40;
        border: none;
        padding: 8px 0;
        margin-top: 10px;
        width: 100%;
    }
    button:hover {
        background-color: #ffc519;
        cursor: pointer;
    }
}

img {
    flex: 1;
    object-fit: cover;
    height: 50%;
    border-radius: 1ch 1ch 0 0;
    margin-bottom: 10px;
}

figcaption {
    display: block;

}

.adaptive-glass {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h3 {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    display: flex;
    justify-content: space-between;
}
h3::after {
    content: "";
    display: flex;
    transform: translateY(0.25rem);
    height: 2px;
    flex-grow: 1;
    background-color: #161616;
    margin: 6px 5px;
}
h3::before{
    content: "";
    display: flex;
    transform: translateY(0.25rem);
    height: 2px;
    flex-grow: 1;
    background-color: #161616;
    margin: 6px 5px;
}

</style>