<template>
    <div class="contact section" id="home-contact">

        <form action="https://formspree.io/f/xovjgqyj" method="POST" id="contact-form">
            <div class="contact-subsection">
                <div class="contact-left">
                    <div class="contact-title title">Contactez-nous</div>
                    <div class="input-control">
                        <label for="name">Nom et prénom</label>
                        <input type="text" id="name" name="name">
                    </div>
                    <div class="input-control">
                        <label for="mail">Adresse E-Mail</label>
                        <input type="text" id="mail" name="email">
                    </div>
                    <div class="input-control">
                        <label for="phone">Numéro de téléphone</label>
                        <input type="text" id="phone" name="phone">
                    </div>
                </div>
                <div class="contact-right">
                    <img src="/ressources/images/contact-tablet.svg" alt="">

                    <div class="contact-details">
                        
                        <div class="contact-detail-row">
                            <img class="icon" src="/ressources/icons/telephone.png" alt="" height="32" width="32">
                            <span>06 60 74 36 89</span>
                        </div>

                        <div class="contact-detail-row">
                            <img class="icon" src="/ressources/icons/mailbox.png" alt="" height="32" width="32">
                            <span><a href="mailto:leperenoeldebeauvais@gmail.com" style="color: black">leperenoeldebeauvais@gmail.com</a></span>
                        </div>

                    </div>
                </div>
            </div>

            <ContactMain></ContactMain>
        </form>
    </div>
</template>

<script setup>
import ContactMain from "./home-contact/ContactMain.vue"
</script>

<style scoped>
.contact {

    display: flex;
    flex-direction: column;
}

.contact-subsection {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
}

.contact-left {
    min-width: 40%;
}

.contact-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: flex-end
}

.contact-right > img {
    width: 40vw;
    height: auto;
    /*position: absolute;*/
    /*top: -14vh;*/
}

.contact-title {
    background: linear-gradient(var(--color-primary-1), var(--color-primary-2)) no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contact-details {
    margin-top: 2em;
    font-family: PermanentMarker;
}

.contact-detail-row {
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 1em;
}


</style>