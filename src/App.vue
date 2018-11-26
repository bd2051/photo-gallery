<template>
  <v-app style="background-color: black;">
      <v-toolbar app style="background-color: black;">
          <v-toolbar-title  class="headline text-uppercase" style="margin-right: auto !important">
              <div v-if="isDetail">
                  <span class="font-weight-light white--text">{{ currentPageDate }} {{ currentPageTitle }}</span>
              </div>
              <div v-else>
                  <span class="white--text">фото</span>
                  <span class="font-weight-light white--text">альбом</span>
              </div>
          </v-toolbar-title>


          <v-dialog
                  v-if="isDetail"
                  v-model="deleteDialog"
          >
              <v-btn slot="activator" flat icon color="white">
                  <v-icon>delete</v-icon>
              </v-btn>
              <delete-photo-modal
                      @deleteDialog="() => this.deleteDialog = false"
              />
          </v-dialog>


          <v-dialog
                  v-if="isDetail"
                  v-model="editerDialog"
          >
              <v-btn slot="activator" flat icon color="white">
                  <v-icon>edit</v-icon>
              </v-btn>
              <editer-modal
                      @editerDialog="() => this.editerDialog = false"
              />
          </v-dialog>


          <v-dialog
                  v-if="!isDetail"
                  v-model="filterDialog"
          >
              <v-btn slot="activator" flat icon color="white">
                  <v-icon>search</v-icon>
              </v-btn>
              <filter-modal
                      @filterDialog="() => this.filterDialog = false"
              />
          </v-dialog>


          <v-btn v-if="isDetail" flat icon color="white" @click="() => isDetail=false">
              <v-icon>close</v-icon>
          </v-btn>
      </v-toolbar>


      <v-content ref="content">
          <gallery
              :isDetail="isDetail"
              @isDetail="(val) => isDetail = val"
          />
      </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { convertPhotoDate } from './helpers.js'
import Gallery from './components/Gallery'
import FilterModal from './components/modal/filter'
import EditerModal from './components/modal/editer'
import DeletePhotoModal from './components/modal/deletePhoto'

export default {
  name: 'App',
  components: {
      FilterModal,
      EditerModal,
      DeletePhotoModal,
      Gallery
  },
  data () {
      return {
          isDetail: false,
          filterDialog: false,
          editerDialog: false,
          deleteDialog: false,
          scroll: null
      }
  },
  computed: {
      ...mapGetters(['getPhotos', 'getCurrentPage']),
      currentPageTitle () {
          return this.getPhotos[this.getCurrentPage - 1].title
      },
      currentPageDate () {
          return convertPhotoDate(this.getPhotos[this.getCurrentPage - 1])
      }
  },
  mounted() {
  },
  updated() {
      if(this.scroll) {
          this.$vuetify.goTo(this.scroll)
          this.scroll = null
      }
  },
  methods: {
  }
}
</script>
