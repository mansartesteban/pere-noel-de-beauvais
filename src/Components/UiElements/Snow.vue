<template>
    <div class="snow-wrapper">
    <div class="snow layer1 b"></div>
    <div class="snow layer1 a"></div>
    <div class="snow layer1"></div> 
    <div class="snow layer2 b"></div>
    <div class="snow layer2 a"></div>
    <div class="snow layer2"></div>
    <div class="snow layer3 b"></div>
    <div class="snow layer3 a"></div>
    <div class="snow layer3"></div>
    </div>
</template>

<script>
import Numbers from "@/Utils/Numbers"

export default {
    name: "Snow",
    computed: {
        getMaxDepth() {
            let tmp = this.flakeToGenerate
            tmp = tmp.sort((a, b) => b.depth - a.depth)
            return tmp[0].depth + 1
        }
    },
    data() {
        return {
            flakeToGenerate: [
                {depth: 6, amount: 100},
                {depth: 4, amount: 50},
                {depth: 2, amount: 25},
                {depth: 0, amount: 10},
            ],
            flakes: [],
            speed: 1,
        }
    },
    methods: {
        animate() {
            this.flakes.map((flake) => {
                flake.y = flake.y >= 100 ? -5 : flake.y+ ((1/flake.depth) * this.speed * flake.relativeSpeed) 
                flake.x = flake.x >= 100 ? -5 : flake.x+this.speed/(8)* flake.relativeSpeed
            })
            window.requestAnimationFrame(this.animate)
        },
    },
    mounted() {


        for (let fl of this.flakeToGenerate) {
            for (let i = 0 ; i < fl.amount ; i++) {
                this.flakes.push({
                    depth: fl.depth,
                    x: Numbers.rand(0, 100),
                    y: Numbers.rand(0, 100),
                    relativeSpeed: Math.random()+.5
                })
            }
        }

        requestAnimationFrame(this.animate)
    }

}
</script>

<style lang="scss">
    .snow-wrapper {
        position: fixed;
        width: 100%;
        height: 80vh;
        z-index: -1;
    }

    $s1:"";
    $s2:"";
    $s3:"";
    $max:500;
    @for $i from 1 through $max {
        $s1: $s1 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
        $s2: $s2 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
        $s3: $s3 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
        @if $i < $max {
            $s1: $s1 + ",";
            $s2: $s2 + ",";
            $s3: $s3 + ",";
        }
    }
    .snow {
        border-radius: 50%;
        opacity: .75;
        position: absolute;
        top:-100vh;
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .layer1 {
        width: 7.5px;
        height: 7.5px;
        filter:blur(1px);
        box-shadow: #{$s1};
        animation-duration: 60s;
    }
    .layer1.a {
        animation-delay: -15s;
    }
    .layer1.b {
        animation-delay: -30s;
    }
    .layer2 {
        width: 5px;
        height: 5px;
        filter:blur(1px);
        box-shadow: #{$s2};
        animation-duration: 90s;
    }
    .layer2.a {
        animation-delay: -22.5s;
    }
    .layer2.b {
        animation-delay: -45s;
    }
    .layer3 {
        width: 3px;
        height: 3px;
        filter:blur(1px);
        box-shadow: #{$s3};
        animation-duration: 120s;
    }
    .layer3.a {
        animation-delay: -30s;
    }
    .layer3.b {
        animation-delay: 60s;
    }
    @keyframes fall {
        100% {
            transform: translateY(300vh); 
        }
    }
</style>