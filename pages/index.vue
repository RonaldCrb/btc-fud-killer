<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <Logo />
        <v-card-title class="headline">
          Welcome to the BTC FUD KILLER APP
        </v-card-title>
        <v-card-text>
          <p>
            here you can find the biggest curated collection of fud busting
            arguments and memes
          </p>
          <a
            href="https://github.com/RonaldCrb/btc-fud-killer"
            target="_blank"
            rel="noopener noreferrer"
          >
            link to github
          </a>
        </v-card-text>
        <CategoriesBar />
        <FudTable />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import CategoriesBar from '@/components/CategoriesBar'
import Logo from '@/components/Logo'
import FudTable from '@/components/FudTable'
export default {
  components: {
    FudTable,
    Logo,
    CategoriesBar,
  },
}
</script>
