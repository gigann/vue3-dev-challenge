<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";
import categories from "../assets/categories";
import { store } from "../store/store";


</script>

<template>
  <button
  v-if="store.filters.length === 0"
  class="filter-button-selected"
  @click=""
  >
    <span class="material-symbols-outlined">check</span>ALL
  </button>

  <button
  v-if="store.filters.length > 0"
  class="filter-button-unselected"
  @click="store.clearFilters()"
  >
    ALL
  </button>

</template>


<!-- Notes

shows as checked if no filters are selected
if a filter is selected, shows as unchecked (and can be clicked)
if clicked, clears filters

-->