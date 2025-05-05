<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";

const props = defineProps({
  title: String,
  category: String,
  isBookmarked: Boolean,
  img: String,
});

const imageURL = computed(
  () =>
    `url(${new URL(`../assets/images/${props.img}.jpg`, import.meta.url).href})`
);
</script>

<template>
  <div class="card" :style="{ backgroundImage: imageURL }">
    <div class="card-buttons">
      <button class="bookmark-button"><span class="material-symbols-outlined">bookmark</span></button>
      <button class="menu-button"><span class="material-symbols-outlined">menu</span></button>
    </div>

    <div class="card-category">
      <span class="material-symbols-outlined">lightbulb</span>{{ category }} •
      Resources
    </div>
    <div class="card-title">{{ title }}</div>
  </div>
</template>
