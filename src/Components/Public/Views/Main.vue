<template>
    <div>
        
        <Snow></Snow>

        <AppNav></AppNav>

        <router-view></router-view>

        <AppFooter></AppFooter>

    </div>
</template>

<script>
export default {
    name: "Main",
    components: {
        Snow: () => import("@/Components/UiElements/Snow.vue"),
        AppNav: () => import("@/Components/Public/Commons/AppNav"),
        AppFooter: () => import("@/Components/Public/Commons/AppFooter")
    }
}
</script>

<style scoped>

</style>