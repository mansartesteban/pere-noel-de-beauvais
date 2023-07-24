<template>
    <button :class="{hidden: !show}" class="fab" @click="scrollToTop">
        <div class="arrow-fab"></div>
    </button>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: false,
            default: () => false
        },
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>
<style>
    .arrow-fab {
        background: linear-gradient(var(--color-primary-1), var(--color-primary-2));
        -webkit-mask: url(/ressources/icons/arrow-up.svg) no-repeat center;
        mask: url(/ressources/icons/arrow-up.svg) no-repeat center;
        height: 64px; width: 64px;
    }
</style>