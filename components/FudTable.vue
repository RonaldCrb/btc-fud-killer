<template>
  <div>
    <v-row v-for="(f, i) in fud" :key="i">
      <v-col>
        <v-card class="ma-2 text-white" color="primary">
          <v-row>
            <v-card-text>
              <h2 class="ma-2">
                {{ f.title }}
              </h2>
            </v-card-text>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p
                v-for="(a, l) in f.arguments"
                :key="l"
                class="ma-2 elevation-0"
                color="secondary"
              >
                {{ a }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-chip
                v-for="(c, j) in f.categories"
                :key="j"
                class="ma-1 elevation-4"
                color="secondary"
              >
                {{ c }}
              </v-chip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    fud() {
      return this.$store.state.fud.filteredFud
    },
  },
  created() {
    this.$store.dispatch('fud/setCategories')
  },
}
</script>
