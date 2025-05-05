<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";

const selected = ref(false);

</script>

<template>
  <button v-if="selected" class="filter-button-selected" @click="selected = false">
    <span class="material-symbols-outlined">check</span>ALL
  </button>
  <button v-if="!selected" class="filter-button-unselected" @click="selected = true">
    ALL
  </button>

</template>


<!-- Notes

whenever a filter button is clicked, check if all buttons are clicked
If they are, click the ALL button.

If the all button is clicked, clear out the other filter buttons


-->