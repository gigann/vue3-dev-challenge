<script setup lang="ts">
import { computed, ref } from "vue";
import "material-symbols";
import { store } from "../store/store";
import categories from "../assets/categories";

const selected = ref(false);

const props = defineProps({
  category: String,
});

const onClick = () => {
  if (props.category) {
    if (store.isFiltered(props.category)) {
      store.removeFilter(props.category);
    } else {
      store.addFilter(props.category);

      if (store.filters.length === categories.length) {
        store.clearFilters();
      }
    }
  }
};
</script>

<template>
  <button
    v-if="!store.isFiltered(props.category)"
    class="filter-button-unselected"
    @click="onClick"
  >
    {{ props.category }}
  </button>

  <button
    v-if="store.isFiltered(props.category)"
    class="filter-button-selected"
    :id="props.category"
    @click="onClick"
  >
    <span class="material-symbols-outlined">check</span>{{ props.category }}
  </button>
</template>
