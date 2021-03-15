<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="searchTerm"
          label="Search"
          placeholder="Search for some fud"
          outlined
          @keyup="filterFudByTitle"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <span class="colortxt mb-4 mx-auto">Select a fud Category</span>
      <v-tabs background-color="transparent" centered show-arrows center-active>
        <v-tab
          v-for="(cat, i) in categories"
          :key="i"
          color="deep-orange"
          @click="selectCategory(cat)"
        >
          {{ cat }}
        </v-tab>
      </v-tabs>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchTerm: '',
  }),
  computed: {
    categories() {
      return this.$store.state.fud.categories
    },
  },
  methods: {
    selectCategory(cat) {
      this.$store.dispatch('fud/selectCategory', cat)
      this.$store.dispatch('fud/filterFudByCat', cat)
    },
    filterFudByTitle() {
      this.$store.dispatch('fud/filterFudByTitle', this.busqueda)
    },
  },
}
</script>
