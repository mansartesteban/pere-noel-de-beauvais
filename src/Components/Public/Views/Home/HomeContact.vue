<template>
  <div
    class="contact section"
    id="home-contact"
  >
    <form
      action="https://formspree.io/f/xovjgqyj"
      method="POST"
      id="contact-form"
    >
      <div class="contact-subsection">
        <div class="contact-left">
          <div class="contact-title title">Contactez-nous</div>
          <div class="input-control">
            <label for="name">Nom et prénom</label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div class="input-control">
            <label for="mail">Adresse E-Mail</label>
            <input
              type="text"
              id="mail"
              name="email"
            />
          </div>
          <div class="input-control">
            <label for="phone">Numéro de téléphone</label>
            <input
              type="text"
              id="phone"
              name="phone"
            />
          </div>
        </div>
        <div class="contact-right">
          <img
            src="/ressources/images/contact-tablet.svg"
            alt=""
          />

          <div class="contact-details">
            <div class="contact-detail-row">
              <img
                class="icon"
                src="/ressources/icons/telephone.png"
                alt=""
                height="32"
                width="32"
              />
              <span>06 60 74 36 89</span>
            </div>

            <div class="contact-detail-row">
              <img
                class="icon"
                src="/ressources/icons/mailbox.png"
                alt=""
                height="32"
                width="32"
              />
              <span
                ><a
                  href="mailto:leperenoeldebeauvais@gmail.com"
                  style="color: black"
                  >leperenoeldebeauvais@gmail.com</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>

      <ContactMain></ContactMain>
    </form>
  </div>
</template>

<script setup>
  import ContactMain from "./home-contact/ContactMain.vue";
</script>
