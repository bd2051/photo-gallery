<template>
    <div>
        <div v-if="isDetail">
            <v-carousel
                    hide-delimiters
                    :cycle="false"
                    :height="'80vh'"
                    v-model="currentIndex"
            >
                <v-carousel-item
                        v-for="(photo, index) in photos"
                        :key="'a'+index"
                >
                    <v-layout align-center justify-center row fill-height>
                        <v-flex>
                            <img :src="photo.src" class="d-block ma-auto" style="max-width: 90vw; max-height: 75vh">
                        </v-flex>
                    </v-layout>
                </v-carousel-item>
            </v-carousel>
            <!--<v-card-text>-->
                <!--<div class="white&#45;&#45;text text-md-center">тег1, тег2, тег3, тег4, тег5</div>-->
            <!--</v-card-text>-->
            <v-layout align-center justify-center row fill-height>
                <v-pagination
                        v-model="currentPage"
                        :length="photos.length"
                        circle
                        dark
                        :color="'success'"
                ></v-pagination>
            </v-layout>
        </div>

        <v-container
                v-else
                v-bind="{ ['grid-list-xs']: true }"
                fluid
        >
            <v-layout
                    row
                    wrap
                    align-content-start
                    ref="layout"
            >
                <v-flex :style="mediaStyle"
                        style="flex-grow: 0 !important"
                        v-for="(photo, index) in photos"
                        :key="index"
                        tag="a"
                        @click="() => {$emit('isDetail', true)}"

                >
                    <v-hover>
                        <v-card
                                slot-scope="{ hover }"
                                :style="`border: ${hover ? 2 : 0}px solid white; margin: -${hover ? 2 : 0}px;`"
                                ref="element"
                        >
                            <v-img
                                    :src="photo.src"
                                    :height="MIN_PHOTO_WIDTH"
                            >
                                <v-container
                                        fill-height
                                        fluid
                                        pa-2
                                >
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <div class="white--text">18/11/2018</div>
                                            <div class="white--text">filename</div>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
            <infinite-loading
                    @infinite="infiniteHandler"
            ></infinite-loading>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    props: ['isDetail'],
    data: () => ({
        MIN_PHOTO_WIDTH: 250,
        FLEX_K: 12,
        mediaStyle: '',
        currentPage: 1,
        width: null,
    }),
    created () {
        const vm = this
        vm.mediaStyle = `width: ${(100 / (Math.floor(document.body.clientWidth / vm.MIN_PHOTO_WIDTH)))}%`
        window.onresize = function (evt) {
            vm.mediaStyle = `width: ${(100 / (Math.floor(evt.target.innerWidth / vm.MIN_PHOTO_WIDTH)))}%`
        }
    },
    computed: {
        ...mapGetters(['getPhotos']),
        photos () {
            return this.getPhotos
        },
        currentIndex: {
            get () {
                return this.currentPage - 1
            },
            set (val) {
                this.currentPage = val + 1
            }
        },
    },
    methods: {
        infiniteHandler ($state) {
           const length = this.photos.length
           console.log(Date.now(), length)
           this.$store.dispatch('addPhotos', {amount: length}).then(() => {
               if(length === this.photos.length) $state.complete()
               else $state.loaded()
               console.log(Date.now(), $state)
           }).catch(() => {
               console.log('ошибка')
               $state.error()
           })
        },
    }
}
</script>

<style scoped>
</style>
