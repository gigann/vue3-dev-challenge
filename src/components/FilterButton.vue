<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";

const selected = ref(false);

const props = defineProps({
  category: String,
});
</script>

<template>
  <button v-if="selected" class="filter-button-selected" :id="props.category" @click="selected = false">
    <span class="material-symbols-outlined">check</span>{{ props.category }}
  </button>
  <button v-if="!selected" class="filter-button-unselected" @click="selected = true">
    {{ props.category }}
  </button>

</template>
