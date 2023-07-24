<template>
    <div class="contact-main">

        <div class="input-control">
            <label for="type-request">Quel est l'objet de votre demande ?</label>
            <select name="type-request" id="type-request" v-model="mailSubjectSelected">
                <option v-for="(mailSubject, i) in mailSubjectsList" :key="'mail-subject-option' + i" :value="mailSubject.value">
                    {{ mailSubject.label }}
                </option>
            </select>
        </div>

        <div>
            <div class="input-control">
                <label for="content-mail">
                    {{ mailSubjectsList[mailSubjectSelected].answer }}
                </label>
                <vue-editor class="input-control" v-model="mailContent" />
            </div>
            <button class="btn dark submit" @click="sendMail">Envoyer</button>
        </div>
    </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
    name: "ContactMain",
    data() {
        return {
            mailSubjectSelected: 0,
            mailSubjectsList: [
                {
                    label: "Je voudrais réserver un passage chez moi",
                    answer: "Expliquez-nous en un peu plus sur votre demande",
                    value: "1"
                },
                {
                    label: "Je souhaite me renseigner sur vos prestations",
                    answer: "Très bien, je vous écoute",
                    value: "2"
                },
                {
                    label: "Je voulais vous remercier pour ...",
                    answer: "Oh, c'est gentil ! Dites m'en plus !",
                    value: "3"
                },
                {
                    answer: "Expliquez-nous en un peu plus sur votre demande",
                    label: "Je suis professionnel, une association ou un école",
                    value: "4"
                },
                {
                    answer: "Dites-nous ce qui vous amène",
                    label: "Autre",
                    value: "0"
                }
            ],
            mailContent: "",
        }
    },
    methods: {
        sendMail() {
            console.log("Quelqu'un peut m'aider ? Je ne sais pas comment envoyer des mails via VueJS côté client. Je sais que ça ne devrait pas se faire comme ça mais du coup, quelle serait la bonne méthode pour envoyer un mail en sachant que c'est un site front-end qui n'a pas de back ?")
            // try {
            //     emailjs.sendForm('service_0pnpi3d', 'template_62zgdjd', document.getElementById("contact-form"),
            //     'esteban.mansart@gmail.com', {
            //     name: "Estbena Pas Mansart",
            //     email: "edlzaknd@google.com",
            //     message: this.mailContanct
            //     }, "RQEmao1hLfpCFzInlkAxt")

            // } catch(error) {
            //     console.log({error})
            // }
        // this
        //     .$loadScript("https://smtpjs.com/v3/smtp.js")
        //     .then(() => {
        //         console.log(Email)
        //         Email
        //             .send({
        //                 Host : "smtp.hostinger.com",
        //                 Port: "465",
        //                 Username : "contact@pere-noel-de-beauvais.com",
        //                 Password : "LRa@ZY8dD&8fMesA",
        //                 To : 'esteban.mansart@gmail.com',
        //                 From : "noreply@pere-noel-de-beauvais.com",
        //                 Subject : this.mailSubjectsList[this.mailSubjectSelected].label,
        //                 Body : this.mailContent

        //             })
        //             .then(message => {
        //                 console.log("message", message)
        //             })
        //     })
            
        }
    }
}
</script>


<style lang="scss">

.quillWrapper {
    border: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .25);
    outline: none;
    margin-top: .5em;   
    transition: box-shadow .3s ease-in-out;

    & > .ql-toolbar {
        border-radius: 8px 8px 0 0;
        border: 0 !important;
        background: linear-gradient(var(--color-primary-1), var(--color-primary-2));
    }
    & > .ql-container {
        border: 0 !important;
    }

    .ql-fill {
        fill: white !important;
    }
    .ql-stroke {
        stroke: white !important;
    }
    .ql-picker-label {
        color: white !important;
    }
}
    
</style>