<script setup lang="ts">
import "material-symbols";
import resources from "./assets/resources";
import categories from "./assets/categories";
import Card from "./components/Card.vue";
import FilterButton from "./components/FilterButton.vue";
import FilterAllButton from "./components/FilterAllButton.vue";
import ShowMoreButton from "./components/ShowMoreButton.vue";
</script>

<template>
  <div class="resource-header">
    <h1>Your Resources</h1>
    <div class="header-buttons">
      <div class="header-button">
        <span class="material-symbols-outlined">add</span>
      </div>
      <div class="header-button">
        <span class="material-symbols-outlined">edit</span>
      </div>
      <div class="header-button">
        <span class="material-symbols-outlined">list</span>
      </div>
      <div class="header-button">
        <span class="material-symbols-outlined">sort</span>
      </div>
    </div>
  </div>
  <p>View and bookmark resources.</p>

  <div class="filter-buttons">
    <FilterAllButton />

    <div class="specific-filters">
      <FilterButton
        v-for="(item, index) in categories"
        :key="index"
        :category="item"
      />
    </div>
  </div>

  <div class="card-container">
    <Card
      v-for="(item, index) in resources"
      :key="index"
      :title="item.title"
      :category="item.category"
      :isBookmarked="item.isBookmarked"
      :img="item.img"
    />
  </div>

  <ShowMoreButton/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
