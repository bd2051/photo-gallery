<template>
  <v-app style="background-color: black;">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content ref="content">
      <gallery
      />
    </v-content>
  </v-app>
</template>

<script>
import Gallery from './components/Gallery'

export default {
  name: 'App',
  components: {
    Gallery
  },
  data () {
    return {
      //
    }
  },
  mounted() {
  }
}
</script>
