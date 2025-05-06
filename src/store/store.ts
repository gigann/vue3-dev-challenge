import { reactive } from 'vue'

export const store = reactive({
  filters: [] as string[],
  addFilter(category: string) {
    if (!(this.filters.find(e => e === category))) {
      this.filters.push(category);
      console.log(`Added ${category} filter`);
    }
  },
  removeFilter(category: string) {
    const index = this.filters.indexOf(category);
    if (index > -1) {
      this.filters.splice(index, 1)
      console.log(`Removed ${category} filter`);
    }
  },
  clearFilters() {
    this.filters.splice(0, this.filters.length);
    console.log(`Removed all filters`);
  },
  isFiltered(category: string) {
    if (this.filters.find(e => e === category)) {
      return true;
    }
    else return false;
  }
})