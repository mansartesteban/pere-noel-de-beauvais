<template>
    <div class="container fluid main-content">

        <HomeLanding></HomeLanding>
        <HomePresentation></HomePresentation>
        <HomePrestation></HomePrestation>
        <HomeContact></HomeContact>

        <FabButton :show="showFabButton"></FabButton>

    </div>
</template>

<script>
export default  {
    name: "Home",
    components: {
        HomeLanding: () => import("@/Components/Public/Views/Home/HomeLanding"),
        HomePresentation: () => import("@/Components/Public/Views/Home/HomePresentation"),
        HomePrestation: () => import("@/Components/Public/Views/Home/HomePrestation"),
        HomeContact: () => import("@/Components/Public/Views/Home/HomeContact"),
        FabButton: () => import("@/Components/Public/Commons/FabButton"),
    },
    computed: {
    },
    methods: {
        handleScroll(e) {
            this.scrollPosition = window.top.scrollY
            this.showFabButton = this.scrollPosition > 100
        }
    },
    data() {
        return {
            showFabButton: false,
            scrollPosition: 0
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>


<style lang="scss">

    .title {
        font-family: PermanentMarker;
        font-size: 2.5em;
        padding-bottom: 1em;
    }

    .section {

        position: relative;

        padding-left: 8%;
        padding-right: 8%;

        &:not(.no-gutters):not(:first-child) {
            padding-top: 15vh;
            padding-bottom: 15vh;
            margin-top: 6em;
            margin-bottom: 6em;
        }

        &:not(.no-gutters):first-child {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }

        &:nth-child(even) {
            background: white;
        }

        &:nth-child(even):before {
            content: " ";
            width: 100%;
            height: 32px;
            left: 0; right: 0;
            top: -32px;
            position: absolute;
            background: url("/ressources/images/section-before.svg") no-repeat;
            background-size: cover;
            -webkit-filter: drop-shadow( 0 0 15px rgba(0, 0, 0, .7));
            filter: drop-shadow( 0 0 15px rgba(0, 0, 0, .7));
            z-index: -1;
        }

        &:nth-child(even):after {
            content: " ";
            width: 100%;
            height: 32px;
            left: 0; right: 0;
            bottom: -32px;
            position: absolute;
            background: url("/ressources/images/section-after.svg") no-repeat;
            background-size: cover;
            -webkit-filter: drop-shadow( 0 0 25px rgba(0, 0, 0, 1));
            filter: drop-shadow( 0 0 25px rgba(0, 0, 0, 1));
            z-index: -1;
        }


    }


</style>