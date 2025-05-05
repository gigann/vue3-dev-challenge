<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";

const props = defineProps({
  title: String,
  category: String,
  isBookmarked: Boolean,
  img: String,
});

const imageURL = computed(() => `url(${new URL(`../assets/images/${props.img}.jpg`, import.meta.url).href})`);



</script>

<template>
  <div
  class="card" :style="{backgroundImage: imageURL }">
    <div class="category">{{ category }} • Resources</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

