<template>
  <div>
    <div
      v-if="!hideToolbar"
      class="flex gap-2 -mx-4 mb-2 bg-primary-500 rounded-xl"
    >
      <!-- Bold -->
      <button
        @click="toggleBold"
        :class="buttonClass(editor?.isActive('bold'))"
      >
        <BoldIcon class="w-4 h-4"></BoldIcon>
      </button>

      <!-- Italic -->
      <button
        @click="toggleItalic"
        :class="buttonClass(editor?.isActive('italic'))"
      >
        <ItalicIcon class="w-4 h-4"></ItalicIcon>
      </button>

      <!-- Underline -->
      <button
        @click="toggleUnderline"
        :class="buttonClass(editor?.isActive('underline'))"
      >
        <UnderlineIcon class="w-4 h-4"></UnderlineIcon>
      </button>

      <!-- Link -->
      <button
        @click="setLink"
        :class="buttonClass(editor?.isActive('link'))"
      >
        <LinkIcon class="w-4 h-4"></LinkIcon>
      </button>

      <!-- Image -->
      <button
        @click="addImage"
        :class="buttonClass(false)"
      >
        <PhotoIcon class="w-4 h-4"></PhotoIcon>
      </button>
    </div>
    <editor-content
      v-model="model"
      :editor="editor"
      class="border border-black/20 rounded-xl p-2 -m-4 mt-4 text-left overflow-auto"
    />
  </div>
</template>

<script setup>
  import { EditorContent, useEditor } from "@tiptap/vue-3";
  import StarterKit from "@tiptap/starter-kit";
  import Underline from "@tiptap/extension-underline";
  import Link from "@tiptap/extension-link";
  import Image from "@tiptap/extension-image";

  import {
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    PhotoIcon,
    LinkIcon,
  } from "@heroicons/vue/16/solid";

  const emit = defineEmits(["update:modelValue"]);

  const props = defineProps({
    hideToolbar: {
      type: Boolean,
      default: false,
    },
  });

  const model = defineModel();
  const onUpdate = () => {
    emit("update:modelValue", editor.value.getHTML());
  };
  const editor = useEditor({
    content: model.value,
    extensions: [StarterKit, Underline, Link, Image],
    onUpdate,
  });

  const toggleBold = (e) => {
    e.preventDefault();
    editor.value.chain().focus().toggleBold().run();
  };

  const toggleItalic = (e) => {
    e.preventDefault();
    editor.value.chain().focus().toggleItalic().run();
  };

  const toggleUnderline = (e) => {
    e.preventDefault();
    editor.value.chain().focus().toggleUnderline().run();
  };

  const setLink = (e) => {
    e.preventDefault();
    const url = prompt("Entrer l’URL");
    if (url) {
      editor.value
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const addImage = (e) => {
    e.preventDefault();
    const url = prompt("Entrer l’URL de l’image");
    if (url) {
      editor.value.chain().focus().setImage({ src: url }).run();
    }
  };

  const buttonClass = (active) => {
    return [
      "rounded-md",
      active
        ? "bg-white m-2 p-2 text-primary-500"
        : "p-4 text-white hover:bg-gray-100",
    ];
  };
</script>

<style>
  .ProseMirror {
    height: 6rem;
  }
</style>
