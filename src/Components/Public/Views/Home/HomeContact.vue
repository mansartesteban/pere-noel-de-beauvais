<template>
  <Section id="home-contact">
    <form
      ref="contactForm"
      action="https://formspree.io/f/xovjgqyj"
      method="POST"
      @submit.prevent="sendMail"
      id="contact-form"
    >
      <div
        class="bg-white rounded-xl drop-shadow-xl p-4 text-gray-900 text-left"
      >
        <div class="flex flex-col gap-8">
          <div
            class="py-4 -mx-8 bg-primary-500 text-white text-center font-[PermanentMarker] text-2xl shadow-xl rounded-xl"
          >
            Contactez-nous
          </div>
          <div v-for="input in form">
            <label :for="input.name">{{ input.label }}</label>
            <input
              v-model="input.model"
              class="rounded-xl border border-gray-300 p-4 mt-2 w-full placeholder:text-gray-200 placeholder:italic"
              :class="{
                'border border-red-500': input.errors.length > 0,
              }"
              :placeholder="'Exemple : ' + input.placeholder"
              :type="input.text"
              :id="input.name"
              :name="input.name"
              @change="input.onChange"
            />
            <div class="text-red-500 mt-2">
              {{ input.errors.join("\n") }}
            </div>
          </div>
        </div>
        <ContactMain v-model="mailContent"></ContactMain>
        <div class="flex justify-center">
          <input
            type="submit"
            class="bg-primary-500 text-white px-16 py-4 rounded-xl mt-8"
          />
        </div>
      </div>
      <div class="mt-16">
        <div class="flex flex-col gap-8 items-center">
          <div class="flex flex-col items-center gap-4">
            <img
              class="icon"
              src="/ressources/icons/telephone.png"
              alt=""
              height="32"
              width="32"
            />
            <span>06 60 74 36 89</span>
          </div>

          <div class="flex flex-col items-center gap-4">
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
    </form>
  </Section>
</template>

<script setup>
  import ContactMain from "./home-contact/ContactMain.vue";
  const contactForm = ref();

  const mailContent = ref("");
  const form = ref([
    {
      label: "Nom et prénom",
      name: "name",
      placeholder: "Isabelle Delamarre",
      type: "text",
      errors: [],
      model: "",
    },
    {
      label: "Adresse E-Mail",
      name: "email",
      placeholder: "isabelle.delamarre@gmail.com",
      type: "email",
      errors: [],
      model: "",
    },
    {
      label: "Numéro de téléphone",
      name: "phone",
      placeholder: "0612345678",
      type: "text",
      errors: [],
      model: "",
    },
  ]);

  form.value.forEach((input) => {
    input.onChange = () => {
      input.errors = [];
    };
  });
  const sendMail = (e) => {
    form.value.forEach((input) => {
      if (input.name === "email") {
        if (input.model === "") {
          input.errors.push("Vous devez renseigner une adresse e-mail valide");
        }
      }

      if (input.name === "phone") {
        if (input.model === "") {
          input.errors.push(
            "Vous devez renseigner un numéro de téléphone valide"
          );
        }
      }

      if (input.name === "name") {
        if (input.model === "") {
          input.errors.push("Veuillez renseigner un nom et/ou un prénom");
        }
      }

      if (mailContent.value.length < 20) {
        return;
      }
    });

    if (form.value.every((input) => input.errors.length === 0)) {
      contactForm.value.submit();
    }
  };
</script>
