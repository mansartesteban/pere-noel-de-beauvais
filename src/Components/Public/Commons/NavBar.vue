<template>
    <div class="navbar">

        <div>
            <router-link :to="{name: 'Home'}" extact>Accueil</router-link>
        </div>
        <div>
            <router-link :to="'/#home-presentation'">Présentation</router-link>
        </div>
        <div>
            <router-link :to="'/#home-prestation'">Prestations</router-link>
        </div>
        <div>
            <router-link :to="{name: 'Galery'}">Galerie</router-link>
        </div>
        <div>
            <router-link :to="'/#home-contact'">Contact</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
    }

    .navbar div a{
        color: var(--color-primary-1);
        font-family: PermanentMarker;
        font-size: 1.2em;
        margin-left: 2em;
    }

    @media only screen and (max-width: 600px) {

        .navbar {
            flex-direction: column;
        }

    }
</style>