<template>
    <div>
        <v-container
            style="position: fixed; z-index: 100; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 1);"
            v-show="isDetail"
            fluid
        >
                <v-layout
                        align-center
                        justify-center
                        row fill-height
                        style="height: 90vh"
                >
                    <v-btn
                            absolute
                            dark
                            fab
                            left
                            color="transparent"
                            @click="() => this.currentPage--"
                    >
                        <v-icon large>chevron_left</v-icon>
                    </v-btn>
                    <v-flex>
                        <img :src="photos[currentIndex] ? photos[currentIndex].normalSrc : ''" class="d-block ma-auto" style="max-width: 95vw; max-height: 90vh">
                    </v-flex>
                    <v-btn
                            absolute
                            dark
                            fab
                            right
                            color="transparent"
                            @click="() => this.currentPage++"
                    >
                        <v-icon large>chevron_right</v-icon>
                    </v-btn>
                </v-layout>
                <infinite-loading
                        v-if="currentPage === photos.length"
                        @infinite="infiniteHandler"
                ></infinite-loading>
        </v-container>

        <v-container
                v-bind="{ ['grid-list-xs']: true }"
                fluid
        >
            <scroll-lock :lock="false" :body-lock="isDetail">
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
                        @click="onClickCard(index)"

                >
                    <v-hover>
                        <v-card
                                slot-scope="{ hover }"
                                :style="`border: ${hover ? 2 : 0}px solid white; margin: -${hover ? 2 : 0}px;`"
                                ref="element"
                        >
                            <v-img
                                    :src="photo.minSrc"
                                    :height="MIN_PHOTO_WIDTH"
                            >
                                <v-container
                                        fill-height
                                        fluid
                                        pa-2
                                >
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <div class="white--text">{{ convertPhotoDate(photo) }}</div>
                                            <div class="white--text">{{ photo.title }}</div>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
            </scroll-lock>
            <infinite-loading
                    @infinite="infiniteHandler"
            ></infinite-loading>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { convertPhotoDate } from '../helpers.js'

export default {
    props: ['isDetail'],
    data: () => ({
        MIN_PHOTO_WIDTH: 250,
        mediaStyle: '',
        width: null,
    }),
    computed: {
        ...mapGetters(['getPhotos', 'getCurrentPage']),
        photos () {
            return this.getPhotos
        },
        currentPage: {
            get () {
                return this.getCurrentPage
            },
            set (val) {
                if (val > 0 && val < this.photos.length + 1) this.setCurrentPage(val) //TODO отрицательные страницы
            }
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
    created () {
        const vm = this
        vm.mediaStyle = `width: ${(100 / (Math.floor(document.body.clientWidth / vm.MIN_PHOTO_WIDTH)))}%`
        window.onresize = function (evt) {
            vm.mediaStyle = `width: ${(100 / (Math.floor(evt.target.innerWidth / vm.MIN_PHOTO_WIDTH)))}%`
        }
    },
    mounted() {},
    methods: {
        ...mapMutations(['setCurrentPage']),
        infiniteHandler ($state) {
           const length = this.photos.length
           this.$store.dispatch('addPhotos', {amount: length}).then(() => {
               if(length === this.photos.length) $state.complete()
               else $state.loaded()
           }).catch(() => {
               $state.error()
           })
        },
        onClickCard (index) {
           this.$emit('isDetail', true)
           this.currentIndex = index
        },
        convertPhotoDate (photo) {return convertPhotoDate(photo)}
    }
}
</script>

<style scoped>
</style>
