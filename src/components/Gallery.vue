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
                            <img :src="photo.src" class="d-block ma-auto" style="max-width: 90vw">
                        </v-flex>
                    </v-layout>
                </v-carousel-item>
            </v-carousel>
            <v-layout align-center justify-center row fill-height>
                <v-pagination
                        v-model="currentPage"
                        :length="photos.length"
                        circle
                        dark
                        :color="'success'"
                ></v-pagination>
            </v-layout>
            <!--<v-carousel-->
                    <!--hide-delimiters-->
                    <!--:cycle="false"-->
                    <!--:height="'10vh'"-->
                    <!--mandatory-->
            <!--&gt;-->
                <!--<v-carousel-item-->
                        <!--v-for="(photo, index) in photos"-->
                        <!--:key="'b'+index"-->
                        <!--disabled-->
                <!--&gt;-->
                    <!--<v-layout align-center justify-center row fill-height>-->
                        <!--<v-flex v-if="photos[index-2]" tag="a">-->
                            <!--<img :src="photos[index-2].src" class="d-block ma-auto" style="width: 15vw; height: 15vw">-->
                        <!--</v-flex>-->
                        <!--<v-flex v-if="photos[index-1]" tag="a">-->
                            <!--<img :src="photos[index-1].src" class="d-block ma-auto" style="width: 15vw; height: 15vw">-->
                        <!--</v-flex>-->
                        <!--<v-flex tag="a">-->
                            <!--<img :src="photo.src" class="d-block ma-auto" style="width: 15vw; height: 15vw">-->
                        <!--</v-flex>-->
                        <!--<v-flex v-if="photos[index+1]" tag="a">-->
                            <!--<img :src="photos[index+1].src" class="d-block ma-auto" style="width: 15vw; height: 15vw">-->
                        <!--</v-flex>-->
                        <!--<v-flex v-if="photos[index+2]" tag="a">-->
                            <!--<img :src="photos[index+2].src" class="d-block ma-auto" style="width: 15vw; height: 15vw">-->
                        <!--</v-flex>-->
                    <!--</v-layout>-->
                <!--</v-carousel-item>-->

            <!--</v-carousel>-->
        </div>

        <v-container v-else v-bind="{ ['grid-list-xs']: true }" fluid>
            <v-layout row wrap align-content-start ref="layout">
                <v-flex :style="mediaStyle"
                        style="flex-grow: 0 !important"
                        v-for="(photo, index) in photos"
                        :key="index"
                        tag="a"
                        @click="() => {$emit('isDetail', true)}"

                >
                    <v-card
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

                        <!--<v-card-actions>-->
                            <!--<v-spacer></v-spacer>-->
                            <!--<v-btn icon>-->
                                <!--<v-icon>favorite</v-icon>-->
                            <!--</v-btn>-->
                            <!--<v-btn icon>-->
                                <!--<v-icon>bookmark</v-icon>-->
                            <!--</v-btn>-->
                            <!--<v-btn icon>-->
                                <!--<v-icon>share</v-icon>-->
                            <!--</v-btn>-->
                        <!--</v-card-actions>-->
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    props: ['isDetail'],
    data: () => ({
        MIN_PHOTO_WIDTH: 250,
        FLEX_K: 12,
        mediaStyle: '',
        currentPage: 1,
        width: null,
        // `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        photos: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', }
        ]
    }),
    created () {
        const vm = this
        // let mql = {}
        // for (let i = this.MIN_PHOTO_WIDTH; i < 4000; i+= this.MIN_PHOTO_WIDTH) {
        //     mql[i] = window.matchMedia(`(min-width: ${i}px)`);
        //     mql[i].onchange = function (evt) {
        //         evt.preventDefault()
        //         evt.stopPropagation()
        //         let elementWidth;
        //         if ( window.matchMedia(`(min-width: ${i}px)`).matches) elementWidth = 100 / (i / vm.MIN_PHOTO_WIDTH)
        //         else elementWidth = 100 / ((i - vm.MIN_PHOTO_WIDTH) / vm.MIN_PHOTO_WIDTH)
        //         vm.mediaStyle = `width: ${elementWidth}%`
        //         console.log(evt, Date.now(), vm.mediaStyle, i, window.matchMedia(`(min-width: ${i}px)`).matches)
        //     }
        // }
        // console.log(mql)
        // vm.mediaStyle = `width: ${(100 / (Math.floor(document.body.clientWidth / this.MIN_PHOTO_WIDTH)))}%`
        vm.mediaStyle = `width: ${(100 / (Math.floor(document.body.clientWidth / vm.MIN_PHOTO_WIDTH)))}%`
        window.onresize = function (evt) {
            // this.width = evt.target.innerWidth
            vm.mediaStyle = `width: ${(100 / (Math.floor(evt.target.innerWidth / vm.MIN_PHOTO_WIDTH)))}%`
        }
    },
    computed: {
        currentIndex: {
            get () {
                return this.currentPage - 1
            },
            set (val) {
                this.currentPage = val + 1
            }
        },
    },
  }
</script>

<style scoped>
</style>
