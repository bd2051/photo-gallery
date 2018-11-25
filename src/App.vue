<template>
  <v-app style="background-color: black;">
    <v-toolbar app style="background-color: black;">
      <v-btn v-if="isDetail" flat icon color="white" @click="isDetail=false">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title  class="headline text-uppercase" style="margin-right: auto !important">
          <div v-if="isDetail">
              <span class="font-weight-light white--text">{{ currentPageDate }} {{ currentPageTitle }}</span>
          </div>
          <div v-else>
              <span class="white--text">фото</span>
              <span class="font-weight-light white--text">альбом</span>
          </div>
       </v-toolbar-title>
      <v-dialog v-if="isDetail"
                v-model="editerDialog"
      >
          <v-btn slot="activator" style="margin-left: auto !important" flat icon color="white">
            <v-icon>edit</v-icon>
          </v-btn>

          <v-card>
              <v-card-title
                      class="headline grey lighten-2"
                      primary-title
              >
                  Редактировать
              </v-card-title>

              <v-card-text>
                  Здесь будут поля для редактирования
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                          color="success"
                          flat
                          @click="editerDialog = false"
                  >
                      Ок
                  </v-btn>
                  <v-btn
                          color="error"
                          flat
                          @click="editerDialog = false"
                  >
                      Отмена
                  </v-btn>
              </v-card-actions>
          </v-card>

      </v-dialog>
      <v-dialog
                v-model="filterDialog"
      >
          <v-btn slot="activator" flat icon color="white">
            <v-icon>search</v-icon>
          </v-btn>

          <v-card>
              <v-card-title
                      class="headline grey lighten-2"
                      primary-title
              >
                  Фильтр
              </v-card-title>

              <v-card-text>
                  Здесь будут поля фильтра
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                          color="success"
                          flat
                          @click="filterDialog = false"
                  >
                      Ок
                  </v-btn>
              </v-card-actions>
          </v-card>

      </v-dialog>
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
import { mapGetters } from 'vuex';
import { convertPhotoDate } from './helpers.js'
import Gallery from './components/Gallery'

export default {
  name: 'App',
  components: {
    Gallery
  },
  data () {
    return {
      isDetail: false,
      filterDialog: false,
      editerDialog: false
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
      console.log(this, this.notes)
  }
}
</script>
