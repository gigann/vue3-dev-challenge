<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";
import { store } from "../store/store";

const props = defineProps({
  title: String,
  category: String,
  isBookmarked: Boolean, // by default
  img: String,
});

const isBookmarked = ref(props.isBookmarked);

const imageURL = computed(
  () =>
    `url(${new URL(`../assets/images/${props.img}.jpg`, import.meta.url).href})`
);

</script>

<template>
  <div
  v-if="isBookmarked || store.isFiltered(props.category) || store.filters.length === 0"
  class="card"
  :style="{ backgroundImage: imageURL}"
  >
    <div class="card-buttons">
      <button class="bookmarked-button" v-if="isBookmarked" @click="isBookmarked = !isBookmarked"><span class="material-symbols-outlined" >bookmark</span></button>
      <button class="not-bookmarked-button" v-if="!isBookmarked" @click="isBookmarked = !isBookmarked"><span class="material-symbols-outlined">bookmark</span></button>
      <button class="menu-button"><span class="material-symbols-outlined">menu</span></button>
    </div>

    <div class="card-category">
      <span class="material-symbols-outlined">lightbulb</span>{{ category }} •
      Resources
    </div>
    <div class="card-title">{{ title }}</div>
  </div>
</template>
