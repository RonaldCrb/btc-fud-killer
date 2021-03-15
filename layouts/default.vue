<template>
  <v-app dark>
    <v-app-bar clipped-right fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="darkModeToggle()">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="drawer" temporary clipped fixed right app>
      <v-list>
        <Logo />
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'home',
          to: '/',
        },
        {
          icon: 'mdi-information-variant',
          title: 'about',
          to: '/about',
        },
        {
          icon: 'mdi-image',
          title: 'memes',
          to: '/memes',
        },
        {
          icon: 'mdi-comment-quote',
          title: 'quotes',
          to: '/quotes',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BTC FUD KILLER',
    }
  },
  methods: {
    darkModeToggle() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
