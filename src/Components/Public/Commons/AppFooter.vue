<template>
    <div class="footer">
        <div class="footer-left">
            <router-link :to="{name: 'Legacy'}">Mentions légales</router-link>
            <router-link :to="{name: 'Credits'}">Crédits</router-link>
        </div>
        <div class="footer-right">
            <div class="copyrights">
                Site développé par PITAYA
            </div>
        </div>
    </div>
</template>


<style scoped>
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: PermanentMarker;
        color: white;
        padding: 2em 5em;
    }

    .footer-left {
        display: flex;
        flex-direction: column;
    }
</style>
