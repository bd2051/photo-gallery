<template>
  <v-app style="background-color: black;">
    <v-toolbar app style="background-color: black;">
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn-->
        <!--flat-->
        <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
        <!--target="_blank"-->
      <!--&gt;-->
        <!--<span class="mr-2">Latest Release</span>-->
      <!--</v-btn>-->11
      <v-btn v-if="isDetail" flat icon color="white" @click="isDetail=false">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title  class="headline text-uppercase" style="margin-right: auto !important">
          <div v-if="isDetail">
              <span class="font-weight-light white--text">18/11/2018 Filename</span>
          </div>
          <div v-else>
              <span class="white--text">фото</span>
              <span class="font-weight-light white--text">альбом</span>
          </div>
       </v-toolbar-title>
      <v-btn v-if="isDetail" style="margin-left: auto !important" flat icon color="white">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn flat icon color="white">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content ref="content">
      <gallery
              :isDetail="isDetail"
              @isDetail="(val) => {isDetail = val}"
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
      isDetail: false,
    }
  },
  mounted() {
  }
}
</script>
