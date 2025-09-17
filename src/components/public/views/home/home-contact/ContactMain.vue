<template>
  <div class="flex flex-col gap-8 mt-8">
    <div class="input-control">
      <label for="type-request">Quel est l'objet de votre demande ?</label>
      <select
        class="w-full rounded-xl border border-gray-300 p-4 mt-2"
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

      <input
        :value="
          mailSubjectsList.find((v) => v.value === mailSubjectSelected)?.label
        "
        name="subject"
        class="hidden"
      />
    </div>

    <div class="flex flex-col items-center">
      <div class="input-control w-full">
        <label for="content-mail">
          {{
            mailSubjectsList.find((v) => v.value === mailSubjectSelected)
              ?.answer
          }}
        </label>
        <Editor
          v-model="mailContent"
          hide-toolbar
          class="p-4 mt-4 w-full"
        ></Editor>
        <input
          v-model="computedMailContent"
          name="message"
          class="hidden"
        />
        <div
          v-if="mailContent.length < 20"
          class="text-red-500 mt-2"
        >
          Veuillez renseigner un message
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const mailSubjectSelected = ref(0);
  const mailSubjectsList = ref([
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
      label: "Je suis professionnel, une association ou une école",
      value: "4",
    },
    {
      answer: "Dites-nous ce qui vous amène",
      label: "Autre",
      value: "0",
    },
  ]);
  const mailContent = defineModel();
  const computedMailContent = computed(() => {
    return mailContent.value
      .replace("<p>", "")
      .replace("</p>", "")
      .replace("<br>", "\n");
  });
</script>
