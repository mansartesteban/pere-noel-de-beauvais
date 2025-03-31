<template>
  <div class="contact-main">
    <div class="input-control">
      <label for="type-request">Quel est l'objet de votre demande ?</label>
      <select
        name="subject"
        id="type-request"
        v-model="mailSubjectSelected"
      >
        <option
          v-for="(mailSubject, i) in mailSubjectsList"
          :key="'mail-subject-option' + i"
          :value="mailSubject.value"
        >
          {{ mailSubject.label }}
        </option>
      </select>
    </div>

    <div>
      <div class="input-control">
        <label for="content-mail">
          {{ mailSubjectsList[mailSubjectSelected].answer }}
        </label>
        <!-- <vue-editor class="input-control" v-model="mailContent" /> -->
      </div>
      <button
        class="btn dark submit"
        @click="sendMail"
      >
        Envoyer
      </button>
    </div>
  </div>
</template>
<script>
  // import emailjs from 'emailjs-com';

  export default {
    name: "ContactMain",
    data() {
      return {
        mailSubjectSelected: 0,
        mailSubjectsList: [
          {
            label: "Je voudrais réserver un passage chez moi",
            answer: "Expliquez-nous en un peu plus sur votre demande",
            value: "1",
          },
          {
            label: "Je souhaite me renseigner sur vos prestations",
            answer: "Très bien, je vous écoute",
            value: "2",
          },
          {
            label: "Je voulais vous remercier pour ...",
            answer: "Oh, c'est gentil ! Dites m'en plus !",
            value: "3",
          },
          {
            answer: "Expliquez-nous en un peu plus sur votre demande",
            label: "Je suis professionnel, une association ou un école",
            value: "4",
          },
          {
            answer: "Dites-nous ce qui vous amène",
            label: "Autre",
            value: "0",
          },
        ],
        mailContent: "",
      };
    },
    methods: {
      sendMail() {
        console.log(
          "Quelqu'un peut m'aider ? Je ne sais pas comment envoyer des mails via VueJS côté client. Je sais que ça ne devrait pas se faire comme ça mais du coup, quelle serait la bonne méthode pour envoyer un mail en sachant que c'est un site front-end qui n'a pas de back ?"
        );
      },
    },
  };
</script>
